export class Utilisateur {

    constructor(_nom='', _mdp='', _items=[], _id=0){
        this.id = _id;
        this.identifiant = _nom;
        this.mdp = _mdp;
        this.items = _items; 
    }
    get GetId(){
        return this.id;
    }
    set SetId(val){
        this.id = val;
    }
    get GetNom(){
        return this.identifiant;
    }
    set SetNom(val){
        this.identifiant = val;
    }
    get GetMdp(){
        return this.mdp;
    }
    set SetMdp(val){
        this.mdp = val;
    }
    get GetItems(){
        return this.items;
    }
    set SetItems(val){
        this.items = val; 
    }
}

export default Utilisateur;