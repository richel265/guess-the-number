import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Inputcontainer } from '../inputcontainer/inputcontainer';
import { Scoreboard } from '../scoreboard/scoreboard';

@Component({
  selector: 'app-container',
  imports: [Inputcontainer, Scoreboard],
  templateUrl: './container.html',
  styleUrl: './container.scss'
})
export class Container {
  @Input() inputMessageSpan!: string;
  @Input() inputMessageValue!: string;
  @Output() numberGuessed = new EventEmitter<number>()

  guessedNumber(n: number){
    console.log("Submitted Guess Recieved on Container End.")
    this.numberGuessed.emit(n)
  }
}
