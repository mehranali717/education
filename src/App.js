import logo from './logo.svg';
import './App.css';
import { Routes } from './routes/routes';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
library.add(faFacebook)
const App =()=> <Routes />
export default App;
