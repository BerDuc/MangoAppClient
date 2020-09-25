import React, {Component} from 'react'; 
import {Item} from './item';
import {EntreeItem} from './entree_item'; 

class Liste extends Component {

    render(){

        let items = []; 
        this.props.utilisateur.items.forEach((item, key) => {
            items.push(<Item key={key} item={item} />); 
        });


        return <div className="columns">
                <div className="column is-8 is-offset2">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Titre</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody id="liste_items">
                            {items}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspn="2">
                      
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    <EntreeItem 
                        addItem={this.props.addItem}
                        saveChangesToDB={this.props.saveChanges} />
                </div>
           </div>
           
    }
}


export default Liste;
