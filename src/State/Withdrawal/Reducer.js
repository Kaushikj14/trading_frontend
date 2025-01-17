import  { WITHDRWAL_REQUEST, WITHDRWAL_PROCEED_REQUEST, GET_WITHDRWAL_REQUEST_REQUEST, GET_WITHDRWAL_HISTORY_REQUEST, WITHDRWAL_SUCCESS, ADD_PAYMENT_DETAILS_REQUEST, ADD_PAYMENT_DETAILS_SUCCESS, GET_PAYMENT_DETAILS_SUCCESS, WITHDRWAL_PROCEED_SUCCESS, GET_WITHDRWAL_HISTORY_SUCCESS, GET_WITHDRWAL_REQUEST_SUCCESS, WITHDRWAL_FAILURE, WITHDRWAL_PROCEED_FAILURE, GET_WITHDRWAL_HISTORY_FAILURE, GET_WITHDRWAL_REQUEST_FAILURE } from "./ActionTypes";
import PaymentDetails from "@/page/Payment Details/PaymentDetails";


const initialState = {
    withdrawal : null,
    history :[],
    loading:false,
    error:null,
    PaymentDetails :null,
    request:[]
}

const withdrawalReducer = (state = initialState,action)=>{

    switch(action.type){

        case WITHDRWAL_REQUEST:
        case WITHDRWAL_PROCEED_REQUEST:
        case GET_WITHDRWAL_HISTORY_REQUEST:
        case GET_WITHDRWAL_REQUEST_REQUEST:
            return {
                ...state,
                loading:true,
                error:null,
            };

        case WITHDRWAL_SUCCESS:
            return {
                ...state,
                withdrawal:action.payload,
                loading:false,
                error:null,
            };
        
        case ADD_PAYMENT_DETAILS_SUCCESS:
        case GET_PAYMENT_DETAILS_SUCCESS:
            return {
                ...state,
                PaymentDetails: action.payload,
                loading: false,
                error: null,
            };
         
        case WITHDRWAL_PROCEED_SUCCESS:
            return {
                ...state,
                requests:state.request.map((item)=>{
                    item.id == action.payload.id ? action.payload:item
                }),
                loading:false,
                error:null,
            };
        case GET_WITHDRWAL_HISTORY_SUCCESS:
            return {
                ...state,
                history:action.payload,
                loading: false,
                error: null,
            };        
            case GET_WITHDRWAL_REQUEST_SUCCESS:
                return {
                    ...state,
                    request:action.payload,
                    loading: false,
                    error: null,
                };        
            case WITHDRWAL_FAILURE:
            case WITHDRWAL_PROCEED_FAILURE:
            case GET_WITHDRWAL_HISTORY_FAILURE:
            case GET_WITHDRWAL_REQUEST_FAILURE:
                return {
                    ...state,
                    loading:false,
                    error:action.payload,
                }    
            
            default:
                return state;    
    }
}

export default withdrawalReducer;
