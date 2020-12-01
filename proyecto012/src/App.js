import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: ''
    };
    this.cambioNumero = this.cambioNumero.bind(this);
  }

  render() {
    return (
      <div>
        <p>Ingrese un número binario:
          <input type="text" value={this.state.numero} onChange={this.cambioNumero} />
        </p>
      </div>
    );
  }

  cambioNumero(event) {
    const entrada=event.target.value;
    let cant=0;
    for(let x=0; x<entrada.length;x++)
      if (entrada[x]==='0' || entrada[x]==='1')
        cant++;
    if (cant===entrada.length)
      this.setState( {
        numero: entrada
      })
  }
}

export default App;