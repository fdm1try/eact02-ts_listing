import './App.css'
import { data } from './data';
import { Listing } from './components/Listing';

function App() {
  const items = JSON.parse(data);
  return (
    <Listing items={items}/>
  )
}

export default App
