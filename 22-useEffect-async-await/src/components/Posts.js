import { useState, useEffect } from "react";
import Post from "./Post";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () { //<--------------------------
      try {                                      //  |
        const res = await fetch(API_URL);        //  |
        const posts = await res.json();          //  |
        setPosts(posts);                         //  |
      } catch (error) {                          //  |
        setError(error.message);                 //  |
      }                                          //  |
      setIsLoading(false);                       //  |
    })(); //IIFE - immediately invoked function expression
  }, []);

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <hr />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        posts.map((el) => {
          return <Post key={el.id} {...el} />;
        })
      )}
    </div>
  );
}

export default Posts;
