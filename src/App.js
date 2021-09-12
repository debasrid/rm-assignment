import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import Grid from './components/grid'
import Chart from './components/chart'
import {React} from 'react';
import './App.css';
import { AppContextProvider } from "./AppContext";

function App() {
  return (
    /* overall structure */
    <AppContextProvider>
      <div className="container">
        <div className="Header">ReelMetrics</div>
        <div className="Data"><Grid /></div>
        <div className="Chart"><Chart /></div>
        <div className="Footer">Copyright 2021</div>
      </div>
    </AppContextProvider>
  );
}

export default App;
