//Components
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Dashboard from "./components/pages/dashboard/Dashboard";

function App() {
  return (
    <div className="container">
      <SideBar />
      <main className="main">
        <Header />
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
