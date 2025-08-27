import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Inputmessage } from '../inputmessage/inputmessage';
import { InputField } from '../input/input';

@Component({
  selector: 'app-inputcontainer',
  imports: [Inputmessage, InputField],
  templateUrl: './inputcontainer.html',
  styleUrl: './inputcontainer.scss'
})
export class Inputcontainer {
  @Input() messageSpan!: string;
  @Input() messageValue!: string;
  @Output() guessedNumber = new EventEmitter<number>()

  numberGuessed(n: number){
    console.log("Submitted Guess Recieved on Input Container End.")
    this.guessedNumber.emit(n)
  }
}
