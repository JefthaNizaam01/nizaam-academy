import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Course } from "@/types/course";

const JSONBIN_BIN_ID = "68947aadae596e708fc3f6bf";
const JSONBIN_URL = `https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`;

const JSONBIN_HEADERS: Record<string, string> = {};

export type CoursesData = {
  courses: Course[];
  categories: string[];
  difficulties: string[];
};

const fetchCoursesData = async (): Promise<CoursesData> => {
  const response = await axios.get(JSONBIN_URL, { headers: JSONBIN_HEADERS });
  if (
    response.data &&
    response.data.record &&
    Array.isArray(response.data.record.mockCourses) &&
    Array.isArray(response.data.record.categories) &&
    Array.isArray(response.data.record.difficulties)
  ) {
    return {
      courses: response.data.record.mockCourses,
      categories: response.data.record.categories,
      difficulties: response.data.record.difficulties,
    };
  }
  throw new Error("Unexpected response structure from JSONBin");
};

export function useCoursesData() {
  return useQuery<CoursesData, Error>({
    queryKey: ["coursesData"],
    queryFn: fetchCoursesData,
    staleTime: 1000 * 60 * 5, 
  });
}
