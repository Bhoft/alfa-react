// import logo from './logo.svg';
// import './App.css';
import {fruitNames, fruits, mixFruitnames, mixFruits } from "./exampleData"

function App() {

  const hello = function(name) { return `hallo aus der Funktion: ${name}`}

  const hello2 = (name) => {
    return `hallo aus hello2: ${name}`
  }

  const myNumbers = [1,3,6,9]
  
  const myNewNumbers = myNumbers.map((n, i) => n*(i + 1))

  const cars = ['Prosche', 'Mercedes', 'Tesla'];

  // test output auf console
  const carHandler = (c, i) => {console.log(c, i)}
  cars.map(carHandler);


  // ohne => {} brauche ich keine "return" function
  const carHandler2 = (car, index) => (
    <li key = {index}>
    <span>{index}</span>
    <span>{car}</span>
  </li>
  )

  const numberHandler = (number, index) => (
    <li key = {index}>
        <span>{number}</span>
    </li>
  )

  const vehicles = ['mustang', 'f-150', 'expedition'];


  //destructuring
  // https://www.w3schools.com/REACT/react_es6_destructuring.asp
  const [car, truck, suv] = vehicles;
  // man kann auch auslassen 
  // const [car,, suv] = vehicles;

  const mixFruitnamesArr =  fruitNames.reduce((name1, name2) => mixFruitnames(name1, name2))

  // console.log(fruits);
  // const mixedFruits =  fruits.reduce((fruit1, fruit2) => 
  //   // console.log(['friuit 1', fruit1]);
  //   // console.log(['friuit 1', fruit2]);
  //   mixFruits(fruit1, fruit2)
  // )

  const mixedFruits =  fruits.reduce((fruit1, fruit2) => {
  // console.log(['friuit 1', fruit1]);
  // console.log(['friuit 1', fruit2]);
    return mixFruits(fruit1, fruit2);
  })
  
  console.log(mixedFruits);


  return (
    <div>
      <h1>Hallo Michael</h1>
      <p>{hello("michael")}</p>
      <p>{hello2("Vogt")}</p>

      <ul>
      { cars.map(
        (car, index)=> {
           return (
            <li key = {index}>
              <span>{index}</span>
              <span>{car}</span>
            </li>
           )
        }
      )}
      </ul>

      <ul>
        {cars.map(carHandler2)}
      </ul>

      <h2>todo: output of myNumers && myNewNumbers in an Ordered List</h2>
      <ol>
      {myNumbers.map(numberHandler)}
      </ol>

      <ol>
      {myNewNumbers.map(numberHandler)}
      </ol>


      <p>
        {mixFruitnamesArr}
      </p>
      { mixFruitnamesArr.indexOf('banana') > -1 ? (<p>Banane ist drin</p>) : (<p>Keine Banane enthalten</p>)

      }

      <p>
        {fruits.map(mixFruits)}
      </p>

      {/* todo: mix fruits and render the resulting color... */}
      {/* {mixedFruits.map(

        (fruit, index)=> {
          return (
          <li key = {index}>
            <span>{index}</span>
            <span>{fruit.name}</span>
            <span>{fruit.color}</span>
          </li>
          )
        }
      )} */}
    </div>
  );


  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       {/* <h1 style={{padding:'10em'}}>Hello world</h1> */}
  //       <h1> hallo welt</h1>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
