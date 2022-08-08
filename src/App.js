import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
    const clientSecret = "pk_test_E8WGN3swwR27kEjmHB36hwp0maFWyEDf";

    useEffect(() => {
        fetch("https://next-stg.paymobsolutions.com/next/api/v1/customer/guest", {
            method: "POST",
            headers: {
                authorization: `Token ${clientSecret}`,
            },
            body: {
                address: "test",
                email: "test@test.com",
                first_name: "muhammed",
                last_name: "moussa",
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
            });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
