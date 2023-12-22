import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';

function App() {
  const txt= "React 와우";
  return (
    <>
    <Header />
    <Main txt={txt} color="red" name="철수"/>  
    <Footer />
    </>
  );
}

export default App;
