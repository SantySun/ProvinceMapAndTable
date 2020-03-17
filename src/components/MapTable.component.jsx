import React, { Component } from "react";
import ChinaMap from "./ChinaMap.component";
import ProvinceTable from "./ProvinceTable.component";
class MapTable extends Component {
  constructor() {
    super();
    this.state = { provinceData: null };
    this.handleProvinceChange = this.handleProvinceChange.bind(this);
  }
  handleProvinceChange(provinceData) {
    this.setState({ provinceData });
  }

  render() {
    // console.log(this.state.provinceData);
    return (
      <div>
        <ChinaMap
          handleProvinceChange={data => this.handleProvinceChange(data)}
        />
        <ProvinceTable data={this.state.provinceData} />
      </div>
    );
  }
}

export default MapTable;
