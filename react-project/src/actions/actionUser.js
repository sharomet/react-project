import { USERS_FETCH_DATA } from '../constants';

export const usersFetchDataSuccess = (users) => {
    return {
        type: USERS_FETCH_DATA,
        users
    }
};

export const usersFetchData = (url) => {
    return (dispatch) => {
        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(users => dispatch(usersFetchDataSuccess(users)))
    }
};