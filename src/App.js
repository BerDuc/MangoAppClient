import React, { Component } from 'react';
import Identification from './components/identification'; 
import Liste from './components/liste'; 
import 'bulma/css/bulma.css';
import './App.css';
import Utilisateur from './model/utilisateur';
import axios from 'axios'; 

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      utilisateur : new Utilisateur(),
      listeCachee: true,
      identificationCachee: false
    }
    this.goToList = this.goToList.bind(this); 
    this.addItem = this.addItem.bind(this);  
    this.saveChanges = this.saveChanges.bind(this); 
  }

  goToList(user){
    this.setState({
      utilisateur: user,
      listeCachee: false,
      identificationCachee: true
    });
  }

  addItem(item){
    let userUpdated = this.state.utilisateur;
    userUpdated.items.push(item); 
    this.setState({
      utilisateur: userUpdated
    });
  }

  saveChanges(){
    const url = 'https://localhost:5001/api/Utilisateurs/'+this.state.utilisateur.GetId;
   
    const axiosConfig = {
        headers : {
            'content-type': 'application/json',
        },
   
    };
    axios.put(url, this.state.utilisateur, axiosConfig)
        .then( res => console.log(res))
        .catch( err => console.log("code de l'erreur: "+err));
  }

  render(){
    return (
      <div className="App">
        <div className="container">
          <section className="section">
            <div id="idComponent" hidden={this.state.identificationCachee}>
              <Identification goToList={this.goToList}/>            
            </div> 
          </section>
          <section>
            <div id="listComponent" hidden={this.state.listeCachee} >
              <Liste 
                utilisateur={this.state.utilisateur}
                addItem = {this.addItem}
                saveChanges = {this.saveChanges}
              />
            </div>          
          </section>
            
        </div>
      </div>
    );
  } code
}

export default App;
