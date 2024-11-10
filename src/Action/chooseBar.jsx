import React from "react";

export default function ChooseBar() {
  return (
    <section>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Select Task Team
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">Team 1</a>
          <a className="dropdown-item" href="#">Team 2</a>
          <a className="dropdown-item" href="#">Team 3</a>
        </div>
      </div>
    </section>
  );
}