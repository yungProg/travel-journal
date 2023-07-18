import Header from './Header';
import Place from './Place';
import scenery from './data';
import './App.css';

function App() {
  const vac = scenery.map((item) => {
    return (
      <Place key={item.id} item = {item}/>
    )
  })

  return (
    <div className="App">
      <Header />
      <section>{vac}</section>
    </div>
  );
}

export default App;
