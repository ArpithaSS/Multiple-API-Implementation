import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [quote,setQuote]=useState("");
  const [user, setUser]=useState("");
  useEffect(()=>{
    async function fetchQuote() {
      try{
      const response= await axios.get('https://programming-quotesapi.vercel.app/api/random');
      const userResponse= await axios.get('https://randomuser.me/api/');
      setQuote(response.data.quote);
      setUser(userResponse.data.results);
      console.log("Fired once");
      }
      catch(error) {
        console.error("Error fetching quote",quote);
      }
    }
    fetchQuote();
  },[]);
  return (
    <>
    <div>Programming Quotes</div>
    <div>{quote}</div>
    <div>
    {user && user.map((item,key)=>{
      return(
        <table>
          <thead>{key}</thead>
          <tbody>
            <tr>
        <div key={key}>{item.login.username}</div>
        </tr>
        <tr>
        {item.email}
        </tr>
        </tbody>
        </table>
      )
    })}
      </div>
    </>
  );
}

export default App;
