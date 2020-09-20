import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"],
})
export class ProjectComponent implements OnInit {
  projectsData = [];
  constructor() {}

  ngOnInit() {
    this.getProjectsData();
  }

  getProjectsData() {
    this.projectsData = [
      {
        name: "REACT FIREBASE UPLOADER MODULE",
        year: "2020",
        description: `A web application for uploading cropped images on firebase storage
        and retrieve image from firebase storage and review those cropped images.
        A dynamic web application created in React and Redux & used Firebase for backend`,
        projectUrl: "https://image-upload-preview-firebase.netlify.app/",
      },
      {
        name: "JOB PORTAL",
        year: "2020",
        description:
          `Developed a Job Portal using React.` +
          "\n" +
          `Used user authentication for both Recruiter and Candidate`,
        projectUrl: "https://job-portal-project.netlify.app/",
      },
      {
        name: "COUNTER APPLICATION",
        year: "2020",
        description: `A web application for simple Counter Application Using React and Redux`,
        projectUrl: "https://counter-demo.netlify.app/",
      },
    ];
  }
}
