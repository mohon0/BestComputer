import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { QUERY_KEYS } from "@/lib/query-keys";

export function useHeroBanners() {
  return useQuery({
    queryKey: [QUERY_KEYS.HERO_BANNER],
    queryFn: async () => {
      const response = await axios.get("https://it.oylkka.com/api/hero");
      return response.data;
    },
  });
}
