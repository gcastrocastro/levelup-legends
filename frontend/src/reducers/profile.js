import {
    LOAD_USER_PROFILE_SUCCESS,
    LOAD_USER_PROFILE_FAIL
} from '../actions/types';

const initialState = {
    username: '',
    games: []
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case LOAD_USER_PROFILE_SUCCESS:
            return {
                ...state,
                username: payload.username,
                games: payload.profile.games,
                id: payload.profile.id,
            }
        case LOAD_USER_PROFILE_FAIL:
            return {
                ...state,
                username: '',
                games: []
            }
        default:
            return state
    };
};