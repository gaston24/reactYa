import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articulos: [],
      recuperado: false
    }
  }

  componentWillMount() {
    fetch('http://scratchya.com.ar/vue/datos.php')
      .then((response) => {
        return response.json()
      })
      .then((art) => {
        setTimeout( () => {this.setState({ 
                        articulos: art,
                        recuperado: true
                     })}, 2000);
      })    
  }

  render() {
    if (this.state.recuperado)
      return this.mostrarTabla()
    else
      return (<div>recuperando datos...</div>)
  }

  mostrarTabla() {
    return (
      <div>
        <table border="1">
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Precio</th>                    
          </tr>
        </thead>
        <tbody>  
          {this.state.articulos.map(art => {
            return (
              <tr key={art.codigo}>
                <td>{art.codigo}</td>
                <td>{art.descripcion}</td>
                <td>{art.precio}</td>
              </tr>
            );
          })}
        </tbody>
        </table>
      </div>
    );
  }
   
}

export default App;