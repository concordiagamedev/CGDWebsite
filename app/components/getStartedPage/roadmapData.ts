import {
  type CourseCategory,
  type CourseTrack,
} from "./courseData";

export type RoadmapStageId = "foundation" | "build" | "portfolio";

export type RoadmapItem = {
  title: string;
  description: string;
  kind: "Course" | "Practice" | "Milestone";
  formats: CourseCategory[];
  link?: string;
};

export type RoadmapStage = {
  id: RoadmapStageId;
  title: string;
  duration: string;
  items: RoadmapItem[];
};

export const roadmapStagesByTrack: Record<CourseTrack, RoadmapStage[]> = {
  Programming: [
    {
      id: "foundation",
      title: "Foundation",
      duration: "0-2 months",
      items: [
        {
          title: "Intro to Game Programming",
          description: "Get comfortable with engines, scripting, and how game loops are structured.",
          kind: "Course",
          formats: ["Online"],
          link: "https://www.concordiagamedev.ca/",
        },
        {
          title: "C# syntax and logic reps",
          description: "Practice variables, conditions, functions, and debugging until writing scripts feels natural.",
          kind: "Practice",
          formats: ["Online", "Concordia"],
        },
        {
          title: "Build a movement sandbox",
          description: "Ship one tiny playable scene with movement, camera control, and collision.",
          kind: "Milestone",
          formats: ["Online", "Concordia"],
        },
      ],
    },
    {
      id: "build",
      title: "Build",
      duration: "2-5 months",
      items: [
        {
          title: "Gameplay Systems in Unity",
          description: "Move from isolated scripts to reusable systems, states, and interactions.",
          kind: "Course",
          formats: ["Online"],
          link: "https://www.concordiagamedev.ca/",
        },
        {
          title: "Recreate one core mechanic",
          description: "Copy a combat, puzzle, or movement loop from a game you admire to study structure.",
          kind: "Practice",
          formats: ["Online", "Concordia"],
        },
        {
          title: "Join a weekend game jam",
          description: "Work with a small team and learn how to scope under pressure.",
          kind: "Milestone",
          formats: ["Online", "Concordia"],
        },
      ],
    },
    {
      id: "portfolio",
      title: "Portfolio",
      duration: "5-8 months",
      items: [
        {
          title: "Ship two polished prototypes",
          description: "Focus on clarity, game feel, and a playable loop instead of feature count.",
          kind: "Milestone",
          formats: ["Online", "Concordia"],
        },
        {
          title: "Write technical breakdowns",
          description: "Explain architecture, tooling choices, and the hardest bugs you solved.",
          kind: "Practice",
          formats: ["Online", "Concordia"],
        },
        {
          title: "Publish a playable portfolio page",
          description: "Bundle builds, clips, and GitHub links so collaborators can review your work quickly.",
          kind: "Milestone",
          formats: ["Online", "Concordia"],
        },
      ],
    },
  ],
  Design: [
    {
      id: "foundation",
      title: "Foundation",
      duration: "0-2 months",
      items: [
        {
          title: "Analyze your favorite games",
          description: "Break down loops, goals, rewards, and how onboarding teaches players.",
          kind: "Practice",
          formats: ["Online", "Concordia"],
        },
        {
          title: "Paper prototype a mechanic",
          description: "Test a combat, puzzle, or economy idea without opening an engine.",
          kind: "Milestone",
          formats: ["Online", "Concordia"],
        },
        {
          title: "Learn encounter flow basics",
          description: "Study pacing, feedback, and why challenge ramps feel fair or frustrating.",
          kind: "Course",
          formats: ["Online"],
          link: "https://www.concordiagamedev.ca/",
        },
      ],
    },
    {
      id: "build",
      title: "Build",
      duration: "2-5 months",
      items: [
        {
          title: "Level Design Studio",
          description: "Practice layout, wayfinding, metrics, and how spaces support mechanics.",
          kind: "Course",
          formats: ["Concordia"],
          link: "https://www.concordiagamedev.ca/",
        },
        {
          title: "Document one complete feature",
          description: "Create a concise design doc with goals, references, risks, and success criteria.",
          kind: "Practice",
          formats: ["Online", "Concordia"],
        },
        {
          title: "Run three playtests",
          description: "Collect feedback, identify friction, and iterate with clear change notes.",
          kind: "Milestone",
          formats: ["Online", "Concordia"],
        },
      ],
    },
    {
      id: "portfolio",
      title: "Portfolio",
      duration: "5-8 months",
      items: [
        {
          title: "Systems Design for Competitive Games",
          description: "Learn to tune balance, retention loops, and decision depth with intention.",
          kind: "Course",
          formats: ["Online"],
          link: "https://www.concordiagamedev.ca/",
        },
        {
          title: "Publish case studies",
          description: "Show your design process, not just final screenshots or maps.",
          kind: "Practice",
          formats: ["Online", "Concordia"],
        },
        {
          title: "Assemble a portfolio pitch deck",
          description: "Summarize your strongest projects, role, iteration story, and measurable impact.",
          kind: "Milestone",
          formats: ["Online", "Concordia"],
        },
      ],
    },
  ],
  Art: [
    {
      id: "foundation",
      title: "Foundation",
      duration: "0-2 months",
      items: [
        {
          title: "2D Art Foundations for Games",
          description: "Build shape, color, readability, and asset consistency for production art.",
          kind: "Course",
          formats: ["Concordia"],
          link: "https://www.concordiagamedev.ca/",
        },
        {
          title: "Create a small asset sheet",
          description: "Design UI icons, props, and pickups that feel like they belong in one world.",
          kind: "Practice",
          formats: ["Online", "Concordia"],
        },
        {
          title: "Study silhouettes and values",
          description: "Train for instant readability before polishing rendering detail.",
          kind: "Practice",
          formats: ["Online", "Concordia"],
        },
      ],
    },
    {
      id: "build",
      title: "Build",
      duration: "2-5 months",
      items: [
        {
          title: "Build a style guide",
          description: "Define palette, rendering rules, line weight, and environment references.",
          kind: "Milestone",
          formats: ["Online", "Concordia"],
        },
        {
          title: "Finish a playable asset set",
          description: "Produce a cohesive batch of characters, props, and UI for one prototype.",
          kind: "Practice",
          formats: ["Online", "Concordia"],
        },
        {
          title: "Collaborate with a designer",
          description: "Translate gameplay needs into assets that are expressive and production friendly.",
          kind: "Milestone",
          formats: ["Online", "Concordia"],
        },
      ],
    },
    {
      id: "portfolio",
      title: "Portfolio",
      duration: "5-8 months",
      items: [
        {
          title: "Character Art Pipeline",
          description: "Refine concept-to-final workflow and present process alongside final renders.",
          kind: "Course",
          formats: ["Concordia"],
          link: "https://www.concordiagamedev.ca/",
        },
        {
          title: "Prepare polished breakdown sheets",
          description: "Show exploration, iterations, callouts, and how assets function in-game.",
          kind: "Practice",
          formats: ["Online", "Concordia"],
        },
        {
          title: "Launch an art portfolio page",
          description: "Feature 3 to 5 focused projects with strong thumbnails and concise role notes.",
          kind: "Milestone",
          formats: ["Online", "Concordia"],
        },
      ],
    },
  ],
};
