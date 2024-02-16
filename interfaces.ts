type iTechStack = {
  backend: string[];
  frontend: string[];
};

interface iProjects {
  id: string;
  stack: string;
  title: string;
  description: string;
  repository: string;
  img: string;
  alt: string;
  artCreatorBy: string;
  page?: string;
  figma?: string;
  techs: iTechStack;
}

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

type iTechItem = {
  id: string;
  name: string;
  link: string;
};

type iTechCategory = {
  id: number;
  stack: 'frontend' | 'backend' | 'extra';
  list: iTechItem[];
};
