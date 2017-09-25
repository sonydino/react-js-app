import React from 'react';
import './App.css';
import firebase from './fire'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
      isChecked:false,
      Tasks: [],
      Title: null,
      Priority:"High",
    }
  }
  updateTitle(e){
    this.setState({Title:e.target.value})
    
  }
  updatePriority(f){
    this.setState({Priority:f.target.value})
  }
  update
  render() {
    let Tasks = this.state.Tasks;
    return (
      <div>
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
          <input ref="input_empty" type="text" className="form-control" id="text_title" onChange = {this.updateTitle.bind(this)} required />
        </div>

        <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Priority</label>
        <select className="custom-select mb-2 mr-sm-2 mb-sm-0" defaultValue="High" id="button_dropdown" onChange = {this.updatePriority.bind(this)}>
          <option value="High" className="pri_1">High</option>
          <option value="Medium" className="pri_2">Medium</option>
          <option value="Low" className="pri_3">Low</option>
        </select>
          <button type="button" className="btn btn-success my-2 my-sm-0" onClick= {this.Add.bind(this)} >ADD</button>
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
                  <tbody id= "tbody" className="text-center">
                  {Tasks.map(i => <tr key={i.id} className={i.Check ? 'selected' : ''}>
                    <td><input type="checkbox" name="checkbox" onClick={() => this.checking(i)} checked={i.Check}/></td>
                    <td>{i.Title}</td>
                    <td>{i.Priority}</td>
                    <td><button onClick={()=>this.Deleting(i.id)}>Delete</button></td></tr>
                    )}</tbody>
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
  </div>

    );
  }
  componentWillMount(){
      
      
  }
componentDidMount() {
  const itemsRef = firebase.database().ref('Tasks');
  itemsRef.on('value', (snapshot) => {
    let items = snapshot.val();
    let newState = [];
    for (let item in items) {
      newState.push({
        id: item,
        Check: items[item].Check,
         Title: items[item].Title,
        Priority: items[item].Priority,
       
      });
    }
      newState.sort(function(a,b){
    var priority_1=a.Priority.toLowerCase();
    if(priority_1==='low') priority_1="zzzz";
    var priority_2=b.Priority.toLowerCase();
    if(priority_2==='low') priority_2="zzzz";
    if(priority_1<=priority_2)  return -1;
    return 1;
  });

    this.setState({
      Tasks: newState
    });
  });

};

Add(props) {
  if(this.state.Title === null || this.state.Title ===''){
    alert("title is required");
    return 0;
  }
  
  const itemsRef = firebase.database().ref('Tasks')
  const a={Check:this.state.isChecked,Title:this.state.Title,'Priority':this.state.Priority};
  itemsRef.push(a);

  
  this.state.Tasks.sort(function(a,b){
    var priority_1=a.Priority.toLowerCase();
    if(priority_1==='low') priority_1="zzzz";
    var priority_2=b.Priority.toLowerCase();
    if(priority_2==='low') priority_2="zzzz";
    if(priority_1<=priority_2)  return -1;
    return 1;
  });
  this.setState({Check:this.state.isChecked,Title:null,
    Priority:this.state.Priority})
    this.refs.input_empty.value='';

}
checking(event){
  console.log(event);
    console.log(event.Check);
    console.log(event.id);
    
    var Change= !event.Check;
    firebase.database().ref('Tasks/').child(event.id)
        .update({ Check: true });

 let tasks1 = this.state.Tasks;
 var j;
 {for(j=0;j<tasks1.length;j++){
  if (event.Title===tasks1[j].Title){
    if(event.Check===false){
      tasks1[j].Check=true;
      this.setState({Tasks:tasks1});
      return 0;
    }
    else{
      tasks1[j].Check=false;
      this.setState({Tasks:tasks1})
      return 0;
    }
  }
 }}

this.setState({isChecked: !this.state.Tasks});
}
Deleting(props){
    console.log(props);
    const itemRef = firebase.database().ref(`/Tasks/${props}`);
    itemRef.remove();

  let taaskss= this.state.Tasks;
  var i;
  {for(i=0;i<taaskss.length;i++)
  {

    if(props===taaskss[i].Title)
    {
      
  taaskss.splice(i,1);
  this.setState({Tasks:taaskss});
  return 0;
}}

}}
}
export default App;