import { useEffect, useState } from 'react';

export default function useLeaderboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/game/leaderboard`)
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error('Error fetching leaderboard:', err))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}
