import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss'

import { Router, useRoutes } from 'react-router-dom';

import router from './config/Routes';

function App() {
 
  const element = useRoutes(router);

  return (<>
  {element}
  </>
  )
}

export default App
