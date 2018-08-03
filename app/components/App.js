import React, { Component } from "react";
import { Link } from "react-router-dom";

const App = (props) => {
    return ( 
        <div>
            <nav>
                <Link to='/'>Home</Link>{' '}
                <Link to='/contacts'>Contacts</Link>
            </nav>
            <div>
                {props.children}
            </div>
        </div>
     );
}
 
export default App;