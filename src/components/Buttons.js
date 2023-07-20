import satData from './satData'



//props created from App function:
// filterByType
// setSat
// displaySats

const Buttons = (props) => {
  let filterByType = props.filterByType //function to filter
  let setSat = props.setSat
  let displaySats = props.displaySats //array w/ low, med, high strings
 
  return (
    <div>
      {displaySats.map((sat, id) => { //makes 3 buttons named in displaySats and gives them their ids
        // console.log(sat)
        return(
          <button onClick={() => filterByType(sat)} key={id}>
             {sat} Orbit
           </button>
        );
      })}
      

      <button onClick={() => setSat(satData)}>
        All Orbits
      </button>
    </div>
  );
};

export default Buttons;