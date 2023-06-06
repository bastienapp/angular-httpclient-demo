import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

type Character = {

  id: string;
  name: string;
  image: string;
}

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  characterId!: string | null;
  characterDetail!: Character;

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe((params) => {
        this.characterId = params.get('id');
        this.loadCharacterById();
      });
  }

  loadCharacterById() {
    this.httpClient
      .get<Character[]>(`https://hp-api.onrender.com/api/character/${this.characterId}`)
      .subscribe((response) => {
        this.characterDetail = response[0]
      })
  }
}
