import React from 'react';
import "../styles/landingpage.css";
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import GreeNetImage from '../assets/GreeNet.png';
import CarbonDataImage from '../assets/CarbonData.png';

const LandingPageCard = ({ imageSrc, altText, heading, description, path }) => {
  return (
    <div className="page-card">
      <img className="card-image" src={imageSrc} alt={altText} />
      <div className="page-card-container">
        <h3 className="card-heading">{heading}</h3>
        <p className="card-description">{description}</p> {/* Display the description */}
        <Link to={path}>
          <Button
            id={altText}
            className="login-button"
            variant="contained"
            style={{ backgroundColor: '#191414' }}
          >
            Start
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default function LandingPage() {
  const theme = useTheme();
  return (
    <div className="LandingPage-row">
      <div>
        <LandingPageCard
          imageSrc={GreeNetImage}
          heading="GreeNet"
          description="Chat with GreeNet to learn about going green."
          path="/chatbot"
        />
      </div>
      <div>
        <LandingPageCard
          imageSrc={CarbonDataImage}
          heading="CarbonData"
          description="Check your website's carbon footprint."
          path="/search"
        />
      </div>
    </div>
  );
}
