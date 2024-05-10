import { Component, Inject, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { APP_BASE_HREF } from "@angular/common";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, HomeComponent, AboutComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  title = "Portfolio";
  constructor(@Inject(APP_BASE_HREF) public baseHref: string) {}
  ngOnInit(): void {}
}
