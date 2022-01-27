import React, { Component } from 'react';
import '../css/Card.css';







class Card extends Component {


    changeDesign = (e) => {

        if (e.target.style.background !== "blue") {
            e.target.style.background = "blue";
            e.target.style.color = "white";
        } else {
            e.target.style.background = "#ccc";
            e.target.style.color = "black";
        }


    }

    render() {

        const date = new Date(Date.parse(this.props.header));

        let header = [date.getFullYear(), date.getMonth() + 1, date.getDate()]



        return (


            <div className='card'>

                <img alt='pictures' src={this.props.img} />

                <div className='card_content'>
                    <h3>{header.join("-")}</h3>
                    <p>
                        {this.props.body}
                    </p>
                </div>
                <div className='card-footer'>

                    <button onClick={this.changeDesign}>
                        Like
                    </button>

                </div>
            </div>
        )
    }
}

export default Card;
