import React, { Component } from 'react';
import './App.css';
import Wendoos from "./Wendoos";
import axios from "axios";


axios.defaults.baseURL ='http://localhost:3000';
class App extends Component {
    render() {
        return (
         <Wendoos/>
        );
    }
}

export default App;