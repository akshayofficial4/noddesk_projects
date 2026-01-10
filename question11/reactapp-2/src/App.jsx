import { useState , useEffect } from 'react'

import './App.css'

function App() {

  const [ users, setUsers ] = useState([]);
  const [ loading , setLoading ] = useState(true);

  useEffect(() => {

    const url = 'https://jsonplaceholder.typicode.com/users';

    async function fetchUsers () {
      const res = await fetch(url);
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    }
    fetchUsers();
    
  }, [])
  

  return (
    <div>
      <h1>users list</h1>

      {loading && <p>loading...</p>}

      <ul>
        {
          users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))
        }
      </ul>

    </div>
  )
}

export default App
