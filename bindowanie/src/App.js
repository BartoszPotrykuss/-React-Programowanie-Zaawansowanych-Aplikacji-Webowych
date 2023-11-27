import React from 'react';
import './App.css';

class App extends React.Component
{
  constructor()
  {
    super()

    // Bind w konstruktorze 
    // this.wyswietlDane = this.wyswietlDane.bind(this);
  }

  state = {
    txt: "To jest twoja wiadomośc numer ",
    licznik: 1
  }
  wyswietl()
  {
    let dane = document.querySelector("#dane").value;
    document.querySelector("span").innerHTML=dane;
  }

  wyswietlDane() {
    let dane = document.querySelector("#dane").value;
    document.querySelector("span").innerHTML=this.state.txt + this.state.licznik + ": " + dane;
    this.setState({ licznik: this.state.licznik + 1 });
  }

/*
1. funkcja wyswietl() by pokazac że działa bez binda
2. stworzyć state i wyswietlDane() 
3. this.wyswietlDane by pokazać że nie działa
4. this.wyswietlDane.bind(this)
5. Stworzyć konstruktor i tam pokazać
6. () => this.wyswietlDane 
7. Najlepsza metoda: wyswietlDane = () => {...} !!!
*/

  render(){
    return(
      <div id='main'>
          <h1>Napisz wiadomość</h1>
          <input type="text" id='dane'/>
            <input type="button" value="Zatwierdź" onClick={this.wyswietlDane}/>
          <span></span>


      </div>
    );
  }
}

export default App;
