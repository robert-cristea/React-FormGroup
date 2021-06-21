import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Header from './components/Header';

function App() {
  return (
    <div className="w-full">
      <div className="w-75 mx-auto">
        <Header />
        <div className="row mt-5">
          <div className="col-md-3 d-flex justify-content-start">
            <Sidebar />
          </div>
          <div className="col-md-9 d-flex justify-content-center">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
