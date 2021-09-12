import {React, useCallback} from 'react';
import {Editing, DataGrid, Column} from 'devextreme-react/data-grid';
import useGridData from "../hooks/useGridData";

const Grid = () => {
  /* Implement the Grid to enter the data here */
  const { changes, data, editRowKey, saveChange, setChanges, setEditRowKey } = useGridData();

  const onSaving = useCallback((e) => {
    e.cancel = true;
    e.promise = saveChange(e.changes[0]);
  }, []);

  const onChangesChange = useCallback((changes) => {
    setChanges(changes);
  }, []);

  const onEditRowKeyChange = useCallback((editRowKey) => {
    setEditRowKey(editRowKey);
  }, []);

  return (
    <div id="data-grid-demo">
      <DataGrid id="gridContainer"
        keyExpr="ItemID"
        dataSource={data}
        showBorders
        repaintChangesOnly
        onSaving={onSaving}
      >
        <Editing
          mode="cell"
          allowUpdating
          allowAdding
          allowDeleting
          changes={changes}
          onChangesChange={onChangesChange}
          editRowKey={editRowKey}
          onEditRowKeyChange={onEditRowKeyChange} />

        <Column dataField="Date" dataType="date" style / >
        <Column dataField="Value1" dataType="int" />
        <Column dataField="Value2" dataType="int" />
      </DataGrid>
    </div>
  );

}

export default Grid;
