import React, { Component } from 'react';
import {connect} from 'react-redux';

import SearchComponent from './Components/SearchComponent';
import ListComponent from './Components/ListComponent';
import ClientsDetailsContainer from './Containers/ClientsDetailsContainer'

import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.onSizeFunction = this.onSizeFunction.bind(this);
    }

    onSizeFunction (){
        if(Object.keys(this.props.findPersonData).length === 0){
            return "fullWindow"
        }else return "sectionWindow"
    }

    render() {
        return (
            <div className="App">
                <div className={"listBox "+this.onSizeFunction()}>
                    <SearchComponent/>
                    <ListComponent/>
                </div>
                <ClientsDetailsContainer/>
            </div>
        );
    }
}

export default connect(
    state => ({
        findPersonData: state.findPersonData
    })
)(App);