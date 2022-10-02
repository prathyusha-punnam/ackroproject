import * as Actions from '../../actions/helper';

const initialState = {
    show : false,
    message : null,
    severity : null,
    dialog: {
        show : false
    }
};

const message = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.SHOW_MESSAGE:
        {
            return {
                ...initialState,
                show  : true,
                message : action.message,
                severity : action.severity
            };
        }
        case Actions.HIDE_MESSAGE:
        {
            return {
                show: false,
                dialog: {
                    show : false
                }
            };
        }
        case Actions.SHOW_DIALOG:
        {
            return {
                ...initialState,
                dialog: {
                    show : true
                }
            };
        }
        case Actions.HIDE_DIALOG:
        {
            return {
                ...initialState,
                dialog: {
                    show : false
                }
            };
        }
        default:
        {
            return state;
        }
    }
};

export default message;