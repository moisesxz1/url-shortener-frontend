import React, { useState } from "react";

function URLShortener() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/url/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ originalUrl }),
    });
    console.log(response);
    const data = await response.json();
    setShortUrl(`http://localhost:3000/url/${data.shortUrl}`);
  };

  return (
    <div>
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter URL"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
        />
        <button type="submit">Shorten</button>
      </form>
      {shortUrl && (
        <div>
          <p>
            Shortened URL: <a href={shortUrl}>{shortUrl}</a>
          </p>
        </div>
      )}
    </div>
  );
}

export default URLShortener;
