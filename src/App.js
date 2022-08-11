import './App.css';



function App() {
  return (
      <div>
        
        <div className='header'>
          <h2>Meus Livros</h2>
        </div>

        <div className='search'>
          <input type="search" placeholder="Procure Aqui..."></input>
        </div>

        <div className='books'>
          <div>
            <img src='https://altabooks.com.br/wp-content/uploads/2021/07/Codigo_Limpo-scaled.jpg' height='250px'></img>
            <p>NOTA: 5/5</p>
          </div>

          <div>
            <img src='https://altabooks.com.br/wp-content/uploads/2021/07/Codigo_Limpo-scaled.jpg' height='250px'></img>
            <p>NOTA: 5/5</p>
          </div>

          <div>
            <img src='https://altabooks.com.br/wp-content/uploads/2021/07/Codigo_Limpo-scaled.jpg' height='250px'></img>
            <p>NOTA: 5/5</p>
          </div>

          <div>
            <img src='https://altabooks.com.br/wp-content/uploads/2021/07/Codigo_Limpo-scaled.jpg' height='250px'></img>
            <p>NOTA: 5/5</p>
          </div>
        </div>

        <div className='footer'>
          <h4>FEITO POR MARIANO JUNIOR</h4>
        </div>
      </div>
  );
}

export default App;
