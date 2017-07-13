import React, { Component } from "react";

class Details extends Component {
  render(props) {
    if (this.props.userDetails.login == null) return <div />;

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          {this.props.userDetails.login}
        </div>
        <div className="panel-body ">
          <div className="container">
            <div className="row">
              <img
                alt={true}
                src={this.props.userDetails.avatar_url}
                className="img-circle img-responsive col-xs-3 col-md-2"
              />
              <div className=" col-sm-2 col-md-2">
                <p className="text-muted">
                  Seguidores: {this.props.userDetails.followers}
                </p>
                <p className="text-primary">
                  Seguindo: {this.props.userDetails.following}
                </p>
                <p className="text-info">
                  email: {this.props.userDetails.email}
                </p>
                <p className="text-warning">
                  bio: {this.props.userDetails.bio}
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
