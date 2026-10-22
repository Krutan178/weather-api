# ⛅ Weather App

A clean, full-screen weather app built with React. Type a city, hit **Enter**, and get the current conditions with a live background image that matches the weather.

**🔴 [Open Live Demo](https://krutan178.github.io/weather-api/)**

[![Live Demo](https://img.shields.io/badge/live%20demo-weather--api-orange?logo=weather&logoColor=white)](https://krutan178.github.io/weather-api/)

## ✨ Features

- 🔎 **Instant search** — press Enter on any city name
- 🌡️ Full current-conditions card: temperature (°C), condition text, and icons for rain / precipitation / wind speed / humidity
- 🖼️ Dynamic backgrounds — the app switches between a day theme and a cool night theme
- 📱 Responsive, minimal UI

## 🛠️ Tech Stack

| Layer          | Choice                     |
| -------------- | -------------------------- |
| UI             | React 19                   |
| Build tool     | Create React App 5         |
| HTTP requests  | axios                      |
| Weather data   | [WeatherAPI.com](https://www.weatherapi.com/) (free tier) |
| Deployment     | GitHub Pages (auto via Actions) |

## 🚀 Getting Started

```bash
git clone https://github.com/Krutan178/weather-api.git
cd weather-api
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) and search for a city (Mumbai, Tokyo, Berlin…).

> **Note:** the WeatherAPI key lives in `src/App.js`. To use your own, create a free account at [weatherapi.com](https://www.weatherapi.com/signup.aspx) and swap the `key` value — and for production, move the key to an env variable (`REACT_APP_WEATHER_API_KEY`).

## 🌐 Deployment

The app auto-deploys to **GitHub Pages** on every push to `main` — no manual builds needed:

- Workflow: [`.github/workflows/pages.yml`](.github/workflows/pages.yml)
- Live URL: https://krutan178.github.io/weather-api/
- Re-run manually from the **Actions** tab if you ever need it (custom `workflow_dispatch`).

## 📄 License

MIT — see [`LICENSE`](LICENSE) if added. Free to fork and build on.
