import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formLogar : FormGroup;

  constructor(private router : Router, private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.formLogar = this.formBuilder.group({
      email :["", [Validators.required, Validators.email]],
      senha :["", [Validators.required]]
    });
  }

}
