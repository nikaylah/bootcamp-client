import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state={
      employees:[]
    }
  }

  componentDidMount(){
    fetch('http://localhost:3005/getSogetiEmployees')
    .then(employees => employees.json())
    .then(_employees => {
      console.log(_employees)

      this.setState({
        employees: _employees
      })
    })
    .catch(err => console.log(err))
  }


  render(){
    return (
      <div className="App container">

      <h1>Sogeti Employee Directory</h1>
      <hr />

        <div className="row row-cols-4">
      
        { this.state.employees.map((employee, index) => {
            return(
              // <div className="media col-12 mb-4 p-3 directory-entry">
              //   <img className="mr-3 directory-image" src={employee.image}  alt="..."/>
              //   <div className="media-body">
              //     <h5 className="mt-0">{employee.name}</h5>
              //     <p>{employee.location}</p>
              //     <p>{employee.phone}</p>
              //   </div>
              // </div>


              <div key={index} className="card directory-entry" >
              <img src={employee.image} className="card-img-top mr-3" alt="..."/>
              <div className="card-body">
              <h5 className="card-title">{employee.name}</h5>
                <p className="card-text">
                {employee.location}
                </p>
                <p className="card-text">
                
                </p>
                <a href="#" class="card-link">Card link</a>
              </div>
              </div>
  

            )
          })
        }
        </div>
      </div>
    );
  } 

}

export default App;
