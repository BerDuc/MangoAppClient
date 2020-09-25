import React, {Component} from 'react'; 
import {set_bulma_modal} from '../util/utilitaires';
import { Item } from '../model/item'; 


export class EntreeItem extends Component {


    constructor(props){
        super(props);
        this.state = {
            nouvelItemTitre: '',
            nouvelItemDescription: '', 
            itemAjoute: false
        }
        this.addItem = this.addItem.bind(this); 
        this.saveChanges = this.saveChanges.bind(this);
        this.handleChangeTitre = this.handleChangeTitre.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this); 
    }

    componentDidMount() { 
        this.creerModal();
     }


    creerModal(){
        let openers = ["btnAdd"];
        let closers = ["modal_background", "btnConfirmer"];
        set_bulma_modal("modal", openers, closers);
    }

    addItem(){
            if(this.state.nouvelItemTitre !== '' && this.state.nouvelItemDescription !== ''){
            let nouvelItem = new Item(this.state.nouvelItemTitre, this.state.nouvelItemDescription);
            this.setState({
                itemAjoute: true
            })     
            this.props.addItem(nouvelItem); 
        }
    }

    saveChanges(){
        this.props.saveChangesToDB(); 
    }

  
    handleChangeTitre(e){
        this.setState({
            nouvelItemTitre: e.target.value
        })     
    }

    handleChangeDescription(e){
        this.setState({
            nouvelItemDescription: e.target.value
        })
    }

    render(){
        return <div>
                <div className="buttons">
                    <input type="button" className="button is-small is-info" id="btnAdd" value="Ajouter" />
                    <input type="button" className="button is-small is-info" id="btnSave" value="Sauvegarder les ajouts" disabled={!this.state.itemAjoute} onClick={this.saveChanges} />                         
                </div>
                <div id="modal" className="modal">
                    <div className="modal-background" id="modal_background"></div>
                    <div className="modal-content">
                        <header>
                            <h1 className="title">Démarrer la partie</h1>
                        </header>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>
                                        Titre: 
                                    </td>
                                    <td>
                                        <input type="text" className="input" id="txtTitre" onChange={this.handleChangeTitre} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Description: 
                                    </td>
                                    <td>
                                        <input type="text" className="input" id="txtDescription" onChange={this.handleChangeDescription}/>     
                                    </td>
                                </tr>
                            </tbody>
                            
                        </table>
                        <input type="button" className="button is-small is-info" id="btnConfirmer" value="Confirmer" onClick={this.addItem}/>
                    </div>
                </div>
            </div>
    }
}
export default EntreeItem;