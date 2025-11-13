import React from "react";

const Weather = ({ weatherData }) => {
  console.log(weatherData);

  return (
    <div className="weather-container">
      {weatherData.weather ? (
        <div className="weather-card">
          <div className="weather-header">
            <div className="location-info">
              <h2 className="location-name">
                {weatherData.name}, {weatherData.sys.country}
              </h2>
              <p className="weather-description">
                {weatherData.weather[0].description}
              </p>
            </div>
            <div className="temperature-section">
              <h1 className="temperature">
                {weatherData.main.temp.toFixed()}°C
              </h1>
            </div>
          </div>

          <div className="weather-details">
            <div className="weather-icon">
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt={weatherData.weather[0].description}
              />
            </div>
            {weatherData.name !== undefined ? (
              <div className="weather-stats">
                <div className="stat-item">
                  <p className="stat-label">Känns som</p>
                  <p className="stat-value">
                    {weatherData.main.feels_like.toFixed()}°C
                  </p>
                </div>
                <div className="stat-item">
                  <p className="stat-label">Vind</p>
                  <p className="stat-value">
                    {weatherData.wind.speed.toFixed()} km/h
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="welcome-message">
          <p>Ange en plats för att se väderinformation</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
