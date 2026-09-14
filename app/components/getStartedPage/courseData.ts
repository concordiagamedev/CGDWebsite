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
  link?: string;
  prereqs?: string;
  description?: string;
  type: CourseCategory;
  tracks: CourseTrack[];
  level?: CourseLevel;
};

export type CourseFilters = {
  category: FilterCategory;
  track: CourseTrack | null;
  level: CourseLevel | null;
};

export const courses: Course[] = [
  {
    name: "COMP 376: Introduction to Game Development",
    prereqs: "COMP 371 Computer Graphics",
    type: "Concordia",
    tracks: ["Programming", "Design"],
    level: "Intermediate",
  },
  {
    name: "COMP 371: Computer Graphics",
    prereqs: "COMP 232 Mathematics for Computer Science, COMP 352 Data Structures and Algorithms",
    type: "Concordia",
    tracks: ["Programming", "Art"],
    level: "Intermediate",
  },
  {
    name: "COMP 232: Mathematics for Computer Science",
    prereqs: "MATH 203 or CEGEP Math",
    type: "Concordia",
    tracks: ["Programming"],
    level: "Beginner",
  },
  {
    name: "COMP 352: Data Structures and Algorithms",
    prereqs: "COMP 232 Mathematics for Computer Science, COMP 249 Object Oriented Programming II",
    type: "Concordia",
    tracks: ["Programming"],
    level: "Intermediate",
  },
  {
    name: "COMP 249: Object Oriented Programming II",
    prereqs: "MATH 203 or CEGEP Math, COMP 248 Object Oriented Programming I",
    type: "Concordia",
    tracks: ["Programming"],
    level: "Beginner",
  },
  {
    name: "COMP 248: Object Oriented Programming I",
    prereqs: "MATH 204 or CEGEP Mathematics",
    type: "Concordia",
    tracks: ["Programming"],
    level: "Beginner",
  },
  {
    name: "COMP 476: Advanced Game Development",
    prereqs: "COMP 361 Elementary Numerical Methods or ENGR 391 Numerical Methods in Engineering",
    type: "Concordia",
    tracks: ["Programming", "Design"],
    level: "Advanced",
  },
  {
    name: "COMP 361: Numerical Methods",
    prereqs: "COMP 232 Mathematics for Computer Science, COMP 249 Object Oriented Programming",
    type: "Concordia",
    tracks: ["Programming"],
    level: "Intermediate",
  },
  {
    name: "COMP 477: Animation for Computer Games",
    prereqs: "COMP 361 Elementary Numerical Methods or ENGR 391 Numerical Methods for Engineering, COMP 371 Computer Graphics",
    type: "Concordia",
    tracks: ["Programming", "Art"],
    level: "Advanced",
  },
  {
    name: "COMP 475: Immersive Technologies",
    prereqs: "COMP 371 Computer Graphics",
    type: "Concordia",
    tracks: ["Programming", "Design"],
    level: "Advanced",
  },
  {
    name: "COMP 472: Artificial Intelligence",
    prereqs: "COMP 352 Data Structures and Algorithms or COEN 352 Data Structures and Algorithms",
    type: "Concordia",
    tracks: ["Programming"],
    level: "Advanced",
  },
  {
    name: "Unity Learn",
    link: "https://learn.unity.com",
    description: "Unity courses and learning resources.",
    type: "Online",
    tracks: ["Programming", "Design", "Art"],
  },
  {
    name: "Unreal Engine 5: The Complete Beginner's Course",
    link: "https://www.concordia.ca/it/services/udemy.html",
    description: "Udemy Concordia · David Nixon",
    type: "Online",
    tracks: ["Programming", "Design"],
    level: "Beginner",
  },
  {
    name: "Jumpstart to 2D Game Development: Godot 4 for Beginners",
    link: "https://www.concordia.ca/it/services/udemy.html",
    description: "Udemy Concordia",
    type: "Online",
    tracks: ["Programming", "Design"],
    level: "Beginner",
  },
];
