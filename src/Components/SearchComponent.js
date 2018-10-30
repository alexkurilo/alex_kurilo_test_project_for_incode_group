import React, { Component } from 'react';
import {connect} from 'react-redux';

import "./SearchComponent.css";

const SearchComponent = ({searchInput, onFindPerson}) => {
    const Find = (event, searchInput) => {
        console.log(searchInput.value);
        onFindPerson(searchInput.value);
    };

    return(
        <div className="searchWindow">
            <input  className="searchLine"
                    type="search"
                    ref={(input) => {searchInput = input}}
                    onChange={(event)=>Find(event, searchInput)}
                    placeholder="Enter search parameter please."
            />
            {/*<img    className="searchIcon"
                    src="https://png.icons8.com/doodle/50/000000/search.png"
            />*/}
        </div>
    );
};


export default connect(
    (state) => ({
        listArr: state.listArr,
        findPerson: state.findPerson
    }),

    dispatch => ({
        onFindPerson: (name)=>{
            const findPerson = name;
            dispatch({type: 'FIND_PERSON', findPerson})
        }
    })
)(SearchComponent);