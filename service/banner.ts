import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { QUERY_KEYS } from "@/lib/query-keys";

const apiClient = axios.create({
  baseURL: "https://www.it.oylkka.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export function useHeroBanners() {
  return useQuery({
    queryKey: [QUERY_KEYS.HERO_BANNER],
    queryFn: async () => {
      const response = await apiClient.get("/api/hero");
      return response.data;
    },
  });
}
