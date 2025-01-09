import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionTypes";


// Register action creator to handle user registration process
// It returns a function that uses Redux Thunk for asynchronous API calls
export const register = (userData) => async (dispatch) => {

    // Dispatch REGISTER_REQUEST to indicate the registration process has started
    dispatch({ type: REGISTER_REQUEST });

    // Base URL for the API endpoint (modify this based on your server configuration)
    const baseUrl = "http://localhost:5454/";

    try {
        // Send POST request to the signup endpoint with user registration data
        const response = await axios.post(`${baseUrl}/auth/signup`, userData);

        // Extract the user data (including jwt token) from the response
        const user = response.data;

        // Log the user data to the console for debugging purposes
        console.log(user);

        // Dispatch REGISTER_SUCCESS and pass the jwt token as payload
        dispatch({ type: REGISTER_SUCCESS, payload: user.jwt });
        
    } catch (error) {
        // Log any errors that occur during the API call
        console.log(error);

        // Dispatch REGISTER_FAILURE and pass the error message as payload
        dispatch({ type: REGISTER_FAILURE, payload: error.message });
    }
};

// Register action creator to handle user registration process
// It returns a function that uses Redux Thunk for asynchronous API calls
export const login = (userData) => async (dispatch) => {

    // Dispatch LOGIN_REQUEST to indicate the registration process has started
    dispatch({ type: LOGIN_REQUEST });

    // Base URL for the API endpoint (modify this based on your server configuration)
    const baseUrl = "http://localhost:5454/";

    try {
        // Send POST request to the signup endpoint with user registration data
        const response = await axios.post(`${baseUrl}/auth/signin`, userData);

        // Extract the user data (including jwt token) from the response
        const user = response.data;

        // Log the user data to the console for debugging purposes
        console.log(user);

        // Dispatch LOGIN_SUCCESS and pass the jwt token as payload
        dispatch({ type: LOGIN_SUCCESS, payload: user.jwt });
        
    } catch (error) {
        // Log any errors that occur during the API call
        console.log(error);

        // Dispatch LOGIN_FAILURE and pass the error message as payload
        dispatch({ type: LOGIN_FAILURE, payload: error.message });
    }
};

// Register action creator to handle user registration process
// It returns a function that uses Redux Thunk for asynchronous API calls
export const getUser = (jwt) => async (dispatch) => {

    // Dispatch LOGIN_REQUEST to indicate the registration process has started
    dispatch({ type: GET_USER_REQUEST });

    // Base URL for the API endpoint (modify this based on your server configuration)
    const baseUrl = "http://localhost:5454/";

    try {
        // Send POST request to the signup endpoint with user registration data
        const response = await axios.get(`${baseUrl}/api/users/profile`,{
            headers:{
                Authorization:`Bearer ${jwt}` 
            }
        });

        // Extract the user data (including jwt token) from the response
        const user = response.data;

        // Log the user data to the console for debugging purposes
        console.log(user);

        // Dispatch LOGIN_SUCCESS and pass the jwt token as payload
        dispatch({ type: GET_USER_SUCCESS, payload: user });
        
    } catch (error) {
        // Log any errors that occur during the API call
        console.log(error);

        // Dispatch LOGIN_FAILURE and pass the error message as payload
        dispatch({ type: GET_USER_FAILURE, payload: error.message });
    }
};



