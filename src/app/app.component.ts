import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuestionsComponent } from "./questions/questions.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuestionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'faq-accordion';
}
