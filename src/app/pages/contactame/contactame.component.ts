import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactame',
  templateUrl: './contactame.component.html',
  styleUrls: ['./contactame.component.scss'],
})
export class ContactameComponent implements OnInit {

  persona ={
    name:'',
    lastname:'',
    email: '',
    message:''
  }

  submit(){
    console.log(this.persona)
  }
  constructor() {}



  ngOnInit(): void {}
}
