import { useEffect, useState } from "react";

type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

export function useFetch<T>(url: string) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();

    async function loadData() {
      setState({
        data: null,
        loading: true,
        error: null,
      });

      try {
        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP greška: ${response.status}`);
        }

        const json = (await response.json()) as T;

        setState({
          data: json,
          loading: false,
          error: null,
        });
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") {
          return;
        }

        setState({
          data: null,
          loading: false,
          error: err instanceof Error ? err.message : "Nepoznata greška",
        });
      }
    }

    loadData();

    return () => controller.abort();
  }, [url]);

  return state;
}
