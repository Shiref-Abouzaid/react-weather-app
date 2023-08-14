import "./index.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Ohaio</p>
          <p className="weather-description">Cloudy</p>
        </div>
        <img alt="weather" className="weather-icon" src="icons/01d.png" />
      </div>
      <div className="bottom">
        <p className="temp">18&#8451;</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details:</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like </span>
            <span className="parameter-value">18&#8451;</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind </span>
            <span className="parameter-value">2 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity </span>
            <span className="parameter-value">15%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure </span>
            <span className="parameter-value">15 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
