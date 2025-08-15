import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsFiletypeHtml, BsFiletypeCss, BsBootstrap } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { SiC, SiCplusplus } from "react-icons/si";

import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiFigma,
  SiMongodb,
  SiMysql,
  SiGithub,
  // SiFirebase,
  SiExpress,
} from "react-icons/si";
export const TechstackList = [
  {
    _id: 1,
    name: "HTML",
    icon: BsFiletypeHtml,
  },
  {
    _id: 2,
    name: "CSS / SCSS",
    icon: BsFiletypeCss,
  },
  {
    _id: 3,
    name: "Bootstrap",
    icon: BsBootstrap,
  },
  {
    _id: 4,
    name: "Javascript",
    icon: SiJavascript,
  },

  {
    _id: 5,
    name: "React JS",
    icon: SiReact,
  },

  {
    _id: 6,
    name: "Tailwind ",
    icon: SiTailwindcss,
  },
  {
    _id: 7,
    name: "Figma ",
    icon: SiFigma,
  },

  {
    _id: 8,
    name: "Node JS ",
    icon: FaNodeJs,
  },
  {
    _id: 9,
    name: "Express JS ",
    icon: SiExpress,
  },

  {
    _id: 10,
    name: "Mongodb ",
    icon: SiMongodb,
  },
  {
    _id: 11,
    name: "SQL ",
    icon: SiMysql,
  },
  // {
  //   _id: 12,
  //   name: "Firebase ",
  //   icon: SiFirebase,
  // },
  {
    _id: 13,
    name: "Git / Github ",
    icon: SiGithub,
  },
  {
    _id: 14,
    name: "vs Code",
    icon: VscVscode,
  },{
    _id: 15,
    name: "UI/UX",
    icon: () => <FontAwesomeIcon icon={faPenNib} />,
  },
   {
    _id: 16,
    name: "C Language",
    icon: SiC,
  },
  {
    _id: 17,
    name: "C++",
    icon: SiCplusplus,
  }
];
