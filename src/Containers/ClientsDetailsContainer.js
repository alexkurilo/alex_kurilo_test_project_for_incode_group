import React, { Component } from 'react';
import {connect} from 'react-redux';

const ClientsDetailsContainer = ({personData}) => {
    const ShowSelectedpersonData = () => {
        if (Object.keys(personData).length !== 0) {
            return (
                <div>
                    <img    src={personData.general.avatar}/>
                    <section>{personData.general.firstName+" "+personData.general.lastName}</section>
                    <section>company: {personData.job.company}, title: {personData.job.title}</section>
                    <section>email: {personData.contact.email}, phone: {personData.contact.phone}</section>
                    <section>address: {personData.address.city+", "+personData.address.country+", "+personData.address.street}</section>
                    <section>zipCode: {personData.address.zipCode}</section>
                </div>
            );
        }
    };
    return(
        <div>
            {ShowSelectedpersonData(personData)}
        </div>
    );
};


export default connect(
    (state) => ({
        personData: state.personData
    })
)(ClientsDetailsContainer);