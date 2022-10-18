export class User{
    private _nick : string;
    private _email : string;
    private _password : string;
    private _gamesinit : number;
    private _gameswin : number;
    private _papitestotais : number;
    private _palpitesfeitos : number;


    constructor(nick: string, 
      email: string, 
      password: string, 
      gamesinit : number,
      gameswin : number,
      papitestotais : number,
      papitesfeitos : number){
        this._nick = nick;
        this._email = email;
        this._password = password;
        this._gamesinit = gamesinit;
        this._gameswin = gameswin;
        this._papitestotais = papitestotais;
        this._palpitesfeitos = papitesfeitos;  
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