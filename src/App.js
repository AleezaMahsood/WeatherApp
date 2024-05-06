import axios from 'axios'
import React, { useEffect,useState } from "react";
import"./App.css"
function App() {
  const apiKey="b9c3570398287eec5b49a0af735d2437"
  const [data,setData]=useState({})
  const [inputCity,setInputCity]=useState("")
  const getWeather=(cityName)=>{
    if(!cityName) return
    const apiURL="https://api.openweathermap.org/data/2.5/weather?q="+ cityName+"&appid="+apiKey
    axios.get(apiURL).then((res)=>{
       console.log("response",res.data)
       setData(res.data)
    }).catch((err)=>{
      console.log("Error",err)
    })
  }
  const handleInput=(e)=>{
     setInputCity(e.target.value)
  }
  const handleSearch=()=>{
    getWeather(inputCity)
  }
  useEffect(()=>{
    getWeather("mumbai")
  },[])
  return (
     <div className='col-md-12'>
        <div className='weatherbg'>
          <h2 className='heading'>Weather App</h2>
          <div className="d-grid gap-3 col-4 mt-4">
            <input className="form-control" type="text" value={inputCity} onChange={handleInput} />
            <button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
          </div>
          </div>
          <div className="col-md-12 mt-5">
            <div className="shadow rounded weatherBox">
              <div className='text-center'>
                <img className="weatherIcon" src="https://www.creativefabrica.com/wp-content/uploads/2021/03/31/weather-icon-illustration03-Graphics-10205167-3-580x375.png" />
               </div>
                <h5 className="weatherCity text-center">{data.name}</h5>
                <div className='flex'>
                  <h6 className="temp">Temp: {((data?.main?.temp)-273.15).toFixed(2)}°C</h6>
                  <h6 className="temp">Feels Like: {((data?.main?.feels_like)-273.15).toFixed(2)}°C</h6>
                </div>
                <div className='flex'>
                  <h6 className='temp'>Wind Speed: {data?.wind?.speed} km</h6>
                  <h6 className="temp">Humidity: {data?.main?.humidity} %</h6>
                </div> 
                <div className='flex'>
                  <h6 className='sunrise-sunset'>Sunrise: {new Date(data?.sys?.sunrise * 1000).toLocaleTimeString('en-IN')}</h6> 
                  <h6 className='sunrise-sunset'>Sunset: {new Date(data?.sys?.sunset * 1000).toLocaleTimeString('en-IN')}</h6> 
                </div>          
            </div>
          </div>

     </div>
  );
}

export default App;
