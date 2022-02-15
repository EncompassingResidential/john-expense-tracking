import React from 'react';
import ReactDOM from 'react-dom';

import logo from './logo.svg';
import './App.css';

// All React coding goes in the src directory.
/*
From Scrimba React
  <MyAwesomeNavBar  />
   <MainContent />

*/

function MainContent() {
  return (
    <div>
     <h1>MainContent Here</h1>
     <h3>React function names are Case SenSITIVE.  When I change a React function name's first character from Upper Case to lower case the function disappears, but does not create a compile error.</h3>
     React calls this Composable.
     <h3>React is Declarative.  Vanilla Javascript is Imperative</h3>
     </div>
  )
}

const element = (
  <h1 className="header">This is JSX 2/15/22 4:03 pm {Date.now()}</h1>
)
console.log(`element here ${element}`)

const escapedString = ( <div> the variable element was just substituted in.</div> )
ReactDOM.render(
  <div>
    <Navbar />
    I put the Javascript variable element here > {element} Curly brackets around it.
    {escapedString}
    React rules: NO less than symbol, at least by itself.  Haven't figured out how to escape it yet.
    <br></br>
    <br></br>
    When I put text in between two BR HTML elements (Open and close new line BR tags.  I think forward slash BR tag is pre-ES6 HTML) 
    <br></br>
    <br></br>
    ALL the React render code DISAPPEARS.  WILD.
    <br></br>
  <div id="SomeThings" class="SomeThings">
    <ul><li>Thing 1</li><li>Thing 2</li></ul>
    <p>Below the things here written in the main ReactDOM.render section.</p>
    <h1>This is JSX code</h1>
  </div>
  <MainContent />
  </div>
,
  document.getElementById("rootExpenseTrackerApp")
);


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}