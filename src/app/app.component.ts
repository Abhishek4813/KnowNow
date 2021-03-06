import { Component } from "@angular/core";
import { NewsService } from "./service/news.service";
import { AuthService } from "./service/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "medoc";
  navbarOpen = false;

  constructor(public authService: AuthService) {}

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
