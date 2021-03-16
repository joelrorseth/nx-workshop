import { Component } from '@angular/core';
import { formatRating } from '@bg-hoard/store/util-formatters';
import { HttpClient } from '@angular/common/http';
import { Game } from '@bg-hoard/util-interface';

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private httpClient: HttpClient) {
    console.log('AppComponent constructed');
  }

  title = 'Board Game Hoard';
  games = this.httpClient.get<Game[]>('/api/games');
  formatRating = formatRating;
}