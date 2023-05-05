import './App.css';
import { PeepsData } from "./PeepsData";
import {useState} from 'react';



function App() {
  const [searchBox, setSearchBox] = useState('');

  const peepsList = PeepsData.filter((peeps) => {
    if (searchBox === "") {
      return true;
    } else if (peeps.firstName.toLowerCase().includes(searchBox.toLowerCase())) {
      return true;
    } else if (peeps.lastName.toLowerCase().includes(searchBox.toLowerCase())) {
      return true;
    } else if (peeps.title.toLowerCase().includes(searchBox.toLowerCase())) {
      return true;
    }
    return false;
  }).map((datum) => (
      <div key={datum.id} className="profile-contents">
        < img src={datum.picture} alt="Peeps pix" />
        <div>
          <div>{datum.id}</div>
          <div>
            {datum.title} {datum.firstName} {datum.lastName}
          </div>
        </div>
      </div>
  ));

  return (
    <div className="App-Container">
      <input
        type="text"
        placeholder="Search by name..."
        onChange={(event) => {
          setSearchBox(event.target.value);
        }}
      />
      <div className="Peeps-info">{peepsList}</div>
    </div>
  );
}

export default App;