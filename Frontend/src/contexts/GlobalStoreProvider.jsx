import { useState } from 'react'
import GlobalStore from './GlobalStore'

export default function GlobalStoreProvider({ children }) {

    const host = `${import.meta.env.VITE_API_BASE_URL}/api/matches`;

    const [matchData, setMatchData] = useState([]);
    const [error, setError] = useState();

    const [filterStatus, setFilterStatus] = useState(false);
  
    const fetchMatchData = async () => {
      try {
        const response = await fetch(host);
        const data = await response.json();
        setMatchData(data);
      } catch (err) {
        setError(err.message || 'Something went wrong');
        console.log(error);
      } 
    };


    return (
        <GlobalStore.Provider value={{ matchData, fetchMatchData, filterStatus, setFilterStatus}}>
            {children}
        </GlobalStore.Provider>
    )
}
