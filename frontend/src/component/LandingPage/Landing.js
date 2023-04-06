import React from "react";
import "./Landing.css";
import socialsData from "../../Data/socialData";
import headerData from "../../Data/headerData"
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaBlogger,
} from "react-icons/fa";

function Landing() {
  return (
    <div className="landing">
      <div className="landing--container">
        <h1 style={{ color: "#EA738DFF" }}>Siddhant</h1>
        
        <div className="lcl--content">
          {socialsData.linkedIn && (
            <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
              <FaLinkedin
                className="landing--social"
                style={{ color: "#89ABE3FF" }}
                aria-label="LinkedIn"
              />
            </a>
          )}
          {socialsData.github && (
            <a href={socialsData.github} target="_blank" rel="noreferrer">
              <FaGithub
                className="landing--social"
                style={{ color: "#89ABE3FF" }}
                aria-label="GitHub"
              />
            </a>
          )}
          {socialsData.twitter && (
            <a href={socialsData.twitter} target="_blank" rel="noreferrer">
              <FaTwitter
                className="landing--social"
                style={{ color: "#89ABE3FF" }}
                aria-label="Twitter"
              />
            </a>
          )}
          {socialsData.youtube && (
            <a href={socialsData.youtube} target="_blank" rel="noreferrer">
              <FaYoutube
                className="landing--social"
                style={{ color: "#89ABE3FF" }}
                aria-label="YouTube"
              />
            </a>
          )}
          {socialsData.blogger && (
            <a href={socialsData.blogger} target="_blank" rel="noreferrer">
              <FaBlogger
                className="landing--social"
                style={{ color: "#89ABE3FF" }}
                aria-label="Blogger"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Landing;
