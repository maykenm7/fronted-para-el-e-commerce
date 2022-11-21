import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Layout (LayoutAuth)
import LayoutAuth from './Layout/LayoutAuth'

// pages (usuarios)
import Login from './pages/Login'
import Registro from './pages/usuario/Registro'
import OlvidePassword from './pages/usuario/OlvidePassword'
import Confirmar from './pages/usuario/Confirmar'

function App() {
  return (
    <Router>
      <Routes>
        {/* RUTAS PUBLICAS */}
        <Route path='/' element={<LayoutAuth />}>
          <Route index element={<Login />} />
          <Route path='registro' element={<Registro />} />
          <Route path='olvide-password' element={<OlvidePassword />} />
          <Route path='confirmar/:id' element={<Confirmar />} />
        </Route>
      </Routes>
    </Router>
  )
}
export default App

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App