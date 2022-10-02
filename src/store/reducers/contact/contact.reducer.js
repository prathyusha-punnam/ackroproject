import * as Actions from '../../actions/contact';

const initialState = {
    contacts: null,
    selectedContact: null,
    deletingContacts: [],
};

const contact = function (state = initialState, action) {

    switch ( action.type )
    {

        case Actions.GET_CONTACTS:
        {
            return {
                ...state,
                contacts  : action.payload
            };
        }
        case Actions.SELECT_CONTACT:
        {
            return {
                ...state,
                selectedContact  : action.payload   
                
            };
        }
        case Actions.DELETE_CONTACT:
        {
            var deletingContacts = state.deletingContacts
            deletingContacts.push({
                email : action.payload,
                counter : 10
            })
            return {
                ...state,
                deletingContacts
                
            };
        }
        case Actions.SET_DELETING_CONTACT:
        {
            return {
                ...state,
                deletingContact  : action.payload
                
            };
        }
        case Actions.CANCEL_DELETE:
        {
            const objIndex = state.deletingContacts.findIndex((contact => contact.email == action.payload));

            return {
                ...state,
                deletingContacts : [
                    ...state.deletingContacts.slice(0, objIndex),
                    ...state.deletingContacts.slice(objIndex + 1)
                ]
                
            };
        }
        case Actions.REMOVE_CONTACT:
        {
            const objIndex = state.contacts.findIndex((contact => contact.email == action.payload));

            return {
                ...state,
                contacts : [
                    ...state.contacts.slice(0, objIndex),
                    ...state.contacts.slice(objIndex + 1)
                ]
                
            };
        }
        case Actions.SET_COUNTER:
        {
            var deletingContacts = state.deletingContacts

            const objIndex = deletingContacts.findIndex((contact => contact.email == action.email));
            deletingContacts[objIndex].counter = action.counter

            return {
                ...state,
                deletingContacts : state.deletingContacts.map(contact=> contact.email === action.email ? // Loop through the array to find the post you want to modify
                    { ...contact, counter: action.counter} : contact // Copy the post state and then modify it. Else return the same object.
                )
                
            };
        }
        default:
        {
            return state
        }

    }

}

export default contact;