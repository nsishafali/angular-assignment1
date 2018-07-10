import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  
  constructor(private formBuilder: FormBuilder,private router: Router) { }
    
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });   
  }
  onSubmit(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    if(this.loginForm.controls.email.value == 'shafali.dhiman@netsolutions.com' && this.loginForm.controls.password.value == 'shafali.dhiman') {
        this.router.navigate(['list-user']);
    }else {
      this.invalidLogin = true;
    }
  }
}
