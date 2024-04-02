import {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [inCall,SetInCall] = useState(false)
  return (
    <div className="App">
   { inCall ?  "We are in the call": "We are not in the call"}
    </div>
  );
}

export default App;
