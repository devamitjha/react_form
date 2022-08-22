import React, {useState} from 'react';
import './App.scss';

function App() {
  const [formValue, setFormValue] = useState({
    name:'',
    email:'',
    password:'',
    textArea:'',
    selectedValue:'Ford'
  });
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(formValue);
   
   
  }
  const handleUpdate = (e)=>{
    setFormValue({...formValue, [e.target.name]:e.target.value});
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="w_80">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" aria-describedby="emailHelp" onChange={handleUpdate} name="name"/>
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" aria-describedby="emailHelp" onChange={handleUpdate} name="email"/>
            </div>    
            <div className="mb-3">
              <textarea onChange={handleUpdate} name="textArea"/>
            </div> 
            <div className="mb-3">
              <select value={formValue.selectedValue} onChange={handleUpdate} name="selectedValue">
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
              </select>
            </div>         
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" onChange={handleUpdate} name="password"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <div className="row mt-3">
            <p>Name:<span>{formValue.name}</span></p>
            <p>Email:<span>{formValue.email}</span></p>
            <p>Password:<span>{formValue.password}</span></p>
            <p>textArea:<span>{formValue.textArea}</span></p>
            <p>select:<span>{formValue.selectedValue}</span></p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
