export class Item {

    constructor(titre, description){
        this._titre = titre;
        this._description = description;
    }

    get titre(){
        return this._titre;
    }
    set titre(val){
        this._titre = val;
    }
    get description(){
        return this._description;
    }
    set description(val){
        this._description = val;
    }
}

export default Item; 