import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character.model';
import { ApiCharacterService } from 'src/app/services/api-character.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  characterDetail!: Character;

  constructor(
    private route: ActivatedRoute,
    private characterService: ApiCharacterService
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe((params) => {
        const characterId: string | null = params.get('id');
        // ici je sais que j'ai l'identifiant du personnage
        if (characterId !== null) {
          this.characterService
            .findById(characterId)
            .subscribe((character) => {
              this.characterDetail = character
            });
        } else {
          // TODO : afficher un message d'erreur
        }
      });
  }
}
