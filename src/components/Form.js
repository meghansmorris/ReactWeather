import React from "react";
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';


const weatherForm = (props) => (
    <Container>
        <Form onSubmit={props.getWeather}>
            <FormGroup>
                <Label for="city">City</Label>
                <Input type="text" name="city" placeholder="Enter Your City" />
            </FormGroup>
            <FormGroup>
                <Label for="country">Country</Label>
                <Input type="text" name="country" placeholder="Enter Your Country" />
            </FormGroup>
            <Button>Get Your Weather</Button>
        </Form>
    </Container>
    // <form onSubmit={props.getWeather}>
    //     <input type="text" name="zip" placeholder="Zip"></input>
    //     <input type="text" name="country" placeholder="Country"></input>
    //     <button>Get Weather</button>
    // </form>
)

export default weatherForm;