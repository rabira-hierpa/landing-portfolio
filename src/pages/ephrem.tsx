import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Profile from "../components/profile/profile";

export default function About() {
  const data = useStaticQuery(graphql`
    query {
      allJson(filter: { name: { eq: "Ephrem Mekuria" } }) {
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
