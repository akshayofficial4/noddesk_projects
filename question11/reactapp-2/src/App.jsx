import { useState } from 'react'

import './App.css'

function App() {

  const [ users, setUsers ] = useState([]);
  const [ loading , setLoading ] = useState(false);
  const [error , setError] = useState(null);

  const [ formData , setFormData ] = useState({
    email:"",
    password: "",
  })

  async function fetchUsers() {
    try {
      const url = 'https://jsonplaceholder.typicode.com/users';
      setLoading(true);
      setError(null);
      const res = await fetch(url);
      if(!res.ok) {
        throw new Error('failed to fetch users')
      }
      const data = await res.json();
      setUsers(data);

    } catch (error) {
      setError(error.message);
    }
    finally {
      setLoading(false);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [ name ] : value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData)
  }

  

  return (
    <div>
      <h1>users list</h1>

      {loading && <p>loading...</p>}

      <button onClick={fetchUsers}>reload data</button>

      <ul>
        {
          users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))
        }
      </ul>

      <div>
        <form onSubmit={handleSubmit} >
            <input name='email' type='email' value={formData.email} placeholder='email' onChange={handleChange}  />
            <input name='password' type='password' value={formData.password} onChange={handleChange} placeholder='password' />
            <button type='submit'>submit</button>
        </form>
      </div>

    </div>
  )
}

export default App
