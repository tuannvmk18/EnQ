import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/Core/Services/auth.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  constructor(private auth: AuthService, private fb: FormBuilder, private route: Router) {

  }

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      userName: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  onSubmit(): void {
    console.log(this.LoginForm.value.userName, this.LoginForm.value.password);
    this.auth.login(this.LoginForm.value.userName, this.LoginForm.value.password).subscribe({
      next: (val) => this.handleSuccess(val),
      error: (e) => this.handleError(e)
    });
  }

  handleSuccess(val: any): void {
    this.route.navigate(['dashboard']);
  }

  handleError(e: any): void {
    console.log(e);
  }



}
