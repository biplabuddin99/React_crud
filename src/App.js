import react from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddStudent from "./components/AddStudent";
import Student from "./components/Student";
import SingleStudent from "./components/SingleStudent";


function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/students" className='nav-link '>
                  List
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/add" className='nav-link '>
                   Crate
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <Routes>
              <Route path='/students' element={<Student/>}></Route>
              <Route path='/add' element={<AddStudent/>}></Route>
              <Route path='/students/edit/:id' element={<SingleStudent/>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
