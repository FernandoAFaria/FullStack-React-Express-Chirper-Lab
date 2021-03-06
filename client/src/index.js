import React from 'react';
import ReactDOM from 'react-dom';
import Chirps from './components/Chirps';
import Chirp from './components/Chirp';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import CreateAChirp from './components/CreateAChirp';

let Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Chirper</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sign Up</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Log-In</a>
                    </li>
                  
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search Chirps</button>
    </form>
  </div>
</nav>
    )
}


let App = () => {
    return (

        <div>
            <Navbar />
            
            <BrowserRouter>
                <React.Fragment>

                
           
                
                <Switch>
                        
                    <Route exact path ="/" component ={Chirps}></Route>
                        <Route exact path="/create" component={CreateAChirp}></Route>
                    <Route path="/chirp/:id" component={Chirp}></Route>
                       
                </Switch>

                </React.Fragment>
            </BrowserRouter>

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));