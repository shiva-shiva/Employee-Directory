import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
     {console.log(props.results)}
      {props.results.map(result => (
          
        <li key={result.cell} className="list-group-item">
            
          <img alt="Dog" src={result.picture.medium} className="img-fluid" />
           <span>{result.name.first}</span>
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;