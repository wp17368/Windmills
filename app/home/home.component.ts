import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  name: string = '';
  description: string = '';
  image: string = '';
  cards: Array<any> = [];
  constructor(private titleService: Title, private http: HttpClient) {
    this.titleService.setTitle(`About us`);
  }
}
