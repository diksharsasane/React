import './App.css'

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  return (
    <>
    <h1>Hello Dosto</h1>
      {/*REACT_APP_APPWRITE_URL="test environment"===> .env for create-react-app library */}
    </>
  )
}

export default App
