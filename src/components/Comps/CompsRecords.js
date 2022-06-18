import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import CompsTable from "./CompsTable";

class ViewRecords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comps: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/comps')
      .then(res => {
        this.setState({
          comps: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ViewRecords');
      })
  };


  render() {
    const comps = this.state.comps;
    let compsList;

    if(!comps) {
      compsList = "there is no comps record!";
    } else {
      compsList = comps.map((comp, k) =>
        <CompsTable comp={comp} key={k} />
      );
    }

    return (
      <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Books List</h2>
            </div>

            <div className="col-md-11">
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {compsList}
          </div>
        </div>
      </div>
    );
  }
}

export default ViewRecords;