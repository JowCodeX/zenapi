
import './App.css';
import axios from 'axios';
import './Quote.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [quote, setQuote] = useState("");  
  const [author, setAuthor] = useState(""); 

  const zenApiQuote = async () => {
    
    let dataFromQuotes = [];

    try{
      console.log('Request initiated to: /api/random'); 
      const data = await axios.get("/api/random"); 
      console.log('Response from ZenQuotes:', data); 
      dataFromQuotes = data.data[0];
    } catch (error) {
      console.log(error);
    }

    try {
      setQuote(dataFromQuotes.q);  
      setAuthor(dataFromQuotes.a);   
    }catch(error) {
      console.log(error) ;
    }
  };
  
  useEffect(() => {
    zenApiQuote(); 
  }, []);

  return (
    <div className='App'>
      <div className='boxForQuotes'>
        <div className='container'>
            <div className='newQuoteButton'>
              {" "}
              <button onClick={zenApiQuote}>New Quote</button>
            </div>
            <div className='quote'>
              <h2>{quote}</h2>
              </div> 
            <div className='author'>{author}</div> 
        </div>
      </div>

    </div>
  );
};

export default App;
