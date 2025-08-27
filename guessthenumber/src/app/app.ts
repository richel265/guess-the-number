import { Component, inject, signal } from '@angular/core';
import { Container } from './components/container/container';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Business } from './services/business';

@Component({
  selector: 'app-root',
  imports: [Container, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('guessthenumber');
  private readonly logic = inject(Business)

  inputMessageSpan: string = this.logic.inputMessageSpan
  inputMessageValue: string = this.logic.inputMessageValue

  ngOnInit() {
    this.logic.newGame()
  }

  numberGuessed(n: number){
    console.log("Submitted Guess Recieved on App End.")
    this.logic.guessSubmitted(n)
  }
}
