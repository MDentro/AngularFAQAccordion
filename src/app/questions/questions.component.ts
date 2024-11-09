import { Component } from '@angular/core';
import { QUESTIONS } from './questions';
import { QuestionComponent } from "./question/question.component";

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [QuestionComponent],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent {
questions = QUESTIONS;
}
