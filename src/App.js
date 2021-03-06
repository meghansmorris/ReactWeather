import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import SiteNav from "./components/Nav";
import ImageHeader from "./components/Jumbotron";

require('dotenv').config();
const REACT_APP_API = process.env.REACT_APP_API;

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    icon: undefined,
    desc: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    //use the element tagName to get the values entered into the form
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${REACT_APP_API}&units=imperial`);
    const data = await api_call.json();

    if(city && country) {
      console.log(data);
      

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        icon: data.weather[0].icon,
        desc: data.weather[0].description,
        error: ''
      })
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        icon: undefined,
        desc: undefined,
        error: 'Please enter a city and country.'
      })
    };
  };

  render() {
    return (
      <div>
        <SiteNav />
        <ImageHeader />
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather 
          temp={this.state.temp} 
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          icon={this.state.icon}
          desc={this.state.desc}
          error={this.state.error}
          />
      </div>
      );
    };
  };

export default App;