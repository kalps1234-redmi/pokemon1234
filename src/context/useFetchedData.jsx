import { useInfiniteQuery } from '@tanstack/react-query';
import useFetchQuery  from './useFetchQuery'

// const useFetchQuery = async ({ pageParam = 0 }) => {
  
//   //   const url = 'https://pokeapi.co/api/v2/pokemon'
//   // console.log(url)
//   const limit = 6;
//   // const response = await fetch(url+'?limit='+limit+'&offset='+pageParam);
//   const response = await fetch(`https://www.pokeapi.co/api/v2/pokemon/?offset=${pageParam}&limit=${limit}`);
//   if (!response.ok) throw new Error('Error fetching data from API.');
//   const data = await response.json();
//   console.log(data)
//   return {
//     items: data.results,
//     nextOffset: data.results.length === limit ? pageParam + limit : 0,
//   };
// };



const useFetchedData = () => {
    
  return useInfiniteQuery({
    queryKey: ['items'],
    queryFn: useFetchQuery,
    getNextPageParam: (lastPage) => lastPage.nextOffset,
  });
};


export default useFetchedData;

