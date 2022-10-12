import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent{

  miFormulario: FormGroup = this.fb.group({
    name:['testa', [Validators.required]],
    email: ['testa@testing.com', [Validators.required, Validators.email]],
    password: ['1234567', [Validators.required, Validators.minLength(6)]],
  });
  constructor(private fb: FormBuilder,
              private router: Router) { }

  Registro(){
    console.log(this.miFormulario.value);
    this.router.navigateByUrl('/dashboard');
  }

}

