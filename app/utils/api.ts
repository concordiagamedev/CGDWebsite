// API base URL
const API_BASE_URL = "https://just-impala-24.hasura.app/api/rest";

// API response types
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  staff?: {
    id: number;
    name: string;
    role: string;
    avatar: string;
    team: string;
  }[];
  past_events?: {
    id: number;
    avatar: string;
    community_fav_winner_name?: string;
    community_fav_winner_url?: string;
    date: string;
    description: string;
    first_place_winner_avatar?: string;
    first_place_winner_name?: string;
    first_place_winner_url?: string;
    location: string;
    name: string;
    second_place_winner_name?: string;
    second_place_winner_url?: string;
    theme?: string;
    third_place_winner_name?: string;
    third_place_winner_url?: string;
    url?: string;
    event_type: string;
  }[];
  upcoming_events?: {
    id: number;
    avatar: string;
    date: string;
    description: string;
    location: string;
    name: string;
  }[];
}

// Generic API request function
async function apiRequest<T>(endpoint: string): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}${endpoint}`;

  const config: RequestInit = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    // Map response dynamically
    if (endpoint === "/staff") {
      return {
        success: true,
        message: "Success",
        staff: data.staffs,
      };
    }

    if (endpoint === "/past-events") {
      return {
        success: true,
        message: "Success",
        past_events: data.past_events,
      };
    }

    if (endpoint === "/upcoming-events") {
      return {
        success: true,
        message: "Success",
        upcoming_events: data.upcoming_events,
      };
    }

    return {
      success: true,
      message: "Success",
    };
  } catch (error) {
    return {
      success: false,
      message: (error as Error).message,
    };
  }
}

// Staff API
export async function getStaffList(): Promise<ApiResponse<any>> {
  return apiRequest("/staff");
}

// Past Events API
export async function getPastEventsList(): Promise<ApiResponse<any>> {
  return apiRequest("/past-events");
}

// Upcoming Events API
export async function getUpcomingEventsList(): Promise<ApiResponse<any>> {
  return apiRequest("/upcoming-events");
}