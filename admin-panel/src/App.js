import {Routes, Route , Navigate} from "react-router-dom";

//Components
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Order from "./components/pages/orders/Order";
import Favorite from "./components/pages/favorite/Favorite";
import Address from "./components/pages/address/Address";
import Account from "./components/pages/account/Account"
import Wallet from "./components/pages/wallet/Wallet";

function App() {
  return (
    <div className="container">
      <SideBar />
      <main className="main">
        <Header />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/order" element={<Order />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/address" element={<Address />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/my-account" element={<Account />} />
          <Route path="/*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
