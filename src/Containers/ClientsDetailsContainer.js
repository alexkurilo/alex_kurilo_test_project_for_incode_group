import React, { Component } from 'react';
import {connect} from 'react-redux';

import "./ClientsDetailsContainer.css";

const ClientsDetailsContainer = ({findPersonData}) => {
    const onHiddenFunction = () => {
        if(Object.keys(findPersonData).length === 0){
            return "hiddenWindow"
        }else return "visibleWindow"
    };

    const ShowSelectedPersonData = () => {
        if (Object.keys(findPersonData).length !== 0) {
            return (
                <div className="findPersonInformation">
                    <img    src={findPersonData.general.avatar}
                            className="fullSizeAvatar"
                    />
                    <div className="detailPersonInformation">
                        <section className="stringName">{findPersonData.general.firstName+" "+findPersonData.general.lastName}</section>
                        <section className="stringJob">{findPersonData.job.title}</section>
                        <section className="stringJob"> {findPersonData.job.company}</section>
                        <section className="headerInformation">Contact information:</section>
                        <section><em>phone:</em> {findPersonData.contact.phone}</section>
                        <section><em>address:</em> {findPersonData.address.city+", "+findPersonData.address.country+", "+findPersonData.address.street}</section>
                        <section><em>zipCode:</em> {findPersonData.address.zipCode}</section>
                    </div>
                </div>
            );
        }
    };
    return(
        <div className={"findPersonWrap "+onHiddenFunction()}>
            {ShowSelectedPersonData(findPersonData)}
        </div>
    );
};


export default connect(
    (state) => ({
        findPersonData: state.findPersonData
    })
)(ClientsDetailsContainer);