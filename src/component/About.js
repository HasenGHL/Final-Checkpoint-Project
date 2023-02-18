import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6 fw-bold mb-4">
            <h1>About Us</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ut rhoncus magna, aliquam suscipit eros. Morbi id porttitor neque,
              eu sodales turpis. Fusce et elit eu nisi ultricies facilisis.
              Vivamus nec pulvinar diam, in cursus nibh. Suspendisse sit amet
              nulla vitae urna consectetur suscipit a non mauris. Suspendisse
              justo augue, laoreet et viverra sed, varius ut magna. Pellentesque
              et justo mi. Aliquam erat volutpat. Sed elementum nunc eget tortor
              efficitur auctor. Vivamus sed fermentum nibh. Donec blandit
              rhoncus urna, id efficitur risus hendrerit ac. Integer volutpat
              sapien a lectus maximus placerat. Phasellus eget ipsum at orci
              dapibus egestas. Donec sed.
            </p>
            <NavLink to='/contact' className='btn btn-outline-dark px-3'>Contact Us</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
