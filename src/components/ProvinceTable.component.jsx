import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";

class ProviceTable extends Component {
  render() {
    const data = this.props.data;
    let bg;
    let textColor;
    if (data) {
      if (data.value > 10000) {bg = "#770000";textColor = "text-white"}
        else if (data.value > 1000) {bg = "#FF0000"; textColor = "text-white"}
        else if (data.value > 500) {bg = "#FF4D00"; textColor = "text-white"}
        else if (data.value > 100) {bg = "#FF9A00"; textColor = "text-dark"}
        else if (data.value > 10) {bg = "#FFC100"; textColor = "text-dark"}
        else if (data.value > 0) {bg = "#FFFF00";textColor = "text-dark"}
        else {bg = "#D3D3D3"; textColor = "text-dark"}
    }
    // console.log(data);
    return data ? (
      <div className="container mt-5 p-3 shadow rounded-lg border border-warning ">
        <h4 className="p-3 mx-auto">{data.pname}疫情数据</h4>
        <table className="table table-striped table-hover table-sm table-responsive-sm border">
          <thead className={textColor? textColor : "text-info"} style={{ fontWeight: "bold", fontSize: 20,  backgroundColor:  bg? bg : "#ffc107"}}>
            <tr>
              <th>行政区</th>
              <th>确诊</th>
              <th>死亡</th>
              <th>治愈</th>
            </tr>
          </thead>
          <tbody>
            {data.children.map(city => (
              <tr key={city.name}>
                <td style={{ fontWeight: "bold" }}>{city.name}</td>
                <td>{city.total.confirm}</td>
                <td>{city.total.dead}</td>
                <td>{city.total.heal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (
      <div className="container mt-5 p-3 shadow rounded-lg border border-warning">
        <h4 className="p-3 mx-auto">点击各省查看下辖县市</h4>
      </div>
    );
  }
}

export default ProviceTable;
