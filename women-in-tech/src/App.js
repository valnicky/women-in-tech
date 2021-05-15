
import './App.css';
import Avatar from './components/Avatar';

function App() {
    
  /*{  
    const $app = document.getElementById('app');

    $app.querySelectorAll('img').forEach(
      (img) => {
        img.addEventListener('click', ()=>{
          img.classList.toggle('disabled');
        });
      }
    );}*/
    
    
    return ( <div className = "App"
        id = "app" >
        <header className = "App-header" >
    <Avatar id={5} name="Andrea"/>
     <Avatar id={1} name="Andra"/>
       </header> 
       </div>
    );
}

export default App;