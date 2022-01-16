import "./App.css";
import "./Assets/App.scss";

function App() {
  return (
    <div className="container">
      <div className="navbar"> header</div>

      <div className="section">
        <div className="card section-1">1</div>
        <div className="card section-2">2</div>
        <div className="card section-3">3</div>
        <div className="card section-4">4</div>
        <div className="card section-5">5</div>
        <div className="card section-6">6</div>
      </div>

       <div className="diki">
        <div className="diki-anak diki-1">1</div>
        <div className="diki-anak diki-2">
        <div className= "diki-2-anak">1</div>
        <div className= "diki-2-anak">2</div>
        </div>
        <div className="diki-anak diki-3">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        </div>
        

       </div>
    </div>
  );
}

export default App;
