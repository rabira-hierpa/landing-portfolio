import React from "react";

const Skills = (props: any) => {
  const { languages, frameworks, databases } = props;
  return (
    <div className="flex flex-col space-y-4">
      <h3 className="font-bold text-xl pt-10">Skills</h3>
      <div>
        <h4 className="text-lg font-semibold">Languages</h4>
        <ul className="flex space-x-4">
          {languages.map((language: string) => (
            <li>{language}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold">Frameworks</h4>
        <ul className="flex space-x-4">
          {frameworks.map((framework: string) => (
            <li>{framework}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold">Databases</h4>
        <ul className="flex space-x-4">
          {databases.map((database: string) => (
            <li>{database}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
