import one from "../assets/svg/projects/one.svg";
import two from "../assets/svg/projects/two.svg";
import three from "../assets/svg/projects/three.svg";
import five from "../assets/svg/projects/five.svg";
import six from "../assets/svg/projects/six.svg";

export const projectsData = [
  {
    id: 1,
    projectName: "Bookvid - Video Calling App",
    projectDesc:
      "A video-calling platform where influencers can schedule one-on-one or group calls, offer packages, and allow users to book their sessions. \n July-2023 to Present",
    tags: [
      "Flask (Python)",
      "React.js",
      "Next.js",
      "Google Cloud Platform",
      "MySQL",
    ],
    demo: "https://bookvid.com/",
    image: one,
  },
  {
    id: 2,
    projectName: "Transcriber",
    projectDesc:
      "A doctor-patient platform that records consultations and generates detailed AI-driven reports for medical analysis. \n\n December-2024 to Present",
    tags: ["Flask (Python)", "React.js", "Open AI", "Google Cloud Platform"],
    demo: "https://transcriber.com/",
    image: two,
  },
  {
    id: 3,
    projectName: "Food For The Poor- FFTP",
    projectDesc:
      "Managed website and data operations for an international NGO recognized by Forbes as a top 17 NGO in more than 15+ countries. Developed an external online store and streamlined e-commerce integrations. \n\n March-2024 to Present",
    tags: ["PHP", "WordPress", "jQuery", "WooCommerce", "Shopify"],
    demo: "https://foodforthepoor.org/",
    image: three,
  },

  {
    id: 4,
    projectName: "Data Integration - FFTP",
    projectDesc:
      "Consolidated donor and prospect data from various platforms, integrated with CRM tools, and automated email campaigns. \n \n June-2024 to Feb-2025",
    tags: ["React Native", "Firebase"],
    demo: "https://fftp-cognizn.web.app/",
    image: five,
  },

  {
    id: 5,
    projectName: "Textpal - ChatGPT",
    projectDesc:
      "An AI-powered SMS-based service that allows users to interact with ChatGPT for offline queries. \n \nJune-2024 to Sept-2024",
    tags: ["Node.js", "ChatGPT API", "Twilio"],
    demo: "",
    image: six,
  },
];
