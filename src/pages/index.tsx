import * as React from "react";
import { useStaticQuery, type HeadFC, type PageProps, graphql } from "gatsby";
import { IAboutQuery } from "../utils/types";
import { Link } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      allJson {
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
  return (
    <main className="container mx-auto shadow-xl bg-gradient-to-r from-gray-100 to-gray-300">
      <div className="flex-auto py-20  min-h-screen">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 relative">
          <div className="text-9xl font-bold text-blue-400 text-center pb-20">
            Talents
          </div>
          <div className="flex flex-col space-y-10 px-10">
            {data.allJson.nodes.map((data: IAboutQuery) => (
              <React.Fragment key={data.id}>
                <Link
                  className="text-4xl md:text-6xl lg:text-8xl font-semibold text-slate-400 hover:text-slate-800 hover:text-9xl transform hover:translate-x-4 duration-300 ease-in-out"
                  to={`${data.name.split(" ")[0].toLowerCase()}`}
                >
                  {data.name}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
