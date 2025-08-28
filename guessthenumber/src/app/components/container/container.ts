import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Inputcontainer } from '../inputcontainer/inputcontainer';
import { Scoreboard } from '../scoreboard/scoreboard';
import { Youwin } from '../youwin/youwin';
import { Business } from '../../services/business';

@Component({
  selector: 'app-container',
  imports: [Inputcontainer, Scoreboard, Youwin],
  templateUrl: './container.html',
  styleUrl: './container.scss'
})
export class Container {
  public readonly business = inject(Business)
  @Input() inputMessageSpan!: string;
  @Input() inputMessageValue!: string;
  @Output() numberGuessed = new EventEmitter<number>()

  guessedNumber(n: number){
    console.log("Submitted Guess Recieved on Container End.")
    this.numberGuessed.emit(n)
  }
}
