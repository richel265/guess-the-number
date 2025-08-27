import { inject, Injectable } from '@angular/core';
import { Business } from './business';

@Injectable({
  providedIn: 'root'
})
export class NewScore {
  private readonly business = inject(Business)
  name = ""
  guesses = -1
  time = -1
}
