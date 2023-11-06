import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import useWindowSize from "../hooks/useWindowSize";
import useAxiosFetch from "../hooks/useAxiosFetch";
import api from "../api/posts";

const DataContext = createContext({})

export const DataProvider = ({ children }) => {
  
    const [posts, setPosts] = useState([]);

    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [editTitle, setEditTitle] = useState("");
    const [editBody, setEditBody] = useState("");
    const { width } = useWindowSize();
    const { data, fetchError, isLoading } = useAxiosFetch("http://localhost:3500/posts");
   
    useEffect(() => {
      setPosts(data);
    }, [data]);
  
    useEffect(() => {
      const filterResult = posts.filter(
        (post) =>
          post.body.toLowerCase().includes(search.toLowerCase()) ||
          post.title.toLowerCase().includes(search.toLowerCase())
      );
      setSearchResult(filterResult.reverse());
    }, [posts, search]);

    const navigate = useNavigate();
  
    const handleEdit = async (id) => {
      const date = format(new Date(), "MMMM dd, yyyy pp");
      const updatedPost = { id, title: editTitle, date, body: editBody };
      try {
        const response = await api.put(`/posts/${id}`, updatedPost);
        setPosts(
          posts.map((post) => (post.id === id ? { ...response.data } : post))
        );
        setEditTitle("");
        setEditBody("");
        navigate("/");
      } catch (error) {
        console.log(`Error: ${error.message}`);
      }
    };

    return (
        <DataContext.Provider value={{
            width, search, setSearch,    //header and nav
            posts, fetchError, isLoading, searchResult, setPosts,  //Home
            setEditBody, editBody, editTitle, setEditTitle, handleEdit //EditPost
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext