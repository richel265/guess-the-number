import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewScore } from '../../services/new-score';
import { CommonModule } from '@angular/common';
import { Business } from '../../services/business';

@Component({
  selector: 'app-youwin',
  imports: [FormsModule, CommonModule],
  templateUrl: './youwin.html',
  styleUrl: './youwin.scss'
})
export class Youwin {
  public readonly business = inject(Business)
  private readonly win = inject(NewScore)
  scorerName!: string;

  tryAgain(){
    console.log(this.scorerName)
    this.win.newScore(this.scorerName)
    this.business.newGame()
  }
}
