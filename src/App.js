import './App.css';
import MenuComponent from "./components/MenuComponent";
import { DISHES } from "./shared/dishes";
import { Navbar, NavbarBrand } from "reactstrap";

function App() {
    return (
        <div className="App">
            <Navbar color="primary" dark>
                <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </div>
            </Navbar>
            <MenuComponent dishes={DISHES}/>
        </div>
    );
}

export default App;
