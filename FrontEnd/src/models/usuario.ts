export class User{
    private _nick : string;
    private _email : string;
    private _password : string;

    constructor(nick: string, email: string, password: string){
        this._nick = nick;
        this._email = email;
        this._password = password;   
      }

      public get nick() : string{
        return this._nick;
      }
      public set nick(nick : string){
        this._nick = nick;
      }
      public get email() : string{
        return this._email;
      }
      public set email(email : string){
        this._email = email;
      }
      public get password() : string{
        return this._password;
      }
      public set password(password : string){
        this._password = password;
      }


}