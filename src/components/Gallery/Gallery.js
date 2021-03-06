import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { getArticles } from "../../common/utils/services";
import { Spinner } from "react-bootstrap";
class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      picList: [],
    };
  }

  componentDidMount() {
    getArticles()
      .then((res) => res.data)
      .then((data) => {
        data.map((item) => {
          this.setState({
            picList: [...this.state.picList, item.social_image],
          });
          return this.state.picList;
        });
      });
  }

  onClickNext = () => {
    if (this.state.index + 1 === this.state.picList.length) {
      this.setState({
        index: 0,
      });
    } else {
      this.setState({
        index: this.state.index + 1,
      });
    }
  };

  onClickPrevious = () => {
    if (this.state.index - 1 === -1) {
      this.setState({
        index: this.state.picList.length - 1,
      });
    } else {
      this.setState({
        index: this.state.index - 1,
      });
    }
  };

  render() {
    return (
      <>
        {!this.state.picList.length && (
          <div className="loader">
            <Spinner animation="border" variant="primary" />
            <div>Loading...</div>
          </div>
        )}
        {this.state.picList.length && (
          <div className="center-box ml-auto mr-auto mt-200">
            <img
              src={this.state.picList[this.state.index]}
              className="gallery-img mb-4"
              alt=""
            />
            <br />
            <Button
              className="mt-2 mb-3 mr-5 btn-width"
              variant="contained"
              onClick={this.onClickPrevious}
            >
              Previous
            </Button>
            <Button
              className="mt-2 mb-3 btn-width"
              variant="contained"
              color="primary"
              onClick={this.onClickNext}
            >
              Next
            </Button>
          </div>
        )}
      </>
    );
  }
}

export default Gallery;
