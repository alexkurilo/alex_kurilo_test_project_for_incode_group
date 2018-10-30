import React, { Component } from 'react';
import {connect} from 'react-redux';
import "./ListComponent.css";

import firebase from 'firebase';
import {config} from '../Data/data';
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

class ListComponent extends Component {
    constructor(props) {
        super(props);
        this.onClickFunction = this.onClickFunction.bind(this);
    }

    componentWillMount ( ) {
        let myThis = this;
        if (myThis.props.listArr.length === 0){
            let countryRef = firebase.database().ref('/');
            countryRef.once('value', function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    let childData = childSnapshot.val();
                    myThis.props.onAddList(childData);
                });
            });
        }
    }

    onClickFunction (event, item){
        this.props.onSelectPerson(item);
    }

    render() {
        return (
            <div >
                {this.props.listArr.map((item, index) =>
                    <div className="listSection"
                         key={index}
                         onClick={(event)=>this.onClickFunction(event, item)}
                    >
                        <img    src={item.general.avatar}
                                className="iconAvatar"

                        />
                        <section className="names">
                            {item.general.firstName+" "+item.general.lastName}
                        </section>
                    </div>
                )}
            </div>
        );
    }
}

export default connect(
    state => ({
        listArr: state.listArr,
        personData: state.personData
    }),
    dispatch => ({
        onAddList: (list)=>{
            const listArr = list;
            dispatch({type: 'ADD_LIST', listArr})
        },
        onSelectPerson: (item) => {
            const personData = item;
            dispatch({type: 'SELECT_PERSON', personData})
        }
    })
)(ListComponent);