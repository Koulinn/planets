import { useEffect, useState } from 'react';

import { PLANETS_URL, sortByReleaseDate } from './utils';

function usePlanets() {
  const [planets, setPlanets] = useState([]);
  // Although I decided not to use because the API call is quite fast, usually I like to
  // have a string to handle different states for an API call, like success, loading, failed, noData...
  const [reqStatus, setReqStatus] = useState('');
  const getPlanets = async () => {
    setReqStatus('loading');
    try {
      const res = await fetch(PLANETS_URL);
      const data = await res.json();
      if (data?.length > 0) {
        setReqStatus('');

        setPlanets(data.sort(sortByReleaseDate));
      } else {
        setReqStatus('noData');
        setTimeout(() => setReqStatus(''), 3000);
      }
    } catch (error) {
      setReqStatus('error');
      setTimeout(() => setReqStatus(''), 3000);
      console.log(error);
    }
  };

  useEffect(() => {
    getPlanets();
  }, []);
  return { planets, reqStatus };
}

export default usePlanets;
