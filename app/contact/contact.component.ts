import { NgIf } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  submitted = false;
  constructor(private titleService: Title, private http: HttpClient) {
    this.titleService.setTitle(`Contact us`);
  }
  name: string = '';
  email: string = '';
  message: string = '';

  ngOnInit() {}

  async sendData() {
    console.log('hi');
    const url = 'https://formsubmit.co/ajax/piatywymiar74@gmail.com';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });

    const data = {
      name: this.name,
      email: this.email,
      message: this.message,
    };
    console.log('To fajnie, ze się odzywasz :) Niedługo odpowiemy!');
    this.submitted = true;
    try {
      //read on the deprecated method ->
      const response = await this.http.post(url, data, { headers }).toPromise();
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
