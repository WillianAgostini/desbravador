import React, { Component } from "react";

class Details extends Component {
  
  render(props) {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          {this.props.valor.login}
        </div>
        <div className="panel-body ">
          <div className="container">
            <div className="row">
              <img
                src={this.props.valor.avatar_url}
                className="img-circle img-responsive col-xs-3 col-md-2"
              />
              <div className=" col-sm-2 col-md-2">
                <p className="text-muted">
                  Seguidores: {this.props.valor.followers}
                </p>
                <p className="text-primary">
                  Seguindo: {this.props.valor.following}
                </p>
                <p className="text-info">
                  email: {this.props.valor.email}
                </p>
                <p className="text-warning">
                  bio: {this.props.valor.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
