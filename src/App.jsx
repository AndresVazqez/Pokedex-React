import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokemonPage from './Components/Pages/PokemonesPage/PokemonesPage';
import HomePage from './Components/Pages/HomePage/HomePage';
import Header from './Components/Header/Header';





function App() {

  

      return (
        <BrowserRouter>
            <Header>
                <Header/>
            </Header>
            <Routes>
                <Route path='/'>
                  <Route index element={<HomePage/>}/>
                  <Route path="pokemones" element={<PokemonPage/>}/>              
                  <Route path="*" element={<h1>There is nothing here...</h1>}/>              
                </Route>
            </Routes>          
        </BrowserRouter>


      )


  

  
}

export default App;
