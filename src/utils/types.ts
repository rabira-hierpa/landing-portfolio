export interface IAbout {
  nodes: Node[];
}

export interface IAboutQuery {
  id: string;
  name: string;
  summary: string;
  tagline: string;
  imgURL: string;
  skills: Skills[];
  videoURL: string;
}

export interface Skills {
  databases: string;
  frameworks: string[];
  languages: string[];
}
export interface Social {
  github: string;
  instagram: string;
  linkedin: string;
  twitter: string;
}
