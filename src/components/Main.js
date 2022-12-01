import React from "react";
import HornedBeast from "./HornedBeast.js"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Main extends React.Component {
    render() {
        return (<div>
            <Container>

                <Row sm={2} md={3} lg={5}>
                    {this.props.beastdata.map(beastData =>
                    (<Col key={beastData._id}>
                        <HornedBeast
                            title={beastData.title}
                            image={beastData.image_url}
                            description={beastData.description}
                            displayModal={this.props.displayModal} />
                    </Col>))}
                </Row>
            </Container>
        </div>

        )
    }
}

export default Main;