import React, { Component } from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import Loader from "react-loader-spinner";

export default class Heroes extends Component {
  state = {
    heroes: [],
    show: false,
    currentHero: {
      abilities: [],
    },
  };

  componentDidMount() {
    axios.get("http://hotsapi.net/api/v1/heroes").then((res) => {
      this.setState({ heroes: res.data });
    });
  }

  handleClick = (hero) => {
    this.setState({ show: true });
    this.setState({ currentHero: hero });
    console.log("data" + this.state.currentHero.toString());
  };

  render() {
    return (
      <div>
        <Loader
         type="Grid"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs
 
      />
        <Modal show={this.state.show}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.currentHero.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.currentHero.abilities.map((data) => {
              return <p id={data["name"]}>{data["name"]} {data["title"]} {data["description"]}</p>;
            })}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => this.setState({ show: false })}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Role</th>
              <th scope="col">Type</th>
            </tr>
          </thead>
          <tbody>
            {this.state.heroes.map((post) => {
              return (
                <tr
                  key={post.attribute_id}
                  onClick={() => this.handleClick(post)}
                >
                  <td>
                    <img
                      src={post.icon_url["92x93"]}
                      className="rounded"
                      width="50px"
                      height="50px"
                      alt="img"
                    />
                  </td>
                  <td>{post.name}</td>
                  <td>{post.role}</td>
                  <td>{post.type}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
