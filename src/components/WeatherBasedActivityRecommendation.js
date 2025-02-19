import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherBasedActivityRecommendation = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [activityRecommendation, setActivityRecommendation] = useState([]);
  const [error, setError] = useState(null);

  const weatherAPIKey = "bd5e378503939ddaee76f12ad7a97608"; // Replace with your OpenWeatherMap API key
  const weatherAPIUrl = `https://api.openweathermap.org/data/2.5/weather?q=Maharashtra&appid=${weatherAPIKey}&units=metric`;

  const activities = [
    ["Mini Obstacle Course", "Kids Kayaking", "Nature Walk"],
    ["Zip-Lining", "Rock Climbing", "Adventure Challenges"],
    ["Kayaking", "Obstacle Course", "Team Building Activities"],
    ["Nature Walk", "Relaxation Zones", "Light Kayaking"]
  ];

  const recommendActivities = (weather) => {
    // Define recommendation logic based on weather
    if (weather.main.temp > 30) {
      // Hot weather, recommend water-based or relaxation activities
      setActivityRecommendation(activities[3]);
    } else if (weather.weather[0].main === "Rain") {
      // Rainy weather, recommend indoor or mild outdoor activities
      setActivityRecommendation(activities[2]);
    } else if (weather.main.temp <= 30 && weather.main.temp >= 20) {
      // Pleasant weather, recommend adventure activities
      setActivityRecommendation(activities[1]);
    } else {
      // Cool weather, recommend light activities
      setActivityRecommendation(activities[0]);
    }
  };

  useEffect(() => {
    axios
      .get(weatherAPIUrl)
      .then((response) => {
        setWeatherData(response.data);
        recommendActivities(response.data);
      })
      .catch((err) => {
        setError("Error fetching weather data");
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h2>Weather-Based Activity Recommendations</h2>
      {error && <p>{error}</p>}
      {weatherData ? (
        <div>
          <p>
            Current Weather in Maharashtra: {weatherData.weather[0].description}, Temperature:{" "}
            {weatherData.main.temp}°C
          </p>
          <h3>Recommended Activities:</h3>
          <ul>
            {activityRecommendation.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherBasedActivityRecommendation;
