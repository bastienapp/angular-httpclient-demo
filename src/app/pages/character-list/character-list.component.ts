import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type Character = {

  id: string;
  name: string;
  image: string;
}

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characterList = Array<Character>();

  // constructeur: ne sert qu'à faire de l'injection de dépendance
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.loadCharacterList();
  }

  loadCharacterList() {
    this.httpClient
      .get<Character[]>("https://hp-api.onrender.com/api/characters")
      .subscribe((response) => {
        //this.characterList = response;
      })
  }
}
