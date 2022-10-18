export class Baralho{
    private _valor : number;
    private _nipe : string;

    constructor(valor : number, nipe : string){
        this._valor = valor;
        this._nipe = nipe;
    }

    get valor() : number{
        return this._valor;
    }
    set valor(valor : number){
        this._valor = valor;
    }
    get nipe() : string{
        return this._nipe;
    }
    set nipe(nipe : string){
        this._nipe = nipe;
    }
}