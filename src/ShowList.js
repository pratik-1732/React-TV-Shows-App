// ShowList.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Show List</h1>
      <ul>
        {shows.map((show) => (
          <li key={show.show.id}>
            <Link to={`/show/${show.show.id}`}>
              {show.show.name} - {show.show.network.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
