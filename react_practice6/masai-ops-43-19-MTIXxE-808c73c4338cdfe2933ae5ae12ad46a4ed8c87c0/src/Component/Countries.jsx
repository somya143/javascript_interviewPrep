import LoadingIndicator from "./LoadingIndicator";
import React,{useEffect , useState} from "react";
import CountriesCard from "./CountriesCard";
import Pagination from "./Pagination";

let limit = 20;
let total ;
let getData = async(page) => {
  let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?limit=${limit}&page=${page}`);
  let data = await res.json();
  // console.log(data.data)
  return data.data;
}
let totalData = async() => {
  let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries`);
  let data = await res.json();
  total = Math.floor((data.data).length/limit)
}
totalData();
getData()
function Countries() { 
  const [post , setPost] = useState([]);
  const [loading , setLoading] = useState(false);
  const [page , setPage] = useState(1)

  useEffect(() => {
fetchAndUpdateData(page)
  }, [page])

  let fetchAndUpdateData = async(page) => {
    try {
      setLoading(true)
      let data = await getData(page);
      console.log(data)
      setPost([...data])
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error.message)
    }
    }

    let handleChange = (current) => {
     if(current === -1){
      setPage(page-1)
     }else if(current === 1){
      setPage(page+1)
     }
    }

    if(loading){
      return <LoadingIndicator />
    }
    


  return (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
        {/* Countries Card */}
        {
        post.map((el) => {
          return <CountriesCard
          key={el.id}
          country={el.country}
          population={el.population}
          />
       })
        }
      </div>
      <div>
        {/* Pagination */}
        <Pagination current={page} onChange={handleChange} total={total} />
      </div>
    </div>
  );
}

export default Countries;
