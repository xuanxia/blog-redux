import React,{Component} from 'react';
import {connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {showDeatailData } from '../actions';


class Item extends Component{
    handleShowDetailClick = (detail) =>{
        event.preventDefault();
        this.props.showDeatailData(detail);
    };
    render(){
        const detail =Object.assign(this.props.detail,{index:this.props.index});
        return(
            <a href="#" onClick={this.handleShowDetailClick.bind(this,detail,event)}>{detail.title}</a>
        );
    };
}

const mapStateToProps = state => {
    state.requestInstance.items[state.showDetail.index] = state.showDetail;
    return state;
};

export default connect(mapStateToProps,(dispatch)=>{
    return {
        dispatch,
        showDeatailData: bindActionCreators(showDeatailData,dispatch),
    };
})(Item);
