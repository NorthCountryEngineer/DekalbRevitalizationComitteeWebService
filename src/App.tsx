import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { siteSettings } from './serviceconfig'
import {Header} from './Components/Header'
import { useEffect } from 'react'
import { API, graphqlOperation } from 'aws-amplify'

function App() {

  useEffect(() => {
    const fetchKey = async () => {
      try {
        const id = '853027946447-714sv1ocm31o2f1ejrtho4j6pa7sdq3a.apps.googleusercontent.com'
        try {console.log("try")
        }catch(error) {console.error(error)}
        
      } catch (error) {
        console.error('Error fetching key:', error)
      }
    }

    fetchKey()
  }, [])

  return (
    <div>
        <Header title={siteSettings.HeaderTitle}/>
        <RouterProvider router={router} />
    </div>
  )
}

export default App
