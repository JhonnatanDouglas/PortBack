type iTechStack = {
  backend: string[];
  frontend: string[];
};

type iProject = {
  id: string;
  stack: string;
  title: string;
  description: string;
  repository: string;
  page?: string;
  figma?: string;
  techs: iTechStack[];
};

interface iSocialLinks {
  id: number;
  name: string;
  img: string;
  link: string;
  alt: string;
}

interface iSkillTechs {
  id: number;
  name: string;
}
