import {React} from 'react';
import Plot from 'react-plotly.js';
import useGridData from "../hooks/useGridData";

function Chart(props) {
  /* Implement the rendering of the chart here */
  const { data } = useGridData();

  const dateArray = data.map((item) => {return item.Date});
  const value1Array = data.map((item) => {return item.Value1});
  const value2Array = data.map((item) => {return item.Value2});

  return (
    <div>
      <Plot
        data={[
          {
            x: dateArray,
            y: value1Array,
            name: 'Value1',
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {
            x: dateArray,
            y: value2Array,
            name: 'Value2',
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'blue'},
          },
        ]}
        layout={ {width: 500, height: 500, title: 'Reelmetrics chart', color: "darkgrey"} }
      />
    </div>
  );
}
export default Chart;