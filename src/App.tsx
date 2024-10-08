import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopUrls from "./pages/TopUrls/TopUrls"; // Import the component for the Top 100 URLs page
import ShortenUrl from "./pages/URLShortener/URLShortener"; // Component for shortening URLs

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes for different pages */}
        <Route path="/" Component={ShortenUrl} /> {/* Home page */}
        {/* URL shortener page */}
        <Route path="/top-urls" Component={TopUrls} /> {/* Top 100 URLs page */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
