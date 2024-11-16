import React, {useState, useEffect} from "react";

export default function Footer() {
  const [quoteData, setQuoteData] = useState({quote: "", author: "" });

useEffect(() => {
  const fetchQuote = async () => {
  try {
    const response = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
    const data = await response.json();
    if (data && data.length > 0) {
      setQuoteData({quote: data[0].quote, author: data[0].author});
    }
  } catch (error) {
    console.error("Error fetching quote:", error);
  }
};

fetchQuote();

}, []);

  return (
    <footer className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <a href="https://github.com/harrisonoakess/startup.git" className="btn btn-outline">
          GitHub Repository
        </a>
      </div>
      <div className = "mt-2">
        <p className = "text-muted">{quoteData.quote}</p>
        <p className = "text-muted">- {quoteData.author}</p>
      </div>
    </footer>
  );
}