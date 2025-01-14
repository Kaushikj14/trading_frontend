import axios from 'axios';
import * as types from './ActionTypes';
import api from '@/config/api';

export const getUserWatchlist = (jwt) => async (dispatch) => {

    dispatch({type:types.GET_USER_WATCHLIST_REQUEST});
    try {
        const response = await api.get(`/api/watchlist/user`, {headers:{
            Authorization:`Bearer ${jwt}`
        }});
    
        dispatch({
            type:types.GET_USER_WATCHLIST_SUCCESS,
            payload : response.data,
        })
        console.log("data from get user watchlist",response.data);
    } catch (error) {
        dispatch({
            type:types.GET_USER_WATCHLIST_FAILURE,
            error:error.message,
        });
        console.log("error",error.message);
        
    }

};

export const addItemToWatchlist = ({coinId,jwt}) => async (dispatch) => {

    dispatch({type:types.ADD_COIN_TO_WATCHLIST_REQUEST});

    try {
        const response = await api.patch(`http://localhost:5454/api/watchlist/add/coin/${coinId}`,{},{
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        });

        dispatch({
            type:types.ADD_COIN_TO_WATCHLIST_SUCCESS,
            payload : response.data,
        })

        console.log("user watchlist---------->",response.data);
        
    } catch (error) {
        dispatch({
            type:types.ADD_COIN_TO_WATCHLIST_FAILURE,
            error:error.message,
        });
    }

};

