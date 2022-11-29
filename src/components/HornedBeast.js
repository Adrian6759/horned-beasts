import React from "react";

class HornedBeast extends React.Component {
    render () {
        return ( <div>
            <h2>{this.props.title}</h2>
            <p><img src={this.props.imageUrl} alt='' title=''></img>{this.props.imageUrl}</p>
            <p>{this.props.description}</p>
            <p></p>
        </div>

        )
    }
} 

export default HornedBeast;
