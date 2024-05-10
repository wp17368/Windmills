import { APP_BASE_HREF, NgIf } from "@angular/common";
import { Component, HostListener, Inject, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [NgIf],
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.scss",
})
export class AboutComponent {
  constructor(
    private readonly router: Router,
    @Inject(APP_BASE_HREF) public baseHref: string
  ) {}
  responsiveDisplay: boolean = false;
  ngOnInit() {
    setTimeout(() => {
      this.refContainer.nativeElement.style.opacity = 1;
    }, 300);
    if (window.innerWidth >= 1100) {
      this.responsiveDisplay = true;
    }
  }
  @ViewChild("container") refContainer: any;
  @HostListener("window:click", ["$event"])
  onClick(event: any) {
    this.refContainer.nativeElement.style.opacity = 0;
    setTimeout(() => {
      this.router.navigate(["projects"]);
    }, 700);
  }
}
