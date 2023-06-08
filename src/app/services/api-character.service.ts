import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root' // différences avec 'platform'
})
export class ApiCharacterService {

  readonly API_URL = "https://hp-api.onrender.com/api/";

  constructor(private httpClient: HttpClient) { }

  // charger tous les personnes
  findAll(): Observable<Character[]> {
    return this.httpClient
      .get<Character[]>(`${this.API_URL}characters`);
  }

  // charger un personnage grâce à son identifiant
  findById(cId: string): Observable<Character> {
    // on récupète un tableau et pas un seul personne
    return this.httpClient
      .get<Character[]>(`${this.API_URL}character/${cId}`)
      .pipe(
        map((response) => response[0])
      )
    // regarder du côté des next
  }
}
