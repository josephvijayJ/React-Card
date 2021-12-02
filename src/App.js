import Button from './components/Button';
import Header from './components/Header';
import Headerlists from './components/Header_lists';
function App() {
  const clickEvent = (e) => {
    console.log(e);
  };
  return (
    <>
      <div className="card-container">
        <div className="card">
          <Header title="Free" payment="0$/Month" />
          <Headerlists />
          <Button onClick={clickEvent} />
        </div>
        <div className="card">
          <Header title="Free" payment="0$/Month" />
          <Headerlists />
          <Button />
        </div>
        <div className="card">
          <Header title="Free" payment="0$/Month" />
          <Headerlists />
          <Button />
        </div>
      </div>
    </>
  );
}

export default App;
