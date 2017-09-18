import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>To Do List</h2>
        </div>
        <hr className='ml-1' />
        <form>
          <div className="input-group mb-0 mr-sm-0 mb-sm-0">
            Title:
              <input type="text" className="form-control" id="text_title" />

              <label className="mr-sm-2" for="inlineFormCustomSelect">Preferences</label>
              <select className="custom-select mb-2 mr-sm-2 mb-sm-0" id="button_dropdown">
                <option selected className="pri_1">High</option>
                <option value="Medium" className="pri_2">Medium</option>
                <option value="Low" className="pri_3">Low</option>
              </select>
  
              <button type="button" className="btn btn-success my-2 my-sm-0" onclick="AddItems()">ADD</button>
            </div>
        </form>

        <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          s;
        </div>
      </div>
    </div>


      
    );
  }
}

export default App;
