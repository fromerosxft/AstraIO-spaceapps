import { Navigate, Outlet } from 'react-router'

function App() {

  return (
    <>
    <Navigate to={"/mena"}/>
     
      <div className="outlett"></div>
      <Outlet/>
      
      
      
    </>
  )
}

export default App

