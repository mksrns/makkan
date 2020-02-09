import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { superAdmin } from '../../_models/superAdmin';
import { SuperAdminService } from '../../_services/superAdmin/super-admin.service';

import * as $ from 'jquery';
import { CommonServicesService } from 'src/app/_services/common-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logged:boolean = false;
  loginError:string;
  loginForm:FormGroup;

  constructor(
    private formbuilder: FormBuilder, 
    private router: Router, 
    public superAdminServ: SuperAdminService,
    private commonServ: CommonServicesService,
    private meta: Meta,
    private titleService: Title
  ) { 
    this.titleService.setTitle('Makkan | Login');
  }

  ngOnInit() {

    this.loginForm = this.formbuilder.group({ 
      email:['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.superAdminServ.logout();
    
    // login form
    $(function(){
      $(".borderbtm input").on("focus", function(){
          $(this).addClass("focus");
      });
      $(".borderbtm input").on("blur", function(){
          if($(this).val()  == "")
              $(this).removeClass("focus");
      });
    });
  }

  onFormSubmit(){
    let superAdmin = this.loginForm.value;
    this.login(superAdmin);
  }

  login(superAdmin:superAdmin){
    this.superAdminServ.login(superAdmin).subscribe(
        data => {
          localStorage.setItem('token', JSON.stringify(data.token));
          localStorage.setItem('currentUser', jwt_decode(data.token).email);
          if(this.superAdminServ.isLoggedIn()){
            this.router.navigate(['/super-admin/dashboard']);
          }
        },
        error => {
          this.logged = true;
          console.log(error);
        }
    );
  } 
}
