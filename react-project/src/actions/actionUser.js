import { ADD_USER, REMOVE_USER } from '../constants';

export const addUser = (_id, name, email, password, role, create_at, update_at) => ({
    type: ADD_USER,
    _id,
    name,
    email,
    password,
    role
});

export const removeUser = (_id) => ({
    type: REMOVE_USER,
    _id
});