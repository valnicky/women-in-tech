
import './styles/App.scss';
import Avatar from './components/Avatar';

function App() {
    
    return ( <div className = "App"
        id = "app" >
        <header className = "App-header" >
          <h1>Women in Tech</h1> 
          </header> 
          <div className="avatars">
             <Avatar id={2} name="Andrea"/>
              <Avatar id={1} name="Andra"/>
              <Avatar id={5} name="Aria"/>
              <Avatar id={3} name="Pepa"/>
               <Avatar id={4} name="Lola"/>
              <Avatar id={6} name="Maria"/>
               <Avatar id={7} name="Nadia"/>
          </div>
       </div>
    );
}

export default App;