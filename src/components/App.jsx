import '../index.css'
import Heading from './Heading'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Heading />
      <div className="content">
        <Outlet />
      </div>
    </>
  )
}

export default App
