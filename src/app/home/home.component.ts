import { Component, OnInit } from '@angular/core';
import {User} from '../interfaces/user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
    let myUser:User={
      nick :'Rosmery',
      //subnick:'Roswil',//por la interogacion se ovia
      ege:12,
      email:'ros@gmail.com',
      friend:true,
      uid:1
    }
  }
  /*let users:User[]=[
    myUser
  ];*/

  ngOnInit() {
  }

}
