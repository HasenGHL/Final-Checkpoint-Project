import React from "react";
import Products from "./Products";


function Home() {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <img src="https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img" alt="background"/>
        <div className="card-img-overlay">
            <div className="container">
                <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
          <p className="card-text lead fs-2">
            CHECK OUT ALL THE COLLECTIONS
          </p>
          <p className="card-text">
          </p>
            </div>
          
        </div>
      </div>
      <Products/>
    </div>
  );
}

export default Home;
