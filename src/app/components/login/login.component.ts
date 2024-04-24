import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password: new FormControl('', null)
  })

  ngOnInit() {
    console.log(this.loginForm.value);
  }

  login() {
    if (!this.loginForm.valid) {
      // alert('Form is not valid');
      console.log(this.loginForm);
      return;
    }

    alert(
      JSON.stringify(this.loginForm.value)
    )
  }
}
