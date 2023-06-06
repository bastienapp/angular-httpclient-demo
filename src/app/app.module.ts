import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharacterListComponent } from './pages/character-list/character-list.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';

/*

Une page qui affiche la liste des personnages (le nom et la photo)
> Composant

Une page qui affiche le détail de chaque personnage (+infos)
> Composant

Pour plus tard:
- L'API
- Un service

*/

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterDetailsComponent
  ],
  imports: [
    // material UI components
    MatCardModule,
    MatGridListModule,
    // other modules
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
