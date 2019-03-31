import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//import comps
import Home from './components/home';
import Artist from './components/artist';

const App = () => {
    return(
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/artist/:artistId" component={Artist} />
            </div>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))



