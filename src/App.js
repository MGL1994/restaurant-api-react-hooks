import React, { useEffect, useState } from 'react'
import axios from 'axios'

const initialData = {
  restaurants: []
}

const App = () => {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    axios
      .get('https://developers.zomato.com/api/v2.1/search?entity_id=61&entity_type=city', {
        headers: {
          'user-key': '8371fa0beecc7c49e4f6885a510a9c45'
        }
      })
      .then(result => {
        setData(result.data)
        console.log(result.data)
        console.log(result.data.restaurants[0].restaurant.name)
      })
  }, [])

  return (
    <div>
      <h1>Heroes</h1>
      <ul>
        {data.restaurants.map(item => (
          <li key={item.restaurant.id}>
            {item.restaurant.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

// { data.restaurants.map(item => item.restaurant.name) }

export default App

// axios.get('https://example.com/getSomething', {
//   headers: {
//     Authorization: 'Bearer ' + token //the token is a variable which holds the token
//   }
// })