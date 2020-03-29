import React, { Component } from "react";
import ChinaMap from "./ChinaMap.component";
import ProvinceTable from "./ProvinceTable.component";
import "bootstrap/dist/css/bootstrap.min.css";
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
        <footer
          className="fixed-bottom shadow border rounded  text-muted"
          style={{ height: "35px", backgroundColor: "#EEEEEE" }}
        >
          <div className="container">
            <a className="float-right" href="#">
              返回顶部
            </a>
            <p className="mt-1">*此页面仅为示例，数据已停止更新。</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default MapTable;
