import React, { useEffect, useState } from "react";
import "./TopUrls.css";

function TopUrls() {
  const [topUrls, setTopUrls] = useState([]);

  useEffect(() => {
    const fetchTopUrls = async () => {
      try {
        const response = await fetch("http://localhost:3000/url/top");
        const data = await response.json();
        setTopUrls(data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching top URLs:", error);
      }
    };

    fetchTopUrls();
  }, []);

  return (
    <div>
      <h1>Top 100 Most Accessed URLs</h1>
      <table>
        <thead>
          <tr>
            <th>Short URL</th>
            <th>Original URL</th>
            <th>Title</th>
            <th>Access Count</th>
          </tr>
        </thead>
        <tbody>
          {topUrls.map((url, index) => (
            <tr key={index}>
              <td>
                <a
                  href={`http://localhost:3000/url/${url.shortUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {`http://localhost:3000/url/${url.shortUrl}`}
                </a>
              </td>
              <td>{url.originalUrl}</td>
              <td>
                <a
                  href={url.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {url.title || "No title available"}
                </a>
              </td>
              <td>{url.accessCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopUrls;
