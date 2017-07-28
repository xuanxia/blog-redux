import React,{Component} from 'react';
import {connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {dotStarIfCould } from '../actions';


class DotStar extends Component{
    handleDotStarClick = (detail) =>{
        event.preventDefault();
        this.props.dotStarIfCould(detail);
    };
    render(){
        const detail = this.props.detail;
        return(
            <div>
                <h4>赞数： {detail.reply_count}</h4>
                <button disabled={!detail.isDotFlag?"":"disabled"} href="#" onClick={this.handleDotStarClick.bind(this,detail,event)}>
                        {!detail.isDotFlag?"点赞":"已点赞"}
                </button>
            </div>
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
        dotStarIfCould: bindActionCreators(dotStarIfCould,dispatch),
    };
})(DotStar);
