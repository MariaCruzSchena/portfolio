import funko from "../assets/images/funkoPres.png";
import funkoLogo from "../assets/images/funko.jpg";
import globant from "../assets/images/globantPres.png";
import globantLogo from "../assets/images/globant.jpg";
import devgames from "../assets/images/devgamesPres.png";
import devgamesLogo from "../assets/images/devgames3.jpg";
import tmdb from "../assets/images/tmdbPres.png";
import tmdbLogo from "../assets/images/tmdb.jpg";
import tws from "../assets/images/twsPres.png";
import twsLogo from "../assets/images/thewavesearchers.jpg";
import dlc from "../assets/images/dlcPres.png";
import dlcLogo from "../assets/images/delacruz.jpg";
import gwc from "../assets/images/gwcPres.png";
import gwcLogo from "../assets/images/girlswhocode.jpg";

export const projects = [
  // {
  //   id: 1,
  //   name: "FUNKO STORE",
  //   type: "E-commerce",
  //   time: "Apr 2023",
  //   hours: "40 hours",
  //   devs: "solo project",
  //   description: `Funko pop e-commerce that currently does not have functionality.It's being developed as a solo project.`,
  //   technologies: { back: `-`, front: `React, Redux and Sass.` },
  //   link: "https://cruce-ecommerce.vercel.app",
  //   github: "https://github.com/MariaCruzSchena/Cruce-Ecommerce-",
  //   img: funko,

  //   logo: funkoLogo,
  // },
  {
    id: 2,
    name: "BROKEN OFFICE-GLOBANT",
    type: "Globant app",
    time: "Mar 2023 - Apr 2023",
    hours: "160 hours",
    devs: "6 devs",
    description: `Mobile-first Progressive Web Application (PWA) designed to report broken work equipment. It includes a chat feature, geolocation-geocoding features and  an AI model for object recognition and categorization. I participated in the backend team.`,
    technologies: {
      back: `Node.js, Express.js, Mongoose, JWT for user authentication, and Postman for API documentation.`,
      front: `React, Redux, Material UI, Socket.io, ML5, Google's Teachable Machine, Javascript Geolocation API, Google's Geocoding service.`,
    },
    link: false,
    github: "https://github.com/BrokenOffice",
    img: globant,
    logo: globantLogo,
  },
  {
    id: 3,
    name: "DEVGAMES3",
    type: "E-commerce",
    time: "Mar 2023",
    hours: "80 hours",
    devs: "6 devs",
    description: `E-commerce platform for video game sales developed during Plataforma 5 - Coding Bootcamp as a group project. I participated in the frontend team.`,
    technologies: {
      back: `Node.js, Express.js, PostgreSQL, Sequelize, JWT for user authentication, and Postman for API documentation.`,
      front: `Frontend: React, Redux, Sass and Material UI.`,
    },
    link: "https://dev-games3-frontend-413oq8crp-mariacruzschena.vercel.app/",
    github: "https://github.com/MariaCruzSchena/DevGames3-Frontend",
    img: devgames,
    logo: devgamesLogo,
  },
  {
    id: 4,
    name: "TMDB",
    type: "Website",
    time: "Mar 2023",
    hours: "50 hours",
    devs: "solo project",
    description: `Website that allowes displaying, filtering, and adding TV shows and movies to favorites by consuming The Movie Database (TMDB) API. It was a solo project developed during the senior phase of Plataforma 5 - Coding Bootcamp.`,
    technologies: {
      back: `Node.js, Express.js, PostgreSQL, Sequelize, JWT for user authentication, and Postman for API documentation.`,
      front: `Frontend: React, Redux, Sass and Material UI.`,
    },
    link: "https://tmdb-frontend-7ey1sfhp8-mariacruzschena.vercel.app",
    github: "https://github.com/MariaCruzSchena/TMDB-Frontend",
    img: tmdb,
    logo: tmdbLogo,
  },
  {
    id: 5,
    name: "THE WAVE SEARCHERS",
    type: "E-commerce",
    time: "Ago 2022 - Oct 2022",
    hours: "40 hours",
    devs: "solo project",
    description: `Surfboard e-commerce website. It was developed as an individual project to test my React skills during the Frontend career program I enrolled in at CODERHOUSE.`,
    technologies: {
      back: "-",
      front: `Frontend: React and CSS. Backend: the database was hosted
    on Firebase.`,
    },
    link: "the-wave-searchers.vercel.app/",
    github: "https://github.com/MariaCruzSchena/The-Wave-Searchers",
    img: tws,
    logo: twsLogo,
  },
  {
    id: 6,
    name: "DE LA CRUZ",
    type: "E-commerce",
    time: "Jun 2022 - Jul 2022",
    hours: "40 hours",
    devs: "solo project",
    description: `E-book e-commerce website. This project is an all frontend e-commerce developed during the Javascript module in the Frontend career I enrolled in at CODERHOUSE.`,
    technologies: { back: "-", front: `HTML, Sass, and JavaScript.` },
    link: "de-la-cruz.vercel.app/",
    github: "https://github.com/MariaCruzSchena/De-La-Cruz",
    img: dlc,
    logo: dlcLogo,
  },
  {
    id: 7,
    name: "GIRLS WHO CODE",
    type: "Website",
    time: "Mar 2022 - May 2022",
    hours: "40 hours",
    devs: "solo project",
    description: `Static website for a fictitious NGO. Girls who code was my first website. It's nowhere near perfect but I decided to include it because it's part of my history as a developer. The content was inspired by NGOs founded by two women I admire: Reshma Saujani and Karlie Kloss.`,
    technologies: { back: "-", front: `HTML, Sass, and Bootstrap` },
    link: "girls-who-code-blue.vercel.app/",
    github: "https://github.com/MariaCruzSchena/GirlsWhoCode",
    img: gwc,
    logo: gwcLogo,
  },
];
