import React from 'react';
import MenuBox from './content_menu_box'
import SliderBox from './content_slider_box'
import AdBox from './content_ad_box'
import NewBox from './content_new_box'
import Seckill from './content_sec_kill'
import Recommend from './content_recommend'

export default class Content extends React.Component{
    render () {
        return (
            <div className="content">
                <div className="wrapper">
                    <MenuBox></MenuBox>
                    <SliderBox></SliderBox>
                    <AdBox></AdBox>
                    <NewBox></NewBox>
                </div>
                <div className="wrapper">
                    <Seckill></Seckill>
                </div>
                <div className="wrapper direction">
                    <Recommend></Recommend>
                </div>
            </div>
        );
    };
}