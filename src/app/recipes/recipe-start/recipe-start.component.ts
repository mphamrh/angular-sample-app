import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recipe-start",
  templateUrl: "./recipe-start.component.html",
  styleUrls: ["./recipe-start.component.css"]
})
export class RecipeStartComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
  }
}
