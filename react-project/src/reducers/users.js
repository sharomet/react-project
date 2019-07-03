import { ADD_USER } from '../constants';

const USERS = [
    {_id: 1, name: 'Alex', email: 'sh@mail.com', password: '123456', role: 3},
    {_id: 2, name: 'Smith', email: 'sm@mail.com', password: '123456', role: 3},
    {_id: 3, name: 'John', email: 'test@mail.com', password: '123456', role: 3},
];

const users = (state = USERS, { _id, name, email, password, role, type }) => {
    switch (type) {
        case ADD_USER :
            return [
                ...state, {
                    _id, name, email, password, role
                }
            ];
        default:
            return state;
    }

};

export default users;