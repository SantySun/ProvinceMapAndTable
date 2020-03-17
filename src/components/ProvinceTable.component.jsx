import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";

class ProviceTable extends Component {
  render() {
    const data = this.props.data;
    // console.log(data);
    return data ? (
      <div className="container mt-5 p-3 shadow rounded-lg border border-warning">
        <h3>{data.pname}疫情数据</h3>
        <table className="table table-striped table-hover table-sm table-responsive-sm">
          <thead className="bg-warning" style={{ fontWeight: "bold", fontSize: 20 }}>
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
        <h3>点击各省查看下辖县市</h3>
      </div>
    );
  }
}

export default ProviceTable;
