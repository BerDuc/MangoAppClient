export class Utilisateur {

    constructor(nom='', mdp='', items=[], id=0){
        this._id = id;
        this._nom = nom;
        this._mdp = mdp;
        this._items = items; 
    }
    get id(){
        return this._id;
    }
    set id(val){
        this._id = val;
    }
    get nom(){
        return this._nom;
    }
    set nom(val){
        this._nom = val;
    }
    get mdp(){
        return this._mdp;
    }
    set mdp(val){
        this._mdp = val;
    }
    get items(){
        return this._items;
    }
    set items(val){
        this._items = val; 
    }
}

export default Utilisateur;