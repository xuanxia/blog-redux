import {combineReducers } from 'redux';
import {SEEN_REQUEST, RECEIVE_REQUEST,GET_MORE_DATA,CHANGE_DETAIL,DOT_STAR} from '../actions';

const requestInstance = (state ={
    isFetching: false,
    didInvalidate: false,
    items:[]
},action) => {
    switch (action.type){
        case SEEN_REQUEST:
                return {
                    ...state,
                    isFetching: true,
                    didInvalidate:true
                };
        case RECEIVE_REQUEST:
        case GET_MORE_DATA:
                return {
                    ...state,
                    isFetching: false,
                    didInvalidate: false,
                    items:[].concat(state.items,action.items)
                };
        default:
            return state
    }
};

const showDetail = (state = {},action)=>{
    switch (action.type){
        case CHANGE_DETAIL:
            return action.detail;
        case DOT_STAR:
            action.detail.reply_count ++;
            return {
                ...action.detail,
                isDotFlag:!action.detail.isDotFlag,
            };
           // Object.assign({},action.detail,{isDotFlag:!action.detail.isDotFlag,reply_count:(action.detail.reply_count++)});
        default:
            return state
    }
};

const rootRedcure = combineReducers({requestInstance,showDetail});
export default  rootRedcure;