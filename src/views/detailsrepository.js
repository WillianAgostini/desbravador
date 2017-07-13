import React, { Component } from "react";
import { Table } from "react-bootstrap";
class DetailsRepository extends Component {
  constructor(props) {
    super(props);

    this.getRepository = this.getRepository.bind(this);
    // this.state = {
    //   repository: []
    // };
  }

  orderByStar = props => {
    let array = this.props.repositoryDetails.reverse();
    this.render(array);
  };

  getRepository(url) {
    fetch(url).then(async response => {
      if (!response.ok) {
        console.warn(response);
      }
      let json = await response.json();
      console.log(json);
    });
  }

  render(props) {
    if (this.props.repositoryDetails.length === 0) return <div />;
    return (
      <div
        className="panel-group"
        id="accordion"
        role="tablist"
        aria-multiselectable="true"
      >
        <div className="panel panel-default">
          <div
            className="panel-heading"
            role="tab"
            id="headingOne"
            href="#collapseOne"
            data-toggle="collapse"
            data-parent="#accordion"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <h4 className="panel-title">Repositórios</h4>
          </div>
          <div
            expanded="false"
            id="collapseOne"
            className="panel-collapse collapse in"
            role="tabpanel"
            aria-labelledby="headingOne"
          >
            <Table responsive>
              <thead>
                <tr>
                  <th onClick={() => alert("click")}>
                    Star
                    <span
                      className="glyphicon glyphicon-sort-by-attributes"
                      aria-hidden="true"
                    />
                  </th>
                  <th id="NameTable"> Name </th>
                </tr>
              </thead>
              <tbody>
                {this.props.repositoryDetails.map(x =>
                  <tr onClick={() => this.getRepository(x.url)}>
                    <td>
                      {x.stargazers_count}
                    </td>
                    <td id="value">
                      {x.name}
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailsRepository;
