import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE } from "./ActionTypes";

const initialState = {
    user: null,
    loading: false,
    error: null,
    jwt: null,
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
            return { ...state, loading: true, error: null }

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
        case GET_USER_SUCCESS:
            return { ...state, loading: false, error: null, jwt: action.payload }

        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
            return { ...state, loading: false, error: action.payload }

        case GET_USER_FAILURE:
            return { ...state, user: action.payload, loading: false, error: null }

        default:
            return state;
    }

}


export default authReducer;