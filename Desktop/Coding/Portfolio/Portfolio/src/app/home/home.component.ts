import { APP_BASE_HREF } from "@angular/common";
import { Component, HostListener, Inject, ViewChild } from "@angular/core";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  constructor(
    private readonly router: Router,
    @Inject(APP_BASE_HREF) public baseHref: string
  ) {}
  @ViewChild("row") refRow: any;
  @HostListener("window:click", ["$event"])
  onClick(event: any) {
    this.refCursor.nativeElement.style.opacity = 0;
    this.refRow.nativeElement.style.opacity = 0;
    setTimeout(() => {
      this.router.navigate(["about"]);
    }, 300);
  }
  @ViewChild("cursor") refCursor: any;
  //(what we listen for and where, [what happens when we hear something])
  @HostListener("document:mousemove", ["$event"])
  @HostListener("document:mouseenter", ["$event"])
  onMouseMove(event: any) {
    this.refCursor.nativeElement.style.display = "inline";
    this.refCursor.nativeElement.style.left = event.pageX + "px";
    this.refCursor.nativeElement.style.top = event.pageY + "px";
  }
  @HostListener("document:mouseleave", ["$event"])
  onMouseOut($out: any) {
    this.refCursor.nativeElement.style.display = "none";
  }
}
