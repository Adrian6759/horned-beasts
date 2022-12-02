import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class SelectedBeast extends React.Component {
    render() {
        return (
            <>
                <Modal show={this.props.displayModal}
                    onHide={this.props.closeModal}>


                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Card
                            bg='dark'
                            text='light'
                            onClick={this.props.openModal}>
                            <Card.Img src={this.props.selectedBeast.image_url} alt={this.props.selectedBeast.title}/>
                            <Card.Body>
                                <Card.Title>{this.props.selectedBeast.title}</Card.Title>
                                <Card.Text>
                                {this.props.selectedBeast.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.props.closeModal} variant="secondary">Close</Button>
                    </Modal.Footer>
                </Modal>

            </>
        )
    }

}

export default SelectedBeast;