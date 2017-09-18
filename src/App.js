import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="h2color">
            <h2 className="display-3">ToDoList</h2>
          </div>
        </div>
        <hr className='ml-1' />
      <form className="form-inline">
        <div className="input-group mb-0 mr-sm-0 mb-sm-0">
          <div className="input-group-addon">Title</div>
          <input type="text" className="form-control" id="text_title" required />
        </div>

        <label className="mr-sm-2" for="inlineFormCustomSelect">Priority</label>
        <select className="custom-select mb-2 mr-sm-2 mb-sm-0" id="button_dropdown">
          <option selected className="pri_1">High</option>
          <option value="Medium" className="pri_2">Medium</option>
          <option value="Low" className="pri_3">Low</option>
        </select>
          <button type="button" className="btn btn-success my-2 my-sm-0" onclick="AddItems()">ADD</button>
      </form>

        <div className="margin">
          <div className="panel-body">
            <div className="width">
              <div className="table-responsive">
                <table id="mytable" className="table table-striped table-bordered table-list">
                  <thead>
                    <tr className="text-center">
                      <th className="text-center">Done</th>
                      <th className="text-center">Title</th>
                      <th className="text-center">Priority</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody id= "tbody" className="text-center"></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

    <footer className="navbar-fixed-bottom">
      <div className="footer_fixed">
        <hr className="dotted" />
        <span>Powered by Aconex</span>
      </div>
    </footer>
  </div>

    );
  }
}

export default App;
