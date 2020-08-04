import React from 'react';

export default class Nav extends React.Component{
    render () {
        return (
            <div className="nav">
                <div className="nav-box">
                    <ul>
                        <li><a href="http://www.jd.com" >免费注册</a></li>
                        <li><a href="http://www.jd.com" >我的订单</a></li>
                        <li><a href="http://www.jd.com" >我的京东</a></li>
                        <li><a href="http://www.jd.com" >京东会员</a></li>
                        <li><a href="http://www.jd.com" >企业采购</a></li>
                        <li><a href="http://www.jd.com" >客户服务</a></li>
                        <li><a href="http://www.jd.com" >网站导航</a></li>
                        <li><a href="http://www.jd.com" >手机京东</a></li>
                    </ul>
                </div>
            </div>
        );
    };
}
