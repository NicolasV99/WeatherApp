# Overview

I developed this "Weather Dashboard" software to deepen my understanding of asynchronous JavaScript and DOM manipulation. As a software engineer, I wanted to practice consuming external APIs (specifically OpenWeatherMap) and handling JSON data structures efficiently to create a responsive user interface without relying on heavy frameworks.

The software is a web-based application where users can enter the name of any city to instantly view the current weather conditions (temperature, description) and a forecast for the upcoming days. It processes raw data using modern ES6 array functions and dynamically renders the results to the screen using a recursive strategy.

The purpose of writing this software was to solidify my skills in managing asynchronous requests using `async/await`, implementing recursion for DOM rendering, and integrating third-party libraries like SweetAlert2 for a better user experience.

[Software Demo Video]()

# Development Environment

To develop this software, I used the following tools:
* Visual Studio Code (Code Editor)
* Git & GitHub (Version Control)
* Google Chrome (for testing and debugging)

I used JavaScript (ES6+) as the primary logic language, along with HTML5 and CSS3 for the structure and styling.
Additionally, I integrated the SweetAlert2 library to handle user errors and alerts gracefully, and I consumed the OpenWeatherMap API to fetch real-time climate data.

# Useful Websites

The following websites were essential for the development of this project:

* [OpenWeatherMap API Documentation](https://openweathermap.org/api)
* [SweetAlert2 Documentation](https://sweetalert2.github.io/)
* [MDN Web Docs - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [JavaScript Recursion Guide](https://www.javascripttutorial.net/javascript-recursion/)

# Future Work

There are several features I plan to add or improve in future iterations of this software:

* Implement a toggle switch to allow users to change between Celsius and Fahrenheit.
* Add automatic location detection using the browser's Geolocation API.
* Improve security by moving the API Key to a backend server instead of keeping it client-side.
* Add dynamic background images that change according to the weather condition (e.g., show clouds when it's cloudy).