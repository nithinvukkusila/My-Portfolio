import {
  faCss3Alt,
    faGithubSquare,
    faGitlabSquare,
    faHtml5,
    faInstagramSquare,
    faJsSquare,
    faLinkedinIn,
    faNodeJs,
    faReact,
    faTwitterSquare,
    faVuejs,
  } from "@fortawesome/free-brands-svg-icons";
  
export const socialMediaLinks = [
    {
      id: "insta",
      link: "https://www.instagram.com/photoreceptor_click/",
      icon: faInstagramSquare,
    },
    {
      id: "linkedIn",
      link: "https://www.linkedin.com/in/nithin-vukkusila-080810169/",
      icon: faLinkedinIn,
    },
    {
      id: "twitter",
      link: "https://twitter.com/NithinVukkusila",
      icon: faTwitterSquare,
    },
    {
      id: "github",
      link: "https://github.com/nithinvukkusila",
      icon: faGithubSquare,
    },
  ];

  export const mainSkills = [
    {
      id: "html",
      link: "",
      icon: faHtml5,
    },
    {
      id: "css",
      link: "",
      icon: faCss3Alt,
    },
    {
      id: 'js',
      link: 'Javascript',
      icon: faJsSquare
    },
    {
      id: 'react',
      link: 'Javascript',
      icon: faReact
    },
    {
      id: 'vue',
      link: 'Javascript',
      icon: faVuejs
    },
    {
      id: 'node',
      link: 'Javascript',
      icon: faNodeJs
    }
  ]


 export const skillsMap = {
    'html': faHtml5,
    'css3': faCss3Alt,
    'js': faJsSquare,
    'github': faGithubSquare,
    'gitlab': faGitlabSquare,
    'reactJs': faReact,
    'vueJs': faVuejs
 }