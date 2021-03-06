import React from "react";
import { Container } from "reactstrap";


const Weather = (props) => {
    return (
        <Container>
            {props.icon && <img src={"http://openweathermap.org/img/w/" + props.icon + ".png"} alt="weather icon"></img>}
            {props.city && props.country && <h2>Location: { props.city }, { props.country }</h2>}
            {props.desc && <p>Current Weather Conditions: { props.desc }</p>}
            {props.temp && <h3>Current Temperature: { props.temp } F</h3>}        
            {props.humidity && <h5>Current Humidity: { props.humidity } %</h5>}
            {props.error && <p>{ props.error }</p>}              
        </Container>
    )
};

export default Weather;