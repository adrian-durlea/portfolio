import type { Project } from "@/content/types";

// Project scope comes from the linked Devpost submissions; personal contributions
// come from Adrian's Devpost profile and resume. Switch business details are provided by Adrian.
export const projects: Project[] = [
  {
    slug: "ar-wifi-threat-detector",
    title: "AR Wi-Fi Threat Detector",
    shortDescription: "Making invisible networks visible: a headset-based view of nearby Wi-Fi signals and potentially suspicious access points.",
    detailedDescription: "Built at Hack the North 2026, this team project connects three ESP32 scanning nodes to a laptop backend and a Meta Quest Pro. The nodes collect network identifiers, signal strength, channel, and authentication data. The backend estimates access-point locations and streams them to the headset. A key constraint was positioning: the scanning nodes needed known locations for RSSI-based multilateration.",
    role: "I built the VR application that visualizes Wi-Fi signals and potential threats around the user. I also helped debug communication between the ESP32 nodes, laptop backend, and headset to keep data flowing through the system.",
    technologies: ["Unity", "ESP32", "Python", "FastAPI", "Arduino"],
    category: "Hack the North · Hardware / VR",
    githubUrl: "https://github.com/KushParmar07/HTN26",
    devpostUrl: "https://devpost.com/software/ar-wifi-threat-detector",
    images: [
      {
        src: "/images/projects/ar-wifi-field-view.jpg",
        alt: "AR Wi-Fi field view showing a selected network, signal strength, and spatial scanning pods.",
        width: 2048,
        height: 1152
      },
      {
        src: "/images/projects/ar-wifi-spatial-defense.jpg",
        alt: "Stereo headset view of the RF spatial defense interface highlighting a potential Wi-Fi threat.",
        width: 2048,
        height: 1078
      }
    ],
    timeline: "Hack the North 2026",
    keyAccomplishments: [
      "Built the headset visualization for nearby networks and potential threats.",
      "Helped connect and debug the ESP32-to-backend-to-headset communication pipeline.",
      "Developed hands-on experience with Unity VR and real-time device communication.",
    ],
    featured: true,
  },
  {
    slug: "clearspeak",
    title: "ClearSpeak",
    shortDescription: "A playful reading companion that helps children practice pronunciation and comprehension, one passage at a time.",
    detailedDescription: "ClearSpeak turns reading practice into an interactive experience. Children read generated passages aloud, receive word-by-word pronunciation feedback, and answer comprehension questions to earn XP, stars, and levels. Our team combined React and Firebase with Gemini for passages and questions, Azure Speech for pronunciation assessment, and ElevenLabs for narration.",
    role: "I contributed to front-end design, user flow, and interface decisions focused on readability and accessibility. I worked with teammates to prototype, test, and present the product under hackathon time pressure.",
    technologies: ["React", "TypeScript", "Firebase", "Gemini", "Azure Speech", "ElevenLabs"],
    category: "ConHacks · Web application",
    award: "Best UI/UX Winner · ConHacks 2026",
    githubUrl: "https://github.com/KushParmar07/conhacks26",
    demoUrl: "https://clearspeak-wine.vercel.app/",
    devpostUrl: "https://devpost.com/software/clearspeak-syuriw",
    images: [
      {
        src: "/images/projects/clearspeak-dashboard.jpg",
        alt: "ClearSpeak dashboard with a space-themed mascot, reading level, stars, and mastery progress.",
        width: 1280,
        height: 708
      },
      {
        src: "/images/projects/clearspeak-story-time.png",
        alt: "ClearSpeak Story Time screen with a beginner passage and Start Reading and Hear It controls.",
        width: 1904,
        height: 900
      },
      {
        src: "/images/projects/clearspeak-home.png",
        alt: "ClearSpeak welcome screen with Read, Play, Master messaging and a Continue Adventure button.",
        width: 1903,
        height: 902
      }
    ],
    timeline: "ConHacks 2026",
    keyAccomplishments: [
      "Won the Best UI/UX award at ConHacks 2026 as part of the ClearSpeak team.",
      "Helped shape a child-friendly reading experience with clear navigation and accessible presentation.",
      "Collaborated on prototyping, testing, and the final hackathon presentation.",
    ],
    featured: true,
  },
  {
    slug: "nintendo-switch-hardmodding",
    title: "Nintendo Switch Hardmodding",
    shortDescription: "A small-scale business installing Picofly chips in Nintendo Switch consoles to enable modding.",
    detailedDescription: "I ran a small-scale Nintendo Switch hardmodding business, installing Picofly chips in customers' consoles to enable modding. The work brought together hands-on hardware modification and running a service for other console owners.",
    technologies: ["Picofly", "Nintendo Switch", "Hardware modification"],
    category: "Independent business / Hardware",
    images: [],
    keyAccomplishments: [],
    featured: true,
  },
];
