import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { siteSettings } from './serviceconfig'
import { Header } from './Components/Header'

function App() {

  return (
    <div>
        <Header title={siteSettings.HeaderTitle}/>
        <RouterProvider router={router} />
    </div>
  )
}

export default App
