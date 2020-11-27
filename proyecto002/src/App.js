import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {this.mostrarTitulo('Hola Mundo')}
        {this.mostrarTitulo('Fin')}        
      </div>
    );
  }

  mostrarTitulo(tit) {
    return (<h1>
             {tit}
            </h1>)
  }

}

export default App;