import React from "react";
import { ContactUsCardLayout } from "./ContactUsCard";

const center: React.CSSProperties = {
  textAlign: "center",
};

export const TitleContactUsCard: React.FC = () => {
  return (
    <div>
      <h1 style={center}>Reach out to us</h1>
      <ContactUsCardLayout />
    </div>
  );
};
