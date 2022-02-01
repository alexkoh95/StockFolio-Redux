import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { dashboardActions } from "../../slices/Dashboard-Slice/Dashboard-Slice";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const GridView = () => {
  const state = useSelector((state) => state);
  const userStockInformation =
    state.dashboard.userStockInformation.userInformation.listOfStocks;

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact rowData={userStockInformation}>
        <AgGridColumn field="field1"></AgGridColumn>
        <AgGridColumn field="field2"></AgGridColumn>
        <AgGridColumn field="field3"></AgGridColumn>
        <AgGridColumn field="field4"></AgGridColumn>
        <AgGridColumn field="field5"></AgGridColumn>
        <AgGridColumn field="field6"></AgGridColumn>
        <AgGridColumn field="field7"></AgGridColumn>
        <AgGridColumn field="field8"></AgGridColumn>
      </AgGridReact>
    </div>
  );
};

export default GridView;
