import React from 'react';
import DotStar from '../containers/DotStar'
const Details = ({detail}) => (
    <div>
        <h3>详细信息</h3>
        <ul>
            <li>作者：{detail.author?detail.author.loginname:''}</li>
            <li>头像：<img src={detail.author?detail.author.avatar_url:''} alt='avatar' width="100" height="100"/></li>
            <li>浏览数：{detail.visit_count}</li>
            <li>Tab: {detail.tab}</li>
            <li>最新回复日期：{detail.last_reply_at}</li>
            <li>发布日期：{detail.create_at}</li>
        </ul>
        <div>
            <DotStar detail={detail}/>
        </div>
        <div dangerouslySetInnerHTML={{__html:(detail.content ||"")}}>
        </div>
    </div>
);
export default Details