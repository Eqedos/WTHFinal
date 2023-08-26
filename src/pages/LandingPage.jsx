import React from 'react';
import "../styles/landingpage.css";
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';

const LandingPageCard = ({ imageSrc, altText, heading, path }) => {
  return (
    <div className="page-card">
      <img className="card-image" src={imageSrc} alt={altText} />
      <div className="page-card-container">
        <h3 className="card-heading">{heading}</h3>
        <Link to={path}>
          <Button
            id={altText}
            className="login-button"
            variant="contained"
          >
            Login
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
      <div className="tenant-card">
        <LandingPageCard
          imageSrc="tenantlogin.png"
          altText="Tenant"
          heading="GreeNet"
          path="/chatbot"
        />
      </div>
      <div className="landlord-card">
        <LandingPageCard
          imageSrc="landlordlogin.png"
          altText="Landlord"
          heading="check your web carbon footprint"
          path="/search"
        />
      </div>
      <div className="admin-card">
        <LandingPageCard
          imageSrc="adminlogin.png"
          altText="Admin"
          heading="Admin Account"
          path="/adminlogin"
        />
      </div>
    </div>
  );
}
