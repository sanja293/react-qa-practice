import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dash from "./pages/Dash";
import {ThemeProvider} from '@material-ui/core';
import theme from "./common/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/dash">Dash</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/login">
                            <Login/>
                        </Route>
                        <Route path="/dash">
                            <Dash/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
