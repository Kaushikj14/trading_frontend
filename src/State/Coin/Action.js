import axios from "axios";
import API_BASE_URL from '../../config/api'
import { FETCH_COIN_BY_ID_FAILURE, FETCH_COIN_BY_ID_REQUEST, FETCH_COIN_BY_ID_SUCCESS, FETCH_COIN_DETAILS_FAILURE, FETCH_COIN_DETAILS_REQUEST, FETCH_COIN_DETAILS_SUCCESS, FETCH_COIN_LIST_FAILURE, FETCH_COIN_LIST_REQUEST, FETCH_COIN_LIST_SUCCESS, FETCH_MARKET_CHART_FAILURE, FETCH_MARKET_CHART_REQUEST, FETCH_MARKET_CHART_SUCCESS, FETCH_TOP_50_COINS_FAILURE, FETCH_TOP_50_COINS_REQUEST, FETCH_TOP_50_COINS_SUCCESS, SEARCH_COIN_FAILURE, SEARCH_COIN_REQUEST, SEARCH_COIN_SUCCESS } from "./ActionTypes";
import api from "../../config/api";

export const getCoinList = (page) => async (dispatch) => {

    // Dispatch REGISTER_REQUEST to indicate the registration process has started
    dispatch({ type: FETCH_COIN_LIST_REQUEST });

    // Base URL for the API endpoint (modify this based on your server configuration)
    const baseUrl = "http://localhost:5454";

    try {
        // Send POST request to the signup endpoint with user registration data
        const response = await axios.get(`${baseUrl}/coins?page=${page}`);

        // Extract the  data (including jwt token) from the response
        const data = response.data;

        // Log the user data to the console for debugging purposes
        console.log("Coin List ", data);

        // Dispatch REGISTER_SUCCESS and pass the jwt token as payload
        dispatch({ type: FETCH_COIN_LIST_SUCCESS, payload: data });

    } catch (error) {
        // Dispatch REGISTER_FAILURE and pass the error message as payload
        dispatch({ type: FETCH_COIN_LIST_FAILURE, payload: error.message });

        // Log any errors that occur during the API call
        console.log(error);

    }
};

export const getTop50CoinList = () => async (dispatch) => {

    const baseUrl = "http://localhost:5454";

    dispatch({ type: FETCH_TOP_50_COINS_REQUEST });

    try {
        const response = await axios.get(`${baseUrl}/coins/top50`);
        console.log("Pritnig data from fucntion get top 50 coins", response.data);

        dispatch({ type: FETCH_TOP_50_COINS_SUCCESS, payload: response.data });

    } catch (error) {
        console.log("Error in fetching top 50 coins list", error);
        dispatch({ type: FETCH_TOP_50_COINS_FAILURE, payload: error.message });
    }
};



export const fetchMarketChart = ({ coinId, days, jwt }) => async (dispatch) => {

    const baseUrl = "http://localhost:5454";

    dispatch({ type: FETCH_MARKET_CHART_REQUEST });

    try {
        const response = await axios.get(`${baseUrl}/coins/${coinId}/chart?days=${days}`, {
            headers: { Authorization: `Bearer ${jwt}` },
        });
        console.log("Pritnig data from fucntion get top 50 coins", response.data);

        dispatch({ type: FETCH_MARKET_CHART_SUCCESS, payload: response.data });

    } catch (error) {
                console.log("Error in fetching MARKET CHART",error);
                dispatch({ type: FETCH_MARKET_CHART_FAILURE, payload: error.message });
            }
};



// export const fetchMarketChart = ({coinId,days,jwt}) => async (dispatch) => { 

//     dispatch({ type: FETCH_MARKET_CHART_REQUEST });
//     // const baseUrl = "http://localhost:5454";


//     try {
//         const response = await api.get(`/coins/${coinId}/chart?days=${days}`,{
//             headers:{
//                 Authorization:`Bearer ${jwt}`
//             }
//         });
//         dispatch({ type: FETCH_MARKET_CHART_SUCCESS, payload:response.data  });

//     } catch (error) {
//         console.log("Error in fetching MARKET CHART",error);
//         dispatch({ type: FETCH_MARKET_CHART_FAILURE, payload: error.message });
//     }
// };




export const fetchCoinById = ({ coinId }) => async (dispatch) => {

    dispatch({ type: FETCH_COIN_BY_ID_REQUEST });

    try {
        const response = await api.get(`${API_BASE_URL}/coins/${coinId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch({ type: FETCH_COIN_BY_ID_SUCCESS, payload: response.data });
        console.log("coin by id", response.data);


    } catch (error) {
        console.log("Error in fetching  coins BY ID", error);
        dispatch({ type: FETCH_COIN_BY_ID_FAILURE, payload: error.message });
    }
};

export const fetchCoinDetails = ({ coinId, jwt }) => async (dispatch) => {

    dispatch({ type: FETCH_COIN_DETAILS_REQUEST });

    try {
        const response = await api.get(`/coins/details/${coinId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch({ type: FETCH_COIN_DETAILS_SUCCESS, payload: response.data });
        console.log("coin details", response.data);


    } catch (error) {
        console.log("Error in fetching  coins DETAILS", error);
        dispatch({ type: FETCH_COIN_DETAILS_FAILURE, payload: error.message });
    }
};

export const searchCoin = (keyword) => async (dispatch) => {

    dispatch({ type: SEARCH_COIN_REQUEST });

    try {
        const response = await api.get(`/coins/search?q=${keyword}`);
        dispatch({ type: SEARCH_COIN_SUCCESS, payload: response.data });
        console.log("SEARCH coin ", response.data);


    } catch (error) {
        console.log("Error in SEARCH COIN", error);
        dispatch({ type: SEARCH_COIN_FAILURE, payload: error.message });
    }
};