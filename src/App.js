import Header from "./components/Header";
import { GlobalStyle } from "./GlobalStyles";
import "./fontawesome";
function App() {
    return (
        <>
            <div
                style={{
                    height: "5000px",
                    marginTop: "150px",
                }}
            >
                <Header />
                <div>123</div>
                <div>456</div>
            </div>
            <GlobalStyle />
        </>
    );
}

export default App;
