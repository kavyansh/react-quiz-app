import { questions } from "../data/questions";
import { addQuestion } from "./questions";

export function addingQuestions() {
  questions.forEach((question) => {
    addQuestion(question);
  });
}

// addingQuestions();
