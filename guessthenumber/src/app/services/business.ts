import { Injectable } from '@angular/core';
import { async } from 'rxjs';
import { AsyncScheduler } from 'rxjs/internal/scheduler/AsyncScheduler';

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
    ["Easy", 20],
    ["Medium", 30],
    ["Hard", 50],
    ["Stellar", 100],
    ["Hacker", 1000],
  ])

  numberToGuess: number = -1
  numberOfGuesses: number = -1

  setMessageSpan(id: string){
    this.inputMessageSpan = this.messages.get(id.toLowerCase())
  }

  newGuessingNumber(difficulty: any){
    this.numberToGuess = Math.floor(Math.random() * difficulty)
  }

  newGame(){
    this.setMessageSpan("loading")
    this.newGuessingNumber(this.difficulties.get("Easy"))
    this.numberOfGuesses = 0
    this.setMessageSpan("guess")
  }

  guessSubmitted(guess: number){
    console.log("Submitted Guess Recieved on Business End.")
    if (guess == this.numberToGuess) {
      console.log("Guess is correct")
      this.setMessageSpan("correct")
      this.numberOfGuesses += 1
      return
    }

    console.log("Nuh uh")
    this.numberOfGuesses += 1
    this.setMessageSpan("incorrect")
    this.inputMessageValue = `${this.numberOfGuesses}`
    setTimeout(() => {
      this.setMessageSpan("guess")
    }, 500)
  }
}
