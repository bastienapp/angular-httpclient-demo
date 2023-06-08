import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { ApiCharacterService } from 'src/app/services/api-character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characterList: Character[] = [];

  // constructeur: ne sert qu'à faire de l'injection de dépendance
  constructor(
    private characterService: ApiCharacterService
  ) { }

  ngOnInit(): void {
    this.characterService.findAll()
      .subscribe((response: Character[]) => {
        this.characterList = response;
      })
  }
}
