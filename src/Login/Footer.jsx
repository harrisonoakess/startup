import React, { useState, useEffect } from "react";

export default function Footer() {
  const [quoteData, setQuoteData] = useState({ quote: "", author: "" });

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
        const data = await response.json();
        if (data && data.length > 0) {
          setQuoteData({ quote: data[0].quote, author: data[0].author });
        }
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <a
          href="https://github.com/harrisonoakess/startup.git"
          className="btn btn-outline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </a>
        <div className="quote-container">
          <p className="quote-text">{quoteData.quote}</p>
          <p className="quote-author">- {quoteData.author}</p>
        </div>
      </div>
    </footer>
  );
}
