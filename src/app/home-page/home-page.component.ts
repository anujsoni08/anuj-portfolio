import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent implements OnInit {
  selectedTab = "home";
  tabData = [];
  imageUrl = "../../assets/home-page-profile/anuj.jpg";

  constructor() {}

  ngOnInit() {
    this.getTabData();
  }

  getTabData() {
    this.tabData = ["HOME", "WORK", "PROJECTS", "CONTACT"];
  }

  changeTabSelected(tab) {
    this.selectedTab = tab.toLowerCase();
    this.imageUrl = "../../assets/home-page-profile/anuj.jpg";
  }
}
