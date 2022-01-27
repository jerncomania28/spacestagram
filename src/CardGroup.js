import React, { Component } from 'react';
import axios from 'axios';
import Card from './components/Card';
import "./css/CardGroup.css";
// import {faHeart as FarHeart} from "@fortawesome/free-regular-svg-icons";
// import {faHeart as FasHeart} from "@fortawesome/free-solid-svg-icons";





class CardGroup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [],
            errorMsg: '',

        }
    }

    componentDidMount = () => {

        axios.get('https://images-api.nasa.gov/search?q=description&media_type=image')
            .then(response => {

                const imgCollection = [];

                for (let i = 0; i < 50; i++) {
                    imgCollection.push(response.data.collection.items[i]);
                }
                this.setState({ images: imgCollection })
            })
            .catch(error => {
                this.setState({ errorMsg: "Error retrieving data" })
            })

    }


    render() {

        const { images, errorMsg } = this.state;

        return (
            <div className='card_container'>
                <h1 > spacestagram</h1>

                <div className='card_group'>

                    {
                        images.length ?

                            images.map((itm, i) => {

                                return <Card
                                    key={i} 
                                    img={itm.links[0].href}
                                    body = {itm.data[0].description}
                                    header = {itm.data[0].date_created}
                                />

                            }) : null
                    }

                    {
                        errorMsg ?

                            <div>{errorMsg}</div> : null
                    }

                </div>

            </div >
        )
    }


}

export default CardGroup;