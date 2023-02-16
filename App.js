import logo from './logo.svg';
import './App.css';
import Acordeon from './componentes/acordeon.js';
import Card  from './componentes/card.js';
import Nav from './componentes/nav.js';
import Navtabs from './componentes/nav&tabs.js';
import Jumbotron from './jumbotron.js';
import Footer from './componentes/footer.js';

function App() {
  return (
    <div>
       
       <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Nav/>
      <Navtabs/>
      </div>,

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
      <div style={{ display: "flex", justifyContent: "center"}}>
        <Jumbotron/>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
        <Card/>
        <Card/>
        <Card />
        <Card/>
      </div>
      
    </div>

    <Footer/>

    </div>
   
   


  );
}

export default App;
