import React,{Component} from 'react';
import {connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {fetchDataIfNeed ,getMoreDataIfNeed} from '../actions';
import Items from '../components/Items'
import Details from '../components/Details';
import Header from  '../components/Header';
require('../css/app.css');
let flag = true;
class App extends Component{
    componentDidMount(){
        /*获取第一页数据*/
        this.props.fetchDataIfNeed(1);
    }
    handleRefreshClick = (e) =>{
        e.preventDefault();
        console.log('点击刷新按钮 dispatch一个action');
        this.props.fetchDataIfNeed(1);
    };
    handlegGetmoreClick = e=>{
        e.preventDefault();
        console.log('点击获取更多 dispatch一个action');

    };

    handleOnScroll = ()=>{
        const scrollTop = this.refs.mainContent.scrollTop;
        const scrollHeight = this.refs.mainContent.scrollHeight;
        if(scrollHeight - scrollTop < 800){
            if(flag){
                flag = false;
                this.props.getMoreDataIfNeed();
                setTimeout(()=>{flag=true},500)
            }
        }

    };
    render() {
        const {isFetching,items} = this.props.requestInstance;
        const detail = this.props.showDetail;
        const isEmpty = items.length === 0;
        return (
            <div className="mainWrapper">
                <Header/>
                <div ref="mainContent" className="mainContent" onScroll={this.handleOnScroll}>
                    {isEmpty
                        ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
                        : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                            <Items items={items} />
                        </div>
                    }
                    <p>
                        {!isFetching && <a href="#" ref="getMoreButton" onClick={this.handlegGetmoreClick}>获取更多</a>}
                    </p>
                </div>
                <div className="detail">
                    <Details detail={detail}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps,(dispatch)=>{
    return {
        dispatch,
        fetchDataIfNeed: bindActionCreators(fetchDataIfNeed,dispatch),
        getMoreDataIfNeed: bindActionCreators(getMoreDataIfNeed,dispatch),
    };
})(App);