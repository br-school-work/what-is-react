import './App.css';

function SecretComponent() {
  return <h1>Authoried only</h1>
}

function RegularComponenet() {
  return <h1>Everyone can see  this </h1>
}

function App(props) {
  return (
    <>
    {props.authorized ? <SecretComponent/> : <RegularComponenet/>}
    </>
  )
}

export default App;
