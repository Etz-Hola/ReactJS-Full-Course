import { Feed }  from "../components/index"
import { useStoreState } from "easy-peasy"



const Home = ({ fetchError, isLoading}) => {
  const searchResult = useStoreState((state) => state.searchResults);

  return (
    <main className="Home">
      {isLoading && <p className="statusMsg">Loading posts...</p> }
      { !isLoading && fetchError && <p className="statusMsg" style={{color: "red"}}>{fetchError}</p> }
      { !isLoading && !fetchError && (
        searchResult.length ? <Feed posts = {searchResult} /> : <p className="statusMsg"> No post to display</p> )}
    </main>
  )
}

export default Home