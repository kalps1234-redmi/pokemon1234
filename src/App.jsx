import "./App.css"
import PokemonList from "./components/PokemonList"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

function App() {
  return (
    <div className="pokemon-main-wrapper">
     <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools /> */}
      <PokemonList />
    </QueryClientProvider>
    </div>
  );
}

export default App;
