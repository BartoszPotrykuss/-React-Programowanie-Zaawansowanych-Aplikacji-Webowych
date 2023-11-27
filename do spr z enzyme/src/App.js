import React from 'react';
import './App.css';


class App extends React.Component
{
  render() {
  return(
    <div>
      <Component1 />
      <Component2 />
      
    </div>
  );
  }
}

// Komponent 1
function Component1() {
  return(
    <div>
      <p>Component 1</p>
      <KolejnyKomponent1 />
    </div>
  );
};

// Komponent 2
function Component2() {
  return <div>Component 2</div>;
};

// Komponent 3
function Component3() {
  return <div>Component 3</div>;
};

function KolejnyKomponent1()
{
  return(
    <div>
      <p>Kolejny Komponent 1</p>
      <KomponentZPropsami1/>
      <KomponentZPropsami2 name = "Nazwa2"/>
    </div>
  );
}

function KolejnyKomponent2()
{
  return <div>Kolejny Komponent 2</div>
}

function KomponentZPropsami1(props)
{
  if (props.name) 
  {
    return <div>{props.name}</div>;
  }
  else
  {
    return <div>Brak props</div>
  }

}

function KomponentZPropsami2(props)
{
  return <div>{props.name}</div>;
}

export {App, KomponentZPropsami1, KomponentZPropsami2};
