import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Barathwaj",
  lastName: "Anandan",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Machine Learning Engineer",
  avatar: "/images/avatar.jpg",
  location: "America/Los_Angeles", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Tamil"], // optional: Leave the array empty if you don't want to display languages
};

 const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about ML/AI concepts and share my learnings in a way that is easy to understand.
    </>
  ),
}; 

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/barathwajanandan",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/barathsa/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:banandan@alumni.cmu.edu",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Machine Learning and Computer Vision Engineer</>,
  subline: (
    <>
      I'm <strong>Barathwaj</strong>, a Machine Learning and Computer Vision Engineer at <InlineCode>Lucid Motors</InlineCode>, where I build cool stuff.
      <br /> . After hours, I build my own projects and learn new things.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://topmate.io/barathwaj_subramaniam_anandan",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a Machine Learning Engineer passionate about building innovative solutions, particularly in the realm of autonomous systems. My expertise lies in deep learning, computer vision, and generative AI. I enjoy transforming complex challenges into elegant and efficient solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Lucid Motors",
        timeframe: "November 2021 - Present",
        role: "ADAS/AD Perception Software Engineer",
        achievements: [
          <>
            Architected and implemented cutting-edge deep learning algorithms for 3D perception tasks, enabling L2+/L3 autonomous driving features in Lucid vehicles.
          </>,
          <>
            Optimized perception DNNs using TensorRT and ONNX toolchains, employing quantization, pruning, and knowledge distillation techniques.
          </>,
          <>
            Led the development of a multi-task DL model for 3D traffic light detection & classification, achieving a baseline performance of 95%+ mAP.
          </>,
        ],
        images: [],
      },
      {
        company: "Carnegie Mellon University - Cylab",
        timeframe: "January 2021 - June 2021",
        role: "Research Assistant",
        achievements: [
          <>
            Worked on object detection using multiple cameras placed around an Autonomous Vehicle.
          </>,
          <>
            Used Jetson Xavier to stream and transfer videos from multiple cameras.
          </>,
          <>
            Built a Python-C++ wrapper for communication between data stream from cameras and object detector.
          </>,
        ],
        images: [],
      },
      {
        company: "IntelinAir, Makers of AgMRI",
        timeframe: "May 2020 - August 2020",
        role: "Computer Vision Engineer (Intern)",
        achievements: [
          <>
            Built an efficient object detection model based on Faster RCNN for counting the number of kernels on a corncob.
          </>,
          <>
            Developed an instance segmentation pipeline based on Mask RCNN to determine the quality of individual kernels.
          </>,
          <>
            Achieved a kernel count accuracy of 93%.
          </>,
        ],
        images: [],
      },
      {
        company: "Carnegie Mellon University – Cylab | General Motors",
        timeframe: "Jan 2018-April 2019",
        role: "Short Term Scholar",
        achievements: [
          <>
            Built a robust simulator based on OGRE 3D Engine using C++, simulating different sensors like camera.
          </>,
          <>
            Implemented algorithms to simulate the effects of weather conditions, traffic signals, and pedestrians on the ego vehicle.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Carnegie Mellon University",
        description: <>Master of Science in Robotics Systems Development.</>,
      },
      {
        name: "PSG College of Technology",
        description: <>Bachelor of Engineering in Robotics and Automation.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Python",
        description: <>Proficient in Python for machine learning, data analysis, and scripting.</>,
        images: [],
      },
      {
        title: "Deep Learning",
        description: <>Experience with PyTorch, TensorFlow, and other deep learning frameworks.</>,
        images: [],
      },
      {
        title: "Computer Vision",
        description: <>Expertise in developing computer vision applications for object detection, image segmentation, and more.</>,
        images: [],
      },
      {
        title: "C++",
        description: <>Experience building simulators and high-performance applications with C++.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "I write easy to understand articles about AI and ML - Under Construction",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "PROJECTS",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social,  newsletter,  home, about, blog, work, gallery };
