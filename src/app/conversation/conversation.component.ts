import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {User} from '../interfaces/user';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  friendId:any;
  friends: User[];
  friend:User;

  constructor(private activatedRoute: ActivatedRoute) { 
    this.friendId=this.activatedRoute.snapshot.params['uid']
    console.log(this.friendId);

    let myUser:User={
      nick :'Rosmery',
      //subnick:'Roswil',//por la interogacion se ovia
      ege:12,
      email:'ros@gmail.com',
      friend:true,
      uid:1
    }

    let usuario1: User = {
      nick: 'Eduardo',
      ege:12,
      email: 'ed@aoe.aoe',
      friend: true,
      uid: 2
    };
    let usuario2: User = {
      nick: 'Freddy',
      ege:12,
      email: 'fred@aoe.aoe',
      friend: true,
      uid: 3
    };
    let usuario3: User = {
      nick: 'Yuliana',
      ege: 18,
      email: 'yuli@aoe.aoe',
      friend: true,
      uid: 4
    };
    let usuario4: User = {
      nick: 'Ricardo',
      ege: 17,
      email: 'rick@aoe.aoe',
      friend: false,
      uid: 5
    };
    let usuario5: User = {
      nick: 'Marcos',
      ege: 30,
      email:'marcos@aoe.aoe',
      friend: false,
      uid: 6
    };
    this.friends=[usuario1,usuario2,usuario3,usuario5,myUser];
    this.friend=this.friends.find(record=>{
      return record.uid==this.friendId;
    });
    console.log(this.friend);

  }

  ngOnInit() {
  }

}
