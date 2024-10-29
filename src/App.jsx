import SideBar from "./components/SideBarComponent/SideNavigationBarComponent";
import Navbar from "./components/TopNavAdminComponent/TopNavAdminComponent";
import BreadcrumbNav from "./components/BreadcrumbNavigation/BreadcrumbNavigation";
import MemberProfileEdit from "./components/MemberProfileEditComponent/MemberProfileEditComponent";
import ProfileInfoComponent from "./components/ProfileInfoComponent/ProfileInfoComponent";

function App() {
  return (
    <div className="App bg-black flex flex-row items-start">
      <SideBar />
      <div className="w-full">
        <Navbar />
        <div className="p-[24px] flex flex-col justify-center items-center">
          <BreadcrumbNav />
          {/* <MemberProfileEdit /> */}
          <ProfileInfoComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
