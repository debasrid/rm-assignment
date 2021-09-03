import {React, useState} from 'react';
import {Editing, DataGrid, Column} from 'devextreme-react/data-grid';
import DataSource from 'devextreme/data/data_source';

const dataSource = new DataSource({
  store: []
});

function Grid(props) {

  const onSaved = (event) => {
    console.log(event.component.getDataSource().items())
    props.onGridDataChanged(event.component.getDataSource().items())
  }
  return (
      <DataGrid
        keyExpr="ID"
        showBorders={true}
        dataSource={dataSource}
        onSaved={onSaved}
      >
         <Editing
            mode="cell"
            allowUpdating={true}
            allowAdding={true}
            allowDeleting={true}
            />
          <Column dataField="Date" dataType="date" />
          <Column dataField="Value" dataType="numeric"  />
          <Column dataField="Value2" dataType="numeric"  />
      </DataGrid>
  );
}

export default Grid;
