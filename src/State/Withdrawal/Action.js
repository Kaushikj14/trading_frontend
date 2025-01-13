import api from "@/config/api";
import { ADD_PAYMENT_DETAILS_FAILURE, ADD_PAYMENT_DETAILS_REQUEST, ADD_PAYMENT_DETAILS_SUCCESS, GET_PAYMENT_DETAILS_FAILURE, GET_PAYMENT_DETAILS_REQUEST, GET_PAYMENT_DETAILS_SUCCESS, GET_WITHDRWAL_HISTORY_REQUEST, GET_WITHDRWAL_HISTORY_SUCCESS, GET_WITHDRWAL_REQUEST_FAILURE, GET_WITHDRWAL_REQUEST_REQUEST, GET_WITHDRWAL_REQUEST_SUCCESS, WITHDRWAL_FAILURE, WITHDRWAL_PROCEED_FAILURE, WITHDRWAL_PROCEED_REQUEST, WITHDRWAL_PROCEED_SUCCESS, WITHDRWAL_REQUEST, WITHDRWAL_SUCCESS } from "./ActionTypes"


export const withdrawalRequest = ({amount,jwt}) => async (dispatch) =>{
    dispatch({type:WITHDRWAL_REQUEST});

    try {
        const response = await api.post(`/api/withdrawal/${amount}`,null,{headers:{Authorization:`Bearer ${jwt}`}});
        console.log("Withdrawal",response.data);
        dispatch({
            type:WITHDRWAL_SUCCESS,
            payload:response.data,
        })
        
    } catch (error) {

        dispatch({type:WITHDRWAL_FAILURE,payload:error.message});
        
    };
}

export const proceedWithdrawal = ({id,jwt,accept}) => async (dispatch) =>{
    dispatch({type:WITHDRWAL_PROCEED_REQUEST});

    try {
        const response = await api.patch(`/api/admin/withdrawal/${id}/proceed/${accept}`,null,{headers:{Authorization:`Bearer ${jwt}`}});
        console.log("proceed Withdrawal-----------",response.data);
        dispatch({
            type:WITHDRWAL_PROCEED_SUCCESS,
            payload:response.data,
        })
        
    } catch (error) {

        dispatch({type:WITHDRWAL_PROCEED_FAILURE,payload:error.message});
        
    };
}

export const getWithdrawalHistory = (jwt) => async (dispatch) =>{
    dispatch({type:GET_WITHDRWAL_HISTORY_REQUEST});

    try {
        const response = await api.get(`/api/withdrawal/`,{headers:{Authorization:`Bearer ${jwt}`}});
        console.log("get Withdrawal history -------------",response.data);
        dispatch({
            type:GET_WITHDRWAL_HISTORY_SUCCESS,
            payload:response.data,
        })
        
    } catch (error) {

        dispatch({type:GET_PAYMENT_DETAILS_FAILURE,payload:error.message});
        
    };
}

export const getAllWithdrawalRequest = (jwt) => async (dispatch) =>{
    dispatch({type:GET_WITHDRWAL_REQUEST_REQUEST});

    try {
        const response = await api.get(`/api/admin/withdrawal`,{headers:{Authorization:`Bearer ${jwt}`}});
        console.log("get all Withdrawal requests",response.data);
        dispatch({
            type:GET_WITHDRWAL_REQUEST_SUCCESS,
            payload:response.data,
        })
        
    } catch (error) {
         console.log(error);
            
        dispatch({type:GET_WITHDRWAL_REQUEST_FAILURE,payload:error.message});
        
    };
}


export const addPaymentDetails = ({paymentDetails,jwt}) => async (dispatch) =>{
    dispatch({type:ADD_PAYMENT_DETAILS_REQUEST});

    try {
        const response = await api.post(`/api/payment-details`,paymentDetails,{headers:{Authorization:`Bearer ${jwt}`}});
        console.log("add payments requests",response.data);
        dispatch({
            type:ADD_PAYMENT_DETAILS_SUCCESS,
            payload:response.data,
        })
        
    } catch (error) {
         console.log(error);
            
        dispatch({type:ADD_PAYMENT_DETAILS_FAILURE,payload:error.message});
        
    };
}


export const getPaymentDetails = ({jwt}) => async (dispatch) =>{
    dispatch({type:GET_PAYMENT_DETAILS_REQUEST});

    try {
        const response = await api.get(`/api/payment-details`,{headers:{Authorization:`Bearer ${jwt}`}});
        console.log("get payment detail",response.data);
        dispatch({
            type:GET_PAYMENT_DETAILS_SUCCESS,
            payload:response.data,
        })
        
    } catch (error) {
         console.log(error);
            
        dispatch({type:GET_PAYMENT_DETAILS_FAILURE,payload:error.message});
        
    };
}

