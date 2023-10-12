import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Profile from "../components/profile/profile";

export default function About() {
  const data = useStaticQuery(graphql`
    query {
      allJson(filter: { name: { eq: "Till Carlos" } }) {
        nodes {
          id
          name
          summary
          tagline
          imgURL
          videoURL
          skills {
            databases
            frameworks
            languages
          }
        }
      }
    }
  `);
  return <Profile {...data} />;
}
