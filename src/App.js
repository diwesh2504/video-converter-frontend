import {useState} from "react"
import './App.css';

function App() {
  const [name, setName] = useState("")
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-3"></div>
        <div className="col">
        <div className="mt-5">
          <form  method="POST" action="http://localhost:4040/upload" encType="multipart/form-data" name="/file-form">
          <div>
            <input type="file" id="raw_file" name="myfile"/>
            <label className="form-label" for="raw_file">{name}</label>
            
          </div>
          <label class="my-1 mr-2" for="target_ext">To</label>
          <select class="custom-select my-1 mr-sm-2" name="to" id="target_ext_type">
            <option selected>HLS</option>
          </select>
          <button type="submit" className="mt-5 btn btn-success btn-block">CONVERT</button>
          <small>Converted files will be in the backend folder (i.e ../backend/uploads)</small>
          </form>
        </div>
        </div>
        <div className="col-3"></div> 
      </div>
    </div>
    </>
  );
}

export default App;
