import React from 'react';

export default class Header extends React.Component{
    render(){
        return (
            <div className="header-box">
                <div className="header">
                    <div className="logo-box">
                        <a href="http://www.jd.com">
                            <img 
                            width="150" height="120"
                            src={require("./../img/timg.jpeg")}
                            alt="logo"/>
                        </a>
                    </div>
                    <div className="search-box">
                        <div className="search-bar">
                            <input type="text" placeholder="请输入查询商品"></input>
                            <div className="search-btn"><span className="iconfont iconfont-search">&#58940;</span></div>
                            <div className="cart-btn"><span className="iconfont iconfont-cart">&#58939;</span> 我的购物车</div>
                        </div>
                        <ul className="recommend">
                            <li><a href="http://www.jd.com" target="_blank" rel="noopener noreferrer">二手手机</a></li>
                            <li><a href="http://www.jd.com" target="_blank" rel="noopener noreferrer">199减100</a></li>
                            <li><a href="http://www.jd.com" target="_blank" rel="noopener noreferrer">暖心配件</a></li>
                            <li><a href="http://www.jd.com" target="_blank" rel="noopener noreferrer">家电补贴</a></li>
                            <li><a href="http://www.jd.com" target="_blank" rel="noopener noreferrer">12.12元</a></li>
                            <li><a href="http://www.jd.com" target="_blank" rel="noopener noreferrer">每100-50</a></li>
                            <li><a href="http://www.jd.com" target="_blank" rel="noopener noreferrer">美妆护肤</a></li>
                            <li><a href="http://www.jd.com" target="_blank" rel="noopener noreferrer">冬季养殖</a></li>
                        </ul>
                        <ul>
                            <li><a href="http://www.jd.com" target="_blank" rel="noopener noreferrer">秒杀</a></li>
                            <li><a href="http://www.jd.com" target="_blank" rel="noopener noreferrer">优惠券</a></li>
                            <li><a href="http://www.jd.com" target="_blank" rel="noopener noreferrer">PLUS会员</a></li>
                            <li><a href="http://www.jd.com" target="_blank" rel="noopener noreferrer">品牌闪购</a></li>
                            <li><a href="http://www.jd.com" target="_blank" rel="noopener noreferrer">拍卖</a></li>
                            <li><a href="http://www.jd.com" target="_blank" rel="noopener noreferrer">京东时尚</a></li>
                            <li><a href="http://www.jd.com" target="_blank" rel="noopener noreferrer">京东超市</a></li>
                            <li><a href="http://www.jd.com" target="_blank" rel="noopener noreferrer">京东生鲜</a></li>
                            <li><a href="http://www.jd.com" target="_blank" rel="noopener noreferrer">京东国际</a></li>
                            <li><a href="http://www.jd.com" target="_blank" rel="noopener noreferrer">京东金融</a></li>
                        </ul>
                    </div>
                    <div className="ad-box">
                        <a href="http://www.jd.com" target="_blank" rel="noopener noreferrer">
                            <img width="150" height="120"
                            src={require("./../img/mao.jpeg")}
                            alt="ad"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
    
}