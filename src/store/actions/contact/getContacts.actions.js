import axios from "axios";
import * as snackAction from '../helper';
export const GET_CONTACTS = 'GET_CONTACTS';
export const SELECT_CONTACT = 'SELECT_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const SET_DELETING_CONTACT = 'SET_DELETING_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';
export const CANCEL_DELETE = 'CANCEL_DELETE';
export const SET_COUNTER = 'SET_COUNTER';


export function getContacts()
{

    return (dispatch) =>
        axios
            .get(`https://randomuser.me/api/?results=4`)
            .then(res => {  

                dispatch(snackAction.hideDialog());

                dispatch(snackAction.showMessage('Contacts fetched successfully', "success"));

                dispatch({
                    type   : GET_CONTACTS,
                    payload: res.data.results
                });

            }).catch(error => {

                console.log(error)

        })
}

export function selectContact(contact)
{

    return (dispatch) =>
       
        dispatch({
            type   : SELECT_CONTACT,
            payload: contact
        });

}

export function removeContact(email)
{

    return (dispatch) => {


        dispatch({
            type   : REMOVE_CONTACT,
            payload: email
        });
    
        dispatch(snackAction.showMessage(`${email} deleted successfully`, "success"));


    }

}

export function deleteContact(email)
{

    return (dispatch) =>
       
        dispatch({
            type   : DELETE_CONTACT,
            payload : email
        });

}



export function cancelDelete(email)
{

    return (dispatch) => {

        dispatch({
            type   : CANCEL_DELETE,
            payload : email
        });
     
    }

}

export function setCounter(counter, email)
{
    return (dispatch) =>
       
        dispatch({
            type   : SET_COUNTER,
            counter,
            email
        });

}