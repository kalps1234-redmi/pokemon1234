import {useState} from "react";
import "./PokemonList.css"
import DiscoverList from "./DiscoverList";
import MyCollection from "./MyCollection";

const PokemonList = () =>{
    const [showAll, setShowAll] = useState(true);
  const [isActiveDiscover, setIsActiveDiscover] = useState(true);
  const [isActiveMyCollection, setIsActiveMyCollection] = useState(false);
    const handleList = ()=>{
        setShowAll(!showAll);
        setIsActiveDiscover(!isActiveDiscover);
        setIsActiveMyCollection(!isActiveMyCollection);
    }
    return (<>
    <section className="header">
    <h1>Pokemon Collection App</h1>
    <h2>Discover, collect and organize your favorite Pokemon!</h2>
    
    <section>
        <button className={isActiveDiscover ? 'active' : ''} onClick={handleList}>Discover Pokemon</button>
        <button className={isActiveMyCollection ? 'active' : ''} onClick={handleList}>My Collection (0)</button>
    </section>
    </section>
    <section className="main-content">
        {showAll ? <DiscoverList/> : <MyCollection/>}
    </section>
    </>)

}

export default PokemonList
