import React, { Component } from 'react';
import axios from 'axios';
import Card from './components/Card';
import "./css/CardGroup.css";
import {faHeart as FarHeart} from "@fortawesome/free-regular-svg-icons";
import {faHeart as FasHeart} from "@fortawesome/free-solid-svg-icons";





class CardGroup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [],
            errorMsg: '',
            icon :FarHeart,
            iconDisplay: false
            }
    }

    componentDidMount = () => {

        axios.get('https://images-api.nasa.gov/asset/as11-40-5874')
            .then(response => {
                this.setState({ images: response.data.collection.items })
            })
            .catch(error => {
                this.setState({ errorMsg: "Error retrieving data" })
            })

    }


    changeIcon = ()=>{

        const {iconDisplay} = this.state;

     
             if(iconDisplay !==true){
            this.setState({icon: FasHeart , iconDisplay:true})
        }else{
            this.setState({icon: FarHeart , iconDisplay:false})
        }
        

       

       
    }



    render() {

        const { images, errorMsg } = this.state;

        console.log(images)


        return (
            <div className='card_container'>
                <h1 > spacestagram</h1>
                
            <div className='card_group'>     
                {
                    images.length ?
                        images.map((itm, i) => {
                            console.log(i)
                            return <Card 
                            key={i} 
                            img={itm.href} 
                            changeIcon = {(e) => this.changeIcon(e)}
                            icon={this.state.icon}
                            // index ={i}
                           
                             />
                        }) : null
                }

                {
                    errorMsg ? <div>{errorMsg}</div> : null
                }
                </div>

            </div >
        )
    }


}

export default CardGroup;