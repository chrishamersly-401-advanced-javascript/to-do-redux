import React, { useEffect }  from 'react';
import ajax from './ajax.js';
import useAjax from './ajax.js';

export default function Swapi() {

  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const hookResult = useAjax();

  useEffect(() => {
    
    async function fetchData() {
      setIsLoading(true);
      const response = await axios.get('https:swapi.dev/api/people');
      const results = response.data.results;
      setList(results);
    }
    fetchData();
  } , []);


  return (
  <h2>Swapi</h2>
  )
}