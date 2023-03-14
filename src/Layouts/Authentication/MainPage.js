import React from 'react';

function MainPage(props) {
  return (
    <div>

      <div className="container pt-5">

        <div className="display-5 text-center ">
          <br/>
          <br/>
          <br/>
          <h1><b>Welcome To BetterCinemaExperience</b></h1>
          <h5><b>Click on Register if Account Doesnot Exist !!</b></h5>
        </div>
        <br />
        <div className="container text-center">
          <a className="mx-2 " href="/register">
            <button className="btn btn-success fs-5 text-white">Register</button>
          </a>
          <a className="mx-2" href="/login">
            <button className="btn btn-primary fs-5 text-white ">Login</button>
          </a>
        </div>

      </div>
    </div>
  );
}

export default MainPage;