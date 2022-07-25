import Header from "./components/Header";
import { GlobalStyle } from "./GlobalStyles";
import "./fontawesome";
import Sliders from "./components/Slider";
import Home from "./components/Home";
import UserProvider from "./context";

function App() {
    return (
        <UserProvider>
            <Home />
            <GlobalStyle />
        </UserProvider>
    );
}

export default App;
