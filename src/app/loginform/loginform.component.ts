import { visitAll } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {


  formdata:any;

  dataarry:any = [];



  constructor(private router:Router){

    this.dataarry = JSON.parse(localStorage.getItem("local") || "[]");
    // console.log(this.dataarry);

  }





  load(){
    this.formdata = new FormGroup({
      email: new FormControl("" , Validators.compose([Validators.required , Validators.email])),
      password:new FormControl("", Validators.compose([Validators.required]))

    })
  }




  ngOnInit(): void {
    this.load();


  }






  login(data:any){

     console.log(data);
     console.log(this.dataarry);


    if(data !== null){

      for(let i = 0; i < this.dataarry.length; i++){

        if(data.email == this.dataarry[i].email && data.password == this.dataarry[i].password){

          console.log("success");

          this.router.navigate(['/home'])


        }
        else{
          console.log("failed");

        }

      }
    }
    else
    {
      console.log("data Null");

    }


    }









  }




