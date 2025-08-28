import { Component, inject } from '@angular/core';
import { Business } from '../../services/business';

@Component({
  selector: 'app-gameinfo',
  imports: [],
  templateUrl: './gameinfo.html',
  styleUrl: './gameinfo.scss'
})
export class Gameinfo {
  public readonly business = inject(Business)
}
