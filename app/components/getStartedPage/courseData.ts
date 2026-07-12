export const TRACKS = ["Programming", "Design", "Art"] as const;
export const LEVELS = ["Beginner", "Intermediate", "Advanced"] as const;
export const COURSE_CATEGORIES = ["Concordia", "Online"] as const;
export const CATEGORIES = ["All", ...COURSE_CATEGORIES] as const;

export type CourseTrack = (typeof TRACKS)[number];
export type CourseLevel = (typeof LEVELS)[number];
export type CourseCategory = (typeof COURSE_CATEGORIES)[number];
export type FilterCategory = (typeof CATEGORIES)[number];

export type Course = {
  name: string;
  link: string;
  prereqs: string;
  type: CourseCategory;
  track: CourseTrack;
  level: CourseLevel;
  length: string;
  price: string;
};

export type CourseFilters = {
  category: FilterCategory;
  track: CourseTrack | null;
  level: CourseLevel | null;
};

export const courses: Course[] = [
  {
    name: "Intro to Game Programming",
    link: "https://www.concordiagamedev.ca/",
    prereqs: "No prior coding experience required",
    type: "Online",
    track: "Programming",
    level: "Beginner",
    length: "6 weeks",
    price: "Free",
  },
  {
    name: "Gameplay Systems in Unity",
    link: "https://www.concordiagamedev.ca/",
    prereqs: "Comfortable with C# basics",
    type: "Online",
    track: "Programming",
    level: "Intermediate",
    length: "8 weeks",
    price: "$$",
  },
  {
    name: "Level Design Studio",
    link: "https://www.concordiagamedev.ca/",
    prereqs: "A small playable project or design sample",
    type: "Concordia",
    track: "Design",
    level: "Intermediate",
    length: "12 weeks",
    price: "$$$",
  },
  {
    name: "Systems Design for Competitive Games",
    link: "https://www.concordiagamedev.ca/",
    prereqs: "Experience building or documenting game systems",
    type: "Online",
    track: "Design",
    level: "Advanced",
    length: "10 weeks",
    price: "$$",
  },
  {
    name: "2D Art Foundations for Games",
    link: "https://www.concordiagamedev.ca/",
    prereqs: "Sketchbook practice recommended",
    type: "Concordia",
    track: "Art",
    level: "Beginner",
    length: "8 weeks",
    price: "$$",
  },
  {
    name: "Character Art Pipeline",
    link: "https://www.concordiagamedev.ca/",
    prereqs: "Portfolio with anatomy or illustration basics",
    type: "Concordia",
    track: "Art",
    level: "Advanced",
    length: "14 weeks",
    price: "$$$",
  },
];
