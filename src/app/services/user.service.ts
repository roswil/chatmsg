import { Injectable } from '@angular/core';
import {User} from '../interfaces/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  friends: User[];
  constructor() {
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
   }

   getFriends(){
     return this.friends;
   }
}
