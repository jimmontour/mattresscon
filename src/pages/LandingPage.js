import React from "react";
import "./LandingPage.css"; // We'll style the page later

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Raymour & Flanigan Presents</h1>
        <h2>MattressCon</h2>
        <h3>Table Top Gaming for a Good Cause!</h3>
      </header>

      <div className="event-details">
        <p>
          Including Warhammer 40K, Lord of the Rings, Age of Sigmar, Dungeons
          and Dragons, Necromunda, Marvel Crisis Protocol, Miniature Painting,
          Board Games, Trivia, Beer, Pizza, and much more!
        </p>

        <div className="event-time">
          <h3>Saturday, July 20</h3>
          <p>10AM - 6PM</p>
          <p>A Free All Ages Event</p>
          <p>Free Admission, $5 per Game</p>
        </div>

        <div className="event-location">
          <h3>Raymour & Flanigan Outlet</h3>
          <p>1650 Walden Ave, Cheektowaga</p>
        </div>

        <p>
          Join in any of the many games throughout the day. No registration
          needed!
        </p>
        <p>
          Purchase commemorative tokens for $5 to join any game, purchase food,
          or beer! All proceeds benefit Habitat for Humanity Buffalo.
        </p>
      </div>

      <footer className="footer">
        <p>All proceeds to benefit Habitat for Humanity Buffalo</p>
        <p>For more information: www.Mattresscon.com</p>
      </footer>
    </div>
  );
};

export default LandingPage;
