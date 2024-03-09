import NavBar from './components/NavBar'
import TaskInput from './components/TaskInput';
import Footer from './components/Footer';
import './App.css';

const App = () => {

  return (
    <div className='App'>
      <NavBar />
      <TaskInput />
      <Footer />
    </div>
  )
};

export default App;
