import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

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
    const zip = e.target.elements.zip.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zip},${country}&appid=${REACT_APP_API}&units=imperial`);
    const data = await api_call.json();
    console.log(data);

    var wf = [];
    wf += "<h2>" + data.name + "</h2>";
    wf.forEach(data.list, function(index, val) {
      wf += "<p>"
      wf += val.main.temp + "&degF"
      wf += "</p>"
    })

    // if(zip && country) {
    //   console.log(data);


    //   }

      // this.setState({
      //   temp: data.main.temp,
      //   city: data.name,
      //   country: data.sys.country,
      //   humidity: data.main.humidity,
      //   icon: data.weather[0].icon,
      //   desc: data.weather[0].description,
      //   error: ''
      // })
    // } else {
    //   this.setState({
    //     temp: undefined,
    //     city: undefined,
    //     country: undefined,
    //     humidity: undefined,
    //     icon: undefined,
    //     desc: undefined,
    //     error: 'Please enter a city and country.'
    //   })
    }
  //}

  render() {
    return (
      <div>
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
  }
};

export default App;