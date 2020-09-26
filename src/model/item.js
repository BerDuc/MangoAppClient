export class Item {

    constructor(_titre, _description, _id=0){
        this.id = _id;
        this.titre = _titre;
        this.description = _description;
    }

    get getId(){
        return this.id;
    }
    set setId(val){
        this.id = val;
    }
    get getTitre(){
        return this.titre;
    }
    set setTitre(val){
        this.titre = val;
    }
    get getDescription(){
        return this.description;
    }
    set setDescription(val){
        this.description = val;
    }
}

export default Item; 