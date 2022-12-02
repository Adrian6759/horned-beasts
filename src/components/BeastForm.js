import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class BeastForm extends React.Component {

    handleChange = (event) => {
        event.preventDefault();
        this.props.filterHorns(event.target.value)
        console.log(event.target.value);
    }
    render() {
        return(
        <Form>
                <Form.Label>Horn Selector</Form.Label>
                <Form.Control onChange = {this.handleChange} as = 'select'>
                    <option>Select the Amount of Horns You Want</option>
                    <option value='1'>One Horn</option>
                    <option value="2">Two Horns</option>
                    <option value="3">Three Horns</option>
                    <option value="100">One Hundred Horns</option>
                </Form.Control>
            {/* <Button variant="primary" type="submit">
                Submit
            </Button> */}
        </Form>
        )
    }
}

export default BeastForm;