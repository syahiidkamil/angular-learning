import { Component, effect, signal } from '@angular/core';
import { SignalService } from '../../../services/signal.service';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {

  constructor(private signalService: SignalService) {
      let count = signalService.updateCount();
 
      // Register a new effect.
      effect(() => {
        console.log(`The count is: ${count}`);
      });
  }
  
  

}
