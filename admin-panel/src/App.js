//Components
import SideBar from "./components/SideBar";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <SideBar />
      <main className="main">
        <Header />
      </main>
    </div>
  );
}

export default App;
