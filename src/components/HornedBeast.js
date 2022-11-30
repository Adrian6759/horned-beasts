import React from "react";
import Card from 'react-bootstrap/Card';
import Heart from './heart.png'

class HornedBeast extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {

            clickCount: 0
        };
    }
    handleClick = () => {
        this.setState({
            clickCount: this.state.clickCount + 1
        });
    }
    render () {
        return ( <div>
            <Card >
                <Card.Title><h1>{this.props.title}</h1></Card.Title>
                <Card.Img fluid src={this.props.image}/>
                <Card.Body>Clicks:<img src={Heart} onClick= {this.handleClick} alt='' heigth='40px' width='40px'/> {this.state.clickCount}
                <p>{this.props.description}</p></Card.Body>
            </Card>
            
        </div>

        )
    }
} 

export default HornedBeast;

