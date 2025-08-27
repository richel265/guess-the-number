import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Business } from '../../services/business';

@Component({
  selector: 'app-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './input.html',
  styleUrl: './input.scss'
})
export class InputField {
  private readonly logic = inject(Business)
  
  numberGuessValue!: number;
  @Output() numberGuessed = new EventEmitter<number>()

  guessSubmit(){
    console.log("Submitted Guess Recieved on Input End.")
    this.numberGuessed.emit(this.numberGuessValue)
  }

  
}
