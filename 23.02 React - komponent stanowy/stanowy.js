const root = ReactDOM.createRoot(document.getElementById("root"));

class Aplikacja2 extends React.Component {
    state = {
        txt: "Napis jeden",
        text: "Napis kolejny",
        licznik: 1
    }
    render(){
        return (
            <React.Fragment>
                <h1>Witaj w componencie stanowym!</h1>
                <section>
                    <p>{this.state.txt} {this.state.licznik}</p>
                    <p>{this.state.text} {this.state.licznik+1}</p>
                </section>
            </React.Fragment>  
        )
    }
}


root.render(<Aplikacja2 />);