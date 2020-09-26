import React, {Component} from 'react'; 
import Utilisateur from './../model/utilisateur';
import axios from 'axios';
import {Item} from './../model/item'; 

class Identfication extends Component {


    constructor(props){
        super(props);
        this.state = {
            entree_id: '',
            entree_mdp: ''
        }
        this.handleChangeId = this.handleChangeId.bind(this);
        this.handleChangeMdp = this.handleChangeMdp.bind(this);
        this.handleData = this.handleData.bind(this); 
        this.identifierUtilisateur = this.identifierUtilisateur.bind(this); 
    }

    identifierUtilisateur(){

        const url = 'https://localhost:5001/api/Utilisateurs/login';

        const axiosConfig = {
            headers : {
                'content-type': 'application/json',
                'nom': this.state.entree_id,
                'mdp': this.state.entree_mdp
            }
        };
        
        axios.get(url, axiosConfig)
            .then( res => this.handleData(res.data))
            .catch( err => console.log("code de l'erreur: "+err));
        }

    handleData(data){
        let itemArray = [];
        data.items.forEach( item => {
            itemArray.push(new Item(item.titre, item.description, item.id));
        })
        let utilisateur = new Utilisateur(data.identifiant, data.mdp, itemArray, data.id); 
        this.props.goToList(utilisateur); 
    }

    handleChangeId(e){
        this.setState({
            entree_id: e.target.value
        })         
    }

    handleChangeMdp(e){
        this.setState({
            entree_mdp: e.target.value
        })
    }

    render(){
        return <div className="columns">       
            <div className="column is-4 is-offset-4">
                <form>
                    <div>
                        <input type="text" className="input" id="txt_name" placeholder="Identifiant" onChange={this.handleChangeId}/> 
                    </div>
                    <div>
                        <input type="password" className="input" id="txt_mdp" placeholder="Mot de passe" onChange={this.handleChangeMdp}/>
                    </div>
                    <div>
                        <input type="button" className="button is-primary" id="btn_envoyer" value="Envoyer" onClick={this.identifierUtilisateur}/>
                    </div>
                </form>
            </div>
        </div>
    }
}

export default Identfication;


