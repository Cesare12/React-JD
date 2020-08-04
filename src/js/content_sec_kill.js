import React from 'react';
export default class Seckill extends React.Component {
    render() {
        return (
            <div className="seckill clearfix">
            <div className="seckill-time">
                <div className="title">京东秒杀</div>
                <div className="time"><span>10:00</span>点场 倒计时</div>
                <div className="count-down">
                    <span>01</span>:<span>30</span>:<span>20</span>
                </div>
            </div>
            <div className="seckill-goods">
                <ul>
                    <li>
                        <div className="pic-box">
                            <a href="http://www.jd.com" target="_blank" target="_blank" rel="noopener noreferrer">
                                <img width="140" height="140"
                                    src="http://img10.360buyimg.com/mobilecms/s280x280_jfs/t1/58536/36/10458/133739/5d7888b8E5f3b396a/8b1a96c186ee2fce.jpg.webp"
                                    alt=""/>
                            </a>
                        </div>
                        <div className="name">联想（lenovo）无线键盘鼠标套装 无线键鼠套装 办公鼠标键盘套装 KN101电脑键盘笔记本键盘 京东自营</div>
                        <div className="price">
                            <span className="price-miaosha"><i>¥</i> 59.00</span><span
                                className="price-origin"><i>¥</i>77.00</span>
                        </div>
                    </li>
                    <li>
                        <div className="pic-box">
                            <a href="http://www.jd.com" target="_blank" target="_blank" rel="noopener noreferrer">
                                <img width="140" height="140"
                                    src="http://img12.360buyimg.com/mobilecms/s280x280_jfs/t1/104262/8/5253/140302/5dede751Ef6c43e1e/2483ddd9f4b6ffb3.jpg.webp"
                                    alt=""/>
                            </a>
                        </div>
                        <div className="name">惠普（HP）小欧290 商务办公台式电脑主机（i3-9100 8G 1TB WiFi蓝牙 Win10 注册五年上门）21.5英寸</div>
                        <div className="price">
                            <span className="price-miaosha"><i>¥</i> 2669.00</span><span
                                className="price-origin"><i>¥</i>3499.00</span>
                        </div>
                    </li>
                    <li>
                        <div className="pic-box">
                            <a href="http://www.jd.com" target="_blank" target="_blank" rel="noopener noreferrer">
                                <img width="140" height="140"
                                    src="http://img11.360buyimg.com/mobilecms/s280x280_jfs/t1/92854/27/4872/104808/5de9f8d2E51ed8573/4d2ae58b36d0ddfd.jpg.webp"
                                    alt=""/>
                            </a>
                        </div>
                        <div className="name">松下（Panasonic）PT-WX3400L 投影仪 投影机办公（标清 3400流明 HDMI）</div>
                        <div className="price">
                            <span className="price-miaosha"><i>¥</i> 2799.00</span><span
                                className="price-origin"><i>¥</i>3399.00</span>
                        </div>
                    </li>
                    <li>
                        <div className="pic-box">
                            <a href="http://www.jd.com" target="_blank" target="_blank" rel="noopener noreferrer">
                                <img width="140" height="140"
                                    src="http://img14.360buyimg.com/mobilecms/s280x280_jfs/t1/104886/14/5366/136236/5dedbaa9Ef507cdec/c9b0dab1848c628b.png.webp"
                                    alt=""/>
                            </a>
                        </div>
                        <div className="name">松下（Panasonic） 面包机 烤面包机 家用 全自动 早餐机 果料自动投放 多功能和面 500g SD-PM105</div>
                        <div className="price">
                            <span className="price-miaosha"><i>¥</i> 799.00</span><span
                                className="price-origin"><i>¥</i>999.00</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="seckill-ad">
                <a href="http://www.jd.com" target="_blank" target="_blank" rel="noopener noreferrer">
                    <img width="120"
                        src="http://img30.360buyimg.com/mobilecms/s260x260_jfs/t1/73879/10/13658/244399/5daec316Ea15c77e9/46f28b7ad4ce8add.jpg.webp"
                        alt=""/>
                </a>
                <div className="desc">宏基笔记本闪购</div>
                <div className="desc">轻薄本电竞本薄款直降</div>
            </div>
        </div>
        );
    };
}