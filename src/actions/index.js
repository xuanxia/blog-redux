export const SEEN_REQUEST = 'SEEN_REQUEST';
export const RECEIVE_REQUEST = 'RECEIVE_REQUEST';
export const GET_MORE_DATA = 'GET_MORE_DATA';
export const CHANGE_DETAIL = 'CHANGE_DETAIL';
export const DOT_STAR = 'DOT_STAR';
const accesstoken = '414d5d5c-4b80-48d0-9f7c-b3fcae2b48c3';
/*prams 查询参数*/
export const senRequest = (prams) => {
    return {
        type: SEEN_REQUEST,
        prams
    }
};
/*resJson 接口返回数据*/
export const receiveRequest = (prams,resJson) =>({
   type: RECEIVE_REQUEST,
    prams,
    items: resJson.data
});

/*detail 详情信息*/
export const chageDetail = (detail)=>{
    return{
        type: CHANGE_DETAIL,
        detail
    }
};

export const dotStarAction = (detail)=>{
    return {
        type:DOT_STAR,
        detail
    }
};

const fetchData = prams => dispatch =>{
  dispatch(senRequest(prams));
   // https://cnodejs.org/api/v1/topics??tab=all&page=2
  return fetch('https://cnodejs.org/api/v1/topics?tab=all&page='+prams)
      .then(response => response.json())
      .then(resJson =>{
          dispatch(receiveRequest(prams,resJson));
      });
};

export const dotStar = detail => dispatch =>{
    // dispatch(senRequest(prams));
    // https://cnodejs.org/api/v1/topics??tab=all&page=2
    return fetch('https://cnodejs.org/api/v1/topic_collect/collect',{method: "POST",body: JSON.stringify({
        accesstoken,
        topic_id:detail.id
    })})
        .then(response => response.json(),response=>{
            window.alert('网络出错 重试');
        })
        .then(resJson =>{
            if(resJson.success){
                dispatch(dotStarAction(detail));
            }else{
               // window.alert(resJson.error_msg);
                dispatch(dotStarAction(detail));
            }
        });
};

/*根据请求状态 判断是否需要获取数据*/
const shouldFetchData = (state) => {
    return true;

};
let pageNumber = 1;
export const getMoreDataIfNeed = parms => (dispatch,getState) =>{
    if(shouldFetchData(getState())){
        return dispatch(fetchData(pageNumber++))
    }
};

export const fetchDataIfNeed = prams => (dispatch,getState) => {
  if(shouldFetchData(getState())){
      return dispatch(fetchData(prams));
  }
};

export const  showDeatailData = detail =>(dispatch)=>{
    return dispatch(chageDetail(detail));
};

export const  dotStarIfCould = detail =>(dispatch)=>{
    return dispatch(dotStar(detail));
};























