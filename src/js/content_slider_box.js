import React from 'react';
import "../css/slider.css"
function ImgSlider(props) {
    return (
        <ul className="clearfix">
            <li>
                <img width="590" height="470" src={props.image} alt="" />
            </li>
        </ul>
    );
}

const btnAttr = {
    left: {
        name: "left-box",
        span: "<"
    },
    right: {
        name: "right-box",
        span: ">"
    }
}
class LeftRightBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.props.onMovePicture(e.target.value);
    }
    render() {
        const btn = this.props.btn;
        return (
            <div className={btnAttr[btn].name}>
                <button value={btn} onClick={this.handleClick}>{btnAttr[btn].span}</button>
            </div>
        );
    };
}

class Points extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.props.onMovePicture(e.target.value);
    }

    renderPoint(points) {
        const currentPic = this.props.currentPic;

        const renderIndexPoints = points.map((point) => {
            var ac = currentPic === point ? "active" : "";
            return (
                <li
                    dataindex={point}
                    key={point}
                    className={ac}
                    value={point}
                    onClick={this.handleClick}
                />
            )
        })
        let style = { width: points.length * 10 * 2 + "px" }
        return <ol style={style}>{renderIndexPoints}</ol>
    }
    render() {
        var indexPoints = []
        for (let i = 0; i < this.props.imagesNums; i++) {
            indexPoints[i] = i;
        }

        return (
            <div className="index-box">
                {this.renderPoint(indexPoints)}
            </div>
        );
    };
}

export default class SliderBox extends React.Component {
    constructor(props) {
        super(props);
        this.movePicture = this.movePicture.bind(this);
        this.state = {
            currentPic: 0
        };
    }
    componentDidMount() {
        this.timerID = setInterval(
          () => this.movePicture('right'),
          2000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }

    movePicture(offset) {
        console.log(offset)
        var currentPic = this.state.currentPic;

        switch(offset){
            case 'left':{
                this.setState({ currentPic: currentPic -= 1 });
                if (currentPic < 0) {
                    this.setState({ currentPic: 4 });
                }
                break;
            }
            case'right':{
                this.setState({ currentPic: currentPic += 1 });
                if (currentPic > 4) {
                    this.setState({ currentPic: 0 });
                }
                break;
            }
            default:{
                this.setState({ currentPic: offset });
            }
        }
    }

    render() {
        const images = [
            require("./../img/1.jpg"),
            require("./../img/2.jpg"),
            require("./../img/3.jpg"),
            require("./../img/4.jpg"),
            require("./../img/5.jpg"),
        ]
        const imagesNums = images.length;
        return (
            <div className="slider-box">
                <div className="slider" id="slider">
                    <ImgSlider image={images[this.state.currentPic]} />
                    <LeftRightBox btn="left" onMovePicture={this.movePicture} />
                    <LeftRightBox btn="right" onMovePicture={this.movePicture} />
                    <Points imagesNums={imagesNums}
                        onMovePicture={this.movePicture}
                        currentPic={this.state.currentPic}
                    >
                    </Points>
                </div>
            </div>
        );
    };
}