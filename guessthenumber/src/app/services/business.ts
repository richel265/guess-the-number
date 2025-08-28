import { Injectable } from '@angular/core';
import { async } from 'rxjs';
import { ScoreboardPerson } from '../constants/scoreboard-person';

@Injectable({
  providedIn: 'root'
})
export class Business {
  inputMessageSpan: any = ""
  inputMessageValue = ``

  messages: Map<string,string> = new Map<string, string>([
    ["loading", "Game is currently loading, please wait..."],
    ["guess", "Try guessing the number."],
    ["correct", "You got it! Want to try again?"],
    ["incorrect", "Nope, try again."],
  ])

  difficulties = new Map<string, number>([
    ["Baby", 5],
    ["Easy", 10],
    ["Medium", 20],
    ["Hard", 30],
    ["Stellar", 50],
    ["Hacker", 100],
    ["Silent", 1000],
  ])

  difficulty: string = "Easy"

  numberToGuess: number = -1
  numberOfGuesses: number = -1
  numberGuessed: boolean = false

  setMessageSpan(id: string){
    this.inputMessageSpan = this.messages.get(id.toLowerCase())
  }

  newGuessingNumber(difficulty: any){
    this.numberToGuess = Math.floor(Math.random() * difficulty)
  }

  newGame(){
    this.setMessageSpan("loading")
    this.newGuessingNumber(this.difficulties.get(this.difficulty))
    this.numberGuessed = false
    this.numberOfGuesses = 0
    this.setMessageSpan("guess")
  }

  guessSubmitted(guess: number){
    console.log("Submitted Guess Recieved on Business End.")
    if (guess == this.numberToGuess) {
      console.log("Guess is correct")
      this.setMessageSpan("correct")
      this.numberOfGuesses += 1
      this.inputMessageValue = `${this.numberOfGuesses}`
      this.numberGuessed = true
      return
    }

    console.log("Nuh uh")
    this.numberOfGuesses += 1
    this.setMessageSpan("incorrect")
    this.inputMessageValue = `${this.numberOfGuesses}`
    setTimeout(() => {
      this.setMessageSpan("guess")
    }, 750)
  }
}
