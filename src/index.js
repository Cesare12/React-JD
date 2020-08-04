import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './js/nav.js'
import Header from './js/header.js'
import Content from './js/content.js'
import './css/index.css';
import './css/common.css'
import './css/reset.css'


class Root extends React.Component{
    render () {
        return (
            <div>
                <Nav></Nav>
                <Header></Header>
                <Content></Content>
            </div>

        );
    };
}

ReactDOM.render(<Root />, document.getElementById("root"));