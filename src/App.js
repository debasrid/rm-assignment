import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import Grid from './components/grid'
import Chart from './components/chart'
import {React, useState} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  const onGridDataChanged = (items) => {
    setData(items);
  }
  return (
    <div className="container">
      <div className="Header">ReelMetrics</div>
      <div className="Footer">Copyright 2021</div>
      <div className="Data">
        <Grid onGridDataChanged={onGridDataChanged}/>
      </div>
      <div className="Chart">
        <Chart data={data}/>
      </div>
    </div>
  );
}

export default App;
