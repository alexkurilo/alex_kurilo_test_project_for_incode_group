import React, { Component } from 'react';
import {connect} from 'react-redux';

const ClientsDetailsContainer = ({findPersonData}) => {
    const ShowSelectedpersonData = () => {
        if (Object.keys(findPersonData).length !== 0) {
            return (
                <div>
                    <img    src={findPersonData.general.avatar}/>
                    <section>{findPersonData.general.firstName+" "+findPersonData.general.lastName}</section>
                    <section>company: {findPersonData.job.company}, title: {findPersonData.job.title}</section>
                    <section>email: {findPersonData.contact.email}, phone: {findPersonData.contact.phone}</section>
                    <section>address: {findPersonData.address.city+", "+findPersonData.address.country+", "+findPersonData.address.street}</section>
                    <section>zipCode: {findPersonData.address.zipCode}</section>
                </div>
            );
        }
    };
    return(
        <div>
            {ShowSelectedpersonData(findPersonData)}
        </div>
    );
};


export default connect(
    (state) => ({
        findPersonData: state.findPersonData
    })
)(ClientsDetailsContainer);