import {
  courses,
  type Course,
  type CourseLevel,
  type CourseCategory,
  type CourseTrack,
} from "./courseData";

export type RoadmapStageId = "foundation" | "build" | "portfolio";

export type RoadmapItem = {
  title: string;
  description?: string;
  prereqs?: string;
  kind: "Course" | "Practice" | "Milestone";
  formats: CourseCategory[];
  link?: string;
};

export type RoadmapStage = {
  id: RoadmapStageId;
  title: string;
  summary: string;
  items: RoadmapItem[];
};

const roadmapPracticeByTrack: Record<CourseTrack, RoadmapStage[]> = {
  Programming: [
    {
      id: "foundation",
      title: "Foundation",
      summary: "Core skills",
      items: [
        {
          title: "Practice programming fundamentals",
          description: "Practice variables, conditions, functions, and debugging in the language used by your course or engine.",
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
      summary: "Applied projects",
      items: [
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
      title: "Specialize",
      summary: "Advanced work & portfolio",
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
      summary: "Core skills",
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
      ],
    },
    {
      id: "build",
      title: "Build",
      summary: "Applied projects",
      items: [
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
      title: "Specialize",
      summary: "Advanced work & portfolio",
      items: [
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
      summary: "Core skills",
      items: [
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
      summary: "Applied projects",
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
      title: "Specialize",
      summary: "Advanced work & portfolio",
      items: [
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

const stageByLevel: Record<CourseLevel, RoadmapStageId> = {
  Beginner: "foundation",
  Intermediate: "build",
  Advanced: "portfolio",
};

function toRoadmapItem(course: Course): RoadmapItem {
  return {
    title: course.name,
    description: course.description,
    prereqs: course.prereqs,
    kind: "Course",
    formats: [course.type],
    link: course.link,
  };
}

function buildTrackStages(track: CourseTrack): RoadmapStage[] {
  // The current COMP course numbers put prerequisites before their dependents
  // within each stage (e.g. COMP 248 before 249, and COMP 371 before 376).
  const trackCourses = courses
    .filter((course) => course.tracks.includes(track))
    .sort((first, second) => first.name.localeCompare(second.name));

  return roadmapPracticeByTrack[track].map((stage) => ({
    ...stage,
    items: [
      ...trackCourses
        .filter((course) => stageByLevel[course.level ?? "Beginner"] === stage.id)
        .map(toRoadmapItem),
      ...stage.items,
    ],
  }));
}

export const roadmapStagesByTrack: Record<CourseTrack, RoadmapStage[]> = {
  Programming: buildTrackStages("Programming"),
  Design: buildTrackStages("Design"),
  Art: buildTrackStages("Art"),
};
