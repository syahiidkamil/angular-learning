import { Component, computed, effect, signal } from '@angular/core';
import { SignalService } from '../../../services/signal.service';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {
  readonly count = signal(0);

  constructor(private signalService: SignalService) {
      // Register a new effect.
      effect(() => {
        console.log(`The count is: ${"Coba kau bayangkan coba kau renungkan"}.`);
      });
  }

  ngOnInit() {
    setInterval(() => {
      this.count.set(this.count() + 1);
    }, 1000);
  }

  calculateNumber() {
    // let a = 10;
    // let b = 20;
    // let c = a + b;
    // console.log(c);
    // a = 20;
    // console.log(c);

    // const a = signal(10);
    // const b = signal(20);
    // const c = computed(() => a() + b());
    // console.log(c());
    // a.set(100);
    // console.log(c());

    // const showCount = signal(true);
    // const count = signal(0);
    // const conditionalCount = computed(() => {
    //   if (showCount()) {
    //     return `The count is ${count()}.`;
    //   } else {
    //     return 'Nothing to see here!';
    //   }
    // });

    // console.log(conditionalCount());
  }
  
  

}
