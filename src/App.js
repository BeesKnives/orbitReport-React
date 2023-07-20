import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from './components/Banner';
import {useState} from 'react';
import satData from "./components/satData";

function App() {
  const [sat, setSat] = useState(satData) //sat used to compare state changes, setSat is function used to update the state
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];//makes new array, used later to make 3 buttons. Set method prevents duplicates
  
  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
      // console.log(newSatDisplay)
      // console.log(newSatDisplay.orbitType)
      // console.log(currentType)
      return (newSatDisplay.orbitType === currentType);
      // return (setSat(displaySats)=== currentType)

    });
    // console.log(setSat(displaySats))
    setSat(displaySats);
  }
  
  return (
    <div>
      <Banner />
      <Buttons 
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
      />
      <Table sat={sat} />
    </div>
  );
}

export default App;
