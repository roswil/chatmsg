//es como una clase la interface
//con export se puede manejar en cualquier lugar
//cuando no quiere poner algun numero no sea oblgatorio
export interface User{
    nick :string;
    subnick?:string;
    ege?:number;
    email:string;
    friend:boolean;
    uid:any;
}