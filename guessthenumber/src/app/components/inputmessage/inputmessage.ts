import { Component, inject, Input } from '@angular/core';

import { Business } from '../../services/business';

@Component({
  selector: 'app-inputmessage',
  imports: [],
  templateUrl: './inputmessage.html',
  styleUrl: './inputmessage.scss'
})
export class Inputmessage {
  public readonly logic = inject(Business)
}
