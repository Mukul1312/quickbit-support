import "./App.css";
import SideBar from "./components/SideBarComponent/SideNavigationBarComponent";
import Navbar from "./components/TopNavAdminComponent/TopNavAdminComponent";
import BreadcrumbNav from "./components/BreadcrumbNavigation/BreadcrumbNavigation";
import MemberProfileEdit from "./components/MemberProfileEditComponent/MemberProfileEditComponent";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Navbar />
      <BreadcrumbNav />
      <MemberProfileEdit />
    </div>
  );
}

export default App;
