import './app.scss';
import { Navbar } from './components';
import { About, Footer, Header, Skills, Work } from './container';


function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <Work/>
      <Footer/>
    </div>
  );
}

export default App;
