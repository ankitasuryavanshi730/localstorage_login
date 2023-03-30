import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restitationform',
  templateUrl: './restitationform.component.html',
  styleUrls: ['./restitationform.component.css']
})
export class RestitationformComponent implements OnInit{


  formdata:any;

  formarry:any = [];



  constructor(private router:Router){}





  ngOnInit(): void {

    this.load();


  }


  load(){

    this.formdata = new FormGroup({

      name: new FormControl(""),
      mobno: new FormControl(""),
      email: new FormControl("" , Validators.compose([Validators.required,Validators.email])),
      password: new FormControl("" ),


    })
  }







  submit(data:any){


    // console.log(data);

    this.formarry = JSON.parse(localStorage.getItem("local") || '[]');


     this.formarry.push(data);

     console.log(this.formarry);

     localStorage.setItem("local" ,JSON.stringify(this.formarry));

     this.load();

     this.router.navigate([''])











  }



}
