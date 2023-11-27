import '../style/App.css';
import fiat from '../image/fiat.jpg';
import multipla from '../image/multipla.jpg';
import Card from './Card';

function App() {
  return (
    <div className="App">
        <Card imageSource = {fiat} title = "Fiat 126p" link = "#" />
        <Card imageSource = {multipla} title = "Multipla" link = "#" />
    </div>
  );
}

export default App;
