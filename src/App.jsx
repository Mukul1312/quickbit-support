import SideBar from "./components/SideBarComponent/SideNavigationBarComponent";
import Navbar from "./components/TopNavAdminComponent/TopNavAdminComponent";
import BreadcrumbNav from "./components/BreadcrumbNavigation/BreadcrumbNavigation";
import MemberProfileEdit from "./components/MemberProfileEditComponent/MemberProfileEditComponent";

function App() {
  return (
    <div className="bg-[#101010] flex flex-row items-start">
      <SideBar />
      <div className="w-full">
        <Navbar />
        <div className="px-[16px] py-[24px]  box-border">
          <div className="bg-black rounded-[10px] gap-[32px] p-[24px] flex flex-col justify-center items-center box-border">
            <BreadcrumbNav />
            <MemberProfileEdit />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
