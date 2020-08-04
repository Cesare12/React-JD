import React from 'react';
export default class AdBox extends React.Component {
    render() {
        return (
            <div className="ad-box">
                <div className="pic-box">
                    <a href="http://www.jd.com" target="_blank" target="_blank" rel="noopener noreferrer">
                        <img width="100%"
                            src="http://img30.360buyimg.com/pop/s380x300_jfs/t1/51688/16/5477/60593/5d307b2aEf612ebdb/59b8453ca82f7df3.png.webp"
                            alt="" />
                    </a>
                </div>
                <div className="pic-box">
                    <a href="http://www.jd.com" target="_blank" target="_blank" rel="noopener noreferrer">
                        <img width="100%"
                            src="http://img30.360buyimg.com/babel/s380x300_jfs/t1/65430/4/17162/86583/5de4da7aE8e3cf709/37f592e663dd9ae4.jpg.webp"
                            alt="" />
                    </a>
                </div>
                <div className="pic-box">
                    <a href="http://www.jd.com" target="_blank" target="_blank" rel="noopener noreferrer">
                        <img width="100%"
                            src="http://img11.360buyimg.com/babel/s380x300_jfs/t1/48887/2/16984/70672/5de08e70E5011ae3e/75635baa6673692e.jpg.webp"
                            alt="" />
                    </a>
                </div>
            </div>

        );
    };
}