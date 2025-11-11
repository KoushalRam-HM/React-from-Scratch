import Header from './Components/Header'
import { Outlet } from 'react-router'
import {Provider} from 'react-redux'
import appStore from './redux.Js/appStore'

const App = () => {
  return (
    <Provider store={appStore}>
    <div>
        <Header />
        <Outlet/>
    </div>
    </Provider>
  )
}

export default App


