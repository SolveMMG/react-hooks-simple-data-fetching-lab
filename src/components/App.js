// create your App component here

import React,{useState,useEffect} from 'react'

export default function App() {
    const [dog, setDog] = useState(null)
    const [loading, setLoading]=useState(true)

    useEffect(() => {
        fetch ('https://dog.ceo/api/breeds/image/random')
        .then(response=>response.json())
        .then((data) =>{
            setDog(data.message)
            setLoading(false)
        })
        .catch((error) => console.error(error))
  }, []);
  return (
    <div>
        <h1>Random Dog Image</h1>
        {loading?
        (
        <p>Loading ...</p>
        ):
        (
        <img src={dog} alt="A Random Dog"/>
        )}
    </div>
  )
}
