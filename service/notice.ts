import axios from "axios";
import { useEffect, useState } from "react";

export function useNotice(page: number = 1, pageSize: number = 10) {
  // biome-ignore lint/suspicious/noExplicitAny: this is fine
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://www.it.oylkka.com/api/notice?page=${page}&pageSize=${pageSize}`,
        );
        setData(response.data);
        setError(null);
        // biome-ignore lint/suspicious/noExplicitAny: this is fine
      } catch (err: any) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page, pageSize]); // Re-runs whenever page or pageSize changes

  return { data, isLoading, error };
}
