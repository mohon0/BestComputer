import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://www.it.oylkka.com",
  headers: { "Content-Type": "application/json" },
});

export function useNotice(page: number = 1, pageSize: number = 10) {
  return useQuery({
    queryKey: ["notices", page, pageSize],
    queryFn: async () => {
      const response = await apiClient.get(
        `/api/notice?page=${page}&pageSize=${pageSize}`,
      );
      return response.data;
    },
  });
}
