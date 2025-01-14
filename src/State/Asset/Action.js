import axios from "axios";
import * as types from "./ActionTypes";

export const getAssetById = ({assetId,jwt}) => async(dispatch)=>{
    dispatch({type:types.GET_ASSET_REQUEST});

    try {
        
        const response = await axios.get(`/api/asset${assetId}`,{
            headers:{
                Authorization:`Bearer ${jwt}`,
            },
        });

        dispatch({
            type:types.GET_ASSET_SUCCESS,
            payload:response.data,
        });

    } catch (error) {
        dispatch({type:types.GET_ASSET_FAILURE,error:error.message,});
    }
};

export const getAssetDetails = ({coinId,jwt})=> async (dispatch) =>{

    dispatch({type:types.GET_ASSET_DETAILS_REQUEST});

    try {
        const response = await axios.get(`/api/asset/coin/${coinId}/user`,{
            headers:{
                Authorization:`Bearer ${jwt}`,

            },
        });

        dispatch({
            type:types.GET_ASSET_DETAILS_SUCCESS,
            payload:response.data,

        });
    } catch (error) {
        dispatch({
            type:types.GET_ASSET_FAILURE,
            error:error.message,
        });
    }
};

export const getUserAssets = (jwt) => async (dispatch) => {
    dispatch({type:types.GET_USER_ASSET_REQUEST});

    try {
        const response = await axios.get('/api/asset',{
            headers:{
                Authorization:`Bearer ${jwt}`,
            },
        });

        dispatch({
            type:types.GET_USER_ASSET_SUCCESS,
            payload:response.data,
        });
    } catch (error) {
        dispatch({
            type:types.GET_USER_ASSET_FAILURE,
            error:error.message,
        });
    }
};