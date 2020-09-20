import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-work",
  templateUrl: "./work.component.html",
  styleUrls: ["./work.component.css"],
})
export class WorkComponent implements OnInit {
  workData = [];

  constructor() {}

  ngOnInit() {
    this.getWorkData();
  }

  getWorkData() {
    this.workData = [
      {
        position: "SOFTWARE ENGINEER",
        organization: "SIXTY FOUR SQUARES PVT. LTD",
        organizationUrl: "https://64sqs.com/",
        duration: "Jul 2020 - Present",
        description: "Working as a Frontend developer",
        projects: ["myPAT", "Watson"],
        technicalStack: "Angular, Sisense",
      },
      {
        position: "SOFTWARE ENGINEER",
        organization: "EDFORA INFOTECH",
        organizationUrl: "https://mypat.in/",
        duration: "May 2019 - Jun 2020",
        description:
          "Used AGILE methodologies for software development Developed front end for various modules using Angular and React. Developed REST APIs for modules using NodeJS and MongoDB.",
        // projects: ["myPAT", "Watson"],
        technicalStack: "React, Angular, Redux",
      },
      {
        position: "SOFTWARE ENGINEER TRAINEE",
        organization: "MOUNTBLUE TECHNOLOGIES",
        organizationUrl: "https://www.mountblue.io/",
        duration: "Feb 2019 - Jun 2020",
        description:
          "Worked on various projects while learning MERN Stack Development.",
        // projects: ["iBCricket"],
        technicalStack: "React, Redux, NodeJS, MongoDB, ExpressJS",
      },
      {
        position: "TECHNICAL DEVELOPMENT ASSISTANT",
        organization: "VENTUREPACT LLC",
        organizationUrl: "https://venturepact.com/",
        duration: "Jun 2018 – Jul 2018",
        description: "Worked on MEAN STACK Development.",
        // projects: ['CleanTaxonomy Module', 'Attendance Module'],
        technicalStack: "Angular, NodeJS, MongoDB, ExpressJS",
      },
    ];
  }
}
