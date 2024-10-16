import React, { useEffect, useState} from 'react'

function Test() {

    const [message, setMessage] = useState('');
    useEffect(()=>{
        fetch('http://localhost:5000')
        .then(response => response.text())
        .then(data => setMessage(data))
        .catch(error => console.error('Error:', error));
    })
  return (
    <div>
        <h1>{message}</h1>
    </div>
  )
}

export default Test