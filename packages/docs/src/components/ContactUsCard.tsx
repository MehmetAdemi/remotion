import React from "react";
import { Spacer } from "../../components/layout/Spacer";
import ContactUsCardCSS from "./ContactUsCardCSS.module.css";

const ButtonMailto = ({ mailto, label }) => {
  return <a href={mailto}>{label}</a>;
};

export default ButtonMailto;

const panel: React.CSSProperties = {
  backgroundColor: "var(--ifm-background-color)",
  boxShadow: "var(--box-shadow)",
  padding: 10,
  borderRadius: 15,
  flex: 1,
  paddingTop: 30,
  paddingBottom: 10,
  minHeight: 600,
  display: "flex",
  flexDirection: "column",
};

const center: React.CSSProperties = {
  textAlign: "center",
};

const row: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
};

const flex: React.CSSProperties = {
  flex: 1,
};

const step: React.CSSProperties = {
  flex: 1,
  ...panel,
};

const list: React.CSSProperties = {
  listStyleType: "none",
  textAlign: "center",
  paddingLeft: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontWeight: 500,
};

const stepTitle: React.CSSProperties = {
  textAlign: "center",
  fontSize: "1.6em",
  marginBottom: 0,
  color: "var(--ifm-color-primary)",
};

const docsButton: React.CSSProperties = {
  textDecoration: "none",
};

export const ContactUsCardLayout: React.FC<{}> = () => {
  return (
    <div className={ContactUsCardCSS.row}>
      <div style={step}>
        <div>
          <h1 style={center}>
            <span>
              <svg
                style={{ width: 25, height: 25 }}
                xmlns="http://www.w3.org/2000/svg"
                className="ml-4 h-12 transform rotate-45"
                viewBox="0 0 20 15"
                fill="currentColor"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </span>
            <span>Contact us</span>
          </h1>
        </div>
      </div>
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <div className={ContactUsCardCSS.column}>
        <div style={step}>
          <div>
            <h1 style={center}>
              <span>
                <svg
                  style={{ width: 25, height: 25 }}
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-4 h-12 transform rotate-45"
                  viewBox="0 0 20 15"
                  fill="currentColor"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </span>
              <span>Contact us</span>
            </h1>
          </div>
        </div>
        <Spacer />
        <Spacer />
        <Spacer />
        <div style={step}>
          <div>
            <h1 style={center}>
              <span>
                <svg
                  style={{ width: 25, height: 25 }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 22"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>
              <span> Address</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
