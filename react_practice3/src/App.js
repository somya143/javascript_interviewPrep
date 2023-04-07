import React from "react";
import './App.css';

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
           <li key={el.id}>
            {el.id} -- {el.title}
           </li>
        ))
      }
      </ul>

      <div>
        <button disabled={page===1} onClick={() => setPage(page-1)}>PREV</button>
        <span>{page}</span>
        <button onClick={() => setPage(page+1)}>Next</button>
        </div>      
    </div>
  );
}

export default App;
