import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

function DialogsUser(props){
    let path = "/dialogs/" + props.id;
    return (
        <NavLink to={path}>{props.username}</NavLink>
    );
}

export default DialogsUser;