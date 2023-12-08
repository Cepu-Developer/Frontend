import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function useLocation(shouldFetch) {
  const { data, error, isLoading } = useSWR(shouldFetch ? `https://api.airvisual.com/v2/nearest_city?key=${import.meta.env.VITE_API_KEY}` : null, fetcher)

  return {
    pollutan: data,
    isLoading,
    isError: error
  }
}