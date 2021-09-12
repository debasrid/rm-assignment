import { useContext } from 'react';
import { AppContext } from "../AppContext";
import applyChanges from 'devextreme/data/apply_changes';

const useGridData = () => {
  const [state, setState] = useContext(AppContext);

  const saveChange = (change) => {
    if (change && change.type) {
        const newData = sendChange(change);
        const newStateData = applyChanges(state.data, [newData], { keyExpr: 'ItemID' });
       
        setState({
            ...state,
            data: newStateData,
            changes: [],
            editRowKey: null
        })
    }
  }

  
const sendChange = (change) => {
    switch (change.type) {
      case 'insert': {
            const newData = {
                Date: change.data.Date,
                Value1: change.data.Value1,
                Value2: change.data.Value2,
                ItemID: change.key
            };
            const newStateData = updateDataGrid(state.data, newData);
            return newStateData;
        }
        case 'update': {
            const i = state.data.findIndex(_item => _item.ItemID === change.key);
            let newData = state.data[i];
            newData.Date = (change.data.hasOwnProperty("Date")) ? change.data.Date : state.data[i].Date;
            newData.Value1 = (change.data.hasOwnProperty("Value1")) ? change.data.Value1 : state.data[i].Value1;
            newData.Value2 = (change.data.hasOwnProperty("Value2")) ? change.data.Value2 : state.data[i].Value2;
            
            const newStateData = updateDataGrid(state.data, newData);
            return newStateData;
        } 
        case 'remove': {
            const newData = {
                ItemID: change.key
            };
            const newStateData = removeFromDataGrid(state.data, newData);
            return newStateData;
        }
        default:
            break;
    }
  }

  const updateDataGrid = (array, item) => { // (1)
    const i = array.findIndex(_item => _item.ItemID === item.ItemID);
    const newArray = array;
    (newArray === []) ? newArray[0] = item : (i > -1) ? (newArray[i] = item) : newArray.push(item);
    return newArray;
  }

  const removeFromDataGrid = (array, item) => { // (1)
    const i = array.findIndex(_item => _item.ItemID === item.ItemID);
    const newArray = array;
    (i > -1) && newArray.splice(i,1);
    return newArray;
  }
  
  const setChanges = (changes) => {
    setState(state => ({
        ...state,
        changes: changes
      }));
  }
  
  const setEditRowKey = (editRowKey) => {
    setState(state => ({
        ...state,
        editRowKey: editRowKey
      }));
  }

  return {
    changes: state.changes,
    data: state.data,
    editRowKey: state.editRowKey,
    saveChange,
    setChanges,
    setEditRowKey
  }
};

export default useGridData;