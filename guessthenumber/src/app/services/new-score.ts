import { inject, Injectable } from '@angular/core';
import { Business } from './business';
import { ScoreboardPerson } from '../constants/scoreboard-person';

@Injectable({
  providedIn: 'root'
})
export class NewScore {
  private readonly business = inject(Business)
  name = ""
  guesses = -1
  difficulty = ""

  highScores: ScoreboardPerson[] = [
    
  ]

  newScoreboardPerson(s: string): ScoreboardPerson{
    return {name: s, guesses: this.business.numberOfGuesses, difficulty: this.business.difficulty}
  }

  newScore(name: string){
    if (!this.business.numberGuessed) return;
    console.log(name)
    this.highScores.push(this.newScoreboardPerson(name))
  }
}
