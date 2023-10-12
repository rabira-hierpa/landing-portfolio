import { Link } from "gatsby";
import { Container } from "../Container";
import React, { useState } from "react";
import { IAboutQuery } from "../../utils/types";
import { defaultProfilePicture } from "../../utils/helpers";
import Skills from "../cards/skills";

const Profile = (props: any) => {
  const [profilePic, setProfilePic] = useState(props.allJson.nodes[0].imgURL);
  const setDefaultProfilePic = (e: any) => {
    setProfilePic(defaultProfilePicture);
  };
  console.log(props.allJson.nodes[0].skills);
  return (
    <Container className="bg-gradient-to-b from-sky-400 to-sky-200">
      <div className="py-10">
        <Link to={"/"} className="text-gray-100 hover:text-gray-700">
          <span className="px-4">{"<"}</span>Back to Talents
        </Link>
      </div>
      <div className="flex shadow-xl p-10 min-h-screen bg-white">
        {props.allJson.nodes.map((data: IAboutQuery) => (
          <React.Fragment key={data.id}>
            <div>
              <h1 className="text-6xl font-bold tracking-tight text-zinc-800 ">
                {data.name}
              </h1>
              <h2 className="text-xl font-semibold text-zinc-600 py-4 ">
                {data.tagline}
              </h2>
              <div className="flex mt-6 space-y-7 text-base text-zinc-600 ">
                <p
                  className="flex flex-col flex-1 space-y-5 w-1/2 text-justify"
                  dangerouslySetInnerHTML={{
                    __html: data.summary,
                  }}
                ></p>
                <div className="flex flex-1  p-10 place-content-end">
                  <img
                    src={profilePic}
                    className="object-cover rounded-full justify-self-end relative bottom-24"
                    alt={`Profile picture of ${data.name}`}
                    onError={setDefaultProfilePic}
                  />
                </div>
              </div>
              <div className="flex flex-row space-x-4">
                {data.skills.map((skill: any) => (
                  <Skills key={skill.id} {...skill} />
                ))}
              </div>

              <h4 className="text-2xl font-semibold py-10">Skills in action</h4>
              <iframe
                src={data.videoURL}
                style={{ width: "100%" }}
                height="480"
                allow="autoplay"
              ></iframe>
            </div>
          </React.Fragment>
        ))}
      </div>
    </Container>
  );
};

export default Profile;
