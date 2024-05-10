import { Injectable } from "@angular/core";
import { ProjectInterface } from "../../project-interface";
@Injectable({
  providedIn: "root",
})
export class ProjectsService {
  private projects: Array<ProjectInterface> = [
    {
      id: 0,
      title: "Emgas Website",
      description:
        "A webpage I developed for a small sized company that distributes all kinds of gas in cylinders across the Wielkopolska voivodeship. Visitors can send emails to the company via a form.",
      imgUrl: "/assets/emgas.jpeg",
      liveUrl: "https://emgas.pl/",
      codeUrl: "none",
      technology: ["WordPress", "CSS", "HTML"],
    },
    {
      id: 1,
      title: "Cleaning Website",
      description:
        "A webpage I created for a small sized company that pressure-cleans in all around the Pomerenian voivodeship. Visitors can send emails to the company via a form.",
      imgUrl: "/assets/cleaning.jpeg",
      liveUrl: "http://wysokicel.pl/",
      codeUrl: "https://github.com/wp17368/Cleaning",
      technology: ["Angular", "Typescript", "Bootstrap", "REST"],
    },
    {
      id: 2,
      title: "Windmills Website",
      description:
        "A webpage I created for a small sized company that provides maintenance for windmills. REST API email form included.",
      imgUrl: "/assets/windmills.jpeg",
      liveUrl: "http://windmills.wysokicel.pl/",
      codeUrl: "https://github.com/wp17368/Windmills",
      technology: ["Angular", "TypeScript", "Bootstrap", "REST"],
    },
    {
      id: 3,
      title: `Physiotherapist Webpage`,
      description:
        "A mock webpage I created for when my 3 years younger brother finishes his physiotherapy degree and opens his clinic. I love this guy so much.",
      imgUrl: "/assets/studio-balans.jpeg",
      liveUrl: "https://wp17368.github.io/Studio-Balans/",
      codeUrl: "https://github.com/wp17368/Studio-Balans",
      technology: ["Javascript", "CSS", "HTML"],
    },
    {
      id: 4,
      title: `Battleship`,
      description: `This Vanilla Javascript array-based battleship game breaks the rules - you can set up "bent" ships so it's more difficult to win. Find an opponent and have a go!`,
      imgUrl: "/assets/battleship.jpeg",
      liveUrl: "https://wp17368.github.io/Statki/",
      codeUrl: "https://github.com/wp17368/Statki",
      technology: ["Javascript", "CSS", "HTML"],
    },
  ];
  getProjects() {
    return this.projects;
  }
}
