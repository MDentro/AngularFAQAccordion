import { Component, Input } from "@angular/core";

@Component({
  selector: "app-question",
  standalone: true,
  imports: [],
  templateUrl: "./question.component.html",
  styleUrl: "./question.component.css",
})
export class QuestionComponent {
  @Input({ required: true }) question!: string;
  @Input({ required: true }) answer!: string;
  @Input({ required: true }) expand!: boolean;

  expandAnswer() {
    this.expand = !this.expand;
  }
}
