import { APP_BASE_HREF, NgClass, NgFor, NgIf } from "@angular/common";
import { Component, HostListener, Inject, ViewChild } from "@angular/core";
import { ProjectInterface } from "../../project-interface";
import { ProjectsService } from "../services/projects.service";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [NgFor, NgIf, ProjectsComponent, RouterLink, NgClass],
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.scss",
})
export class ProjectsComponent {
  responsiveDisplay: boolean = false;
  @ViewChild("containerFluid") refContainerFluid: any;
  ngOnInit() {
    if (window.innerWidth <= 1100) {
      this.responsiveDisplay = true;
    }
    console.log(this.responsiveDisplay);
    if (this.show.length === this.projects.length) {
      return;
    } else {
      for (let i = 0; i < this.projects.length; i++) {
        setTimeout(() => {
          this.show.push(i);
        }, i * 100);
      }
    }
  }
  projects: Array<ProjectInterface> = [];
  show: Array<number> = [];
  constructor(
    private service: ProjectsService,
    @Inject(APP_BASE_HREF) public baseHref: string
  ) {
    this.projects = this.service.getProjects();
  }
  @ViewChild("project") refProject: any;
  @HostListener("document:mouseenter", ["$event"])
  onMouseEnter(event: any) {}
}
