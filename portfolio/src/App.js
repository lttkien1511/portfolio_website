import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Education from './components/MiddleInfo/Education';
import WorkingExp from './components/MiddleInfo/WorkingExp';
import Skills from './components/MiddleInfo/Skills';
import Achievement from './components/MiddleInfo/Achievements';
import Certification from './components/MiddleInfo/Certification';
import Papers from './components/MiddleInfo/Papers';
import Highlight from './components/Highlight';

function App() {
  return (
    <div className="App">
      <Header />
      <Highlight />
      <Education />
      <WorkingExp />
      <Skills />
      <Achievement />
      <Certification />
      <Papers/>
      
    </div>
  );
}

export default App;
