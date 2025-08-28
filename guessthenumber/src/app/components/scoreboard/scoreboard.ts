import { Component, inject } from '@angular/core';
import { Business } from '../../services/business';
import { NewScore } from '../../services/new-score';

@Component({
  selector: 'app-scoreboard',
  imports: [],
  templateUrl: './scoreboard.html',
  styleUrl: './scoreboard.scss'
})
export class Scoreboard {
  public readonly logic = inject(NewScore)

}
