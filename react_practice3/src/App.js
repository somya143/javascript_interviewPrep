import React from "react";
import './App.css';
import Pagination from "./components/Pagination";
import TodoData from "./components/TodoData";

let getData = async(page) => {
  try {
  let res = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=20&_page=${page}`);
  let data = await res.json();
  console.log(data);
  return data;
  } catch (error) {
    console.log(error.message)
  }
  
}


function App() {
  const [post , setPost] = React.useState([]);
  const [error , setError] = React.useState(false);
  const [page , setPage] = React.useState(1);
  const [loading , setLoading] = React.useState(false);

  React.useEffect(() => {
    fetchAndUpdate(page)
  }, [page])

  const fetchAndUpdate = async(page=1) => {
    try {
      setLoading(true)
    let data = await getData(page);
    setPost([...data])
    setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(error.message)
      console.log(error.message)
    }
    
  }
  let handlePagePrev = () => {
    setPage(page-1)
  }
  let handlePageNext = () => {
    setPage(page+1)
  }
  let handleDelete = (id) => {
    let delTodo = post.filter((el) => el.id !== id);
    setPost(delTodo);
  }
  let handleToggle = (id) => {
    let toggleTodo = post.map((el) => (el.id === id? {...el, completed : !el.completed }: el)
    )
    setPost(toggleTodo)
  }
  if(loading){
    <h1>...LOADING</h1>
  }
  if(error){
    <h1>...Something went wrong</h1>
  }
  return (
    <div className="App">
      <ul>
      {
        post.map((el) => (
          <TodoData 
          key={el.id}
          id={el.id}
          title={el.title}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
          completed={el.completed}
          />
        ))
      }
      </ul>

      <Pagination handlePagePrev={handlePagePrev} handlePageNext={handlePageNext} page={page} />
           
    </div>
  );
}

export default App;
