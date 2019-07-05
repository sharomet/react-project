import { USERS_FETCH_DATA } from '../constants';

const users = (state = [], action) => {
    switch (action.type) {
        case USERS_FETCH_DATA :
            return action.users;
        default:
            return state;
    }

};

export default users;