// // useFetchQuery.js
// import { useQuery } from '@tanstack/react-query'

// /**
//  * Custom hook to fetch data using fetch and useQuery
//  * @param {string} url - API URL to fetch
//  * @returns {object} - { data, isLoading, error }
//  */
// // export function useFetchQuery(url) {
// //   const fetchData = async () => {
// //     const response = await fetch(url)

// //     if (!response.ok) {
// //       throw new Error(`Error ${response.status}: ${response.statusText}`)
// //     }

// //     return await response.json()
// //   }

// //   return useQuery({
// //     queryKey: [url],
// //     queryFn: fetchData,
// //   })
// // }



const useFetchQuery = async ({ pageParam = 0 }) => {
    // console.log("pageParam===>",pageParam);
    const url = "https://pokeapi.co/api/v2/pokemon"
  const limit = 6;
  const response = await fetch(`${url}?offset=${pageParam}&limit=${limit}`);
  if (!response.ok) throw new Error('Network response was not ok');
  const data = await response.json();
  console.log("useFetchQuery data ===>", data);
  return {
    items: data,
    nextOffset: data.results.length === limit ? pageParam + limit : 0,
  };
};
export default useFetchQuery