import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import Sidebar from "../components/Sidebar";
import Spaces from "../components/Spaces";

export default function Catalogue() {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="flex w-200 w-[90%] h-screen justify-center items-center">
        <div className="flex flex-col bg-white w-[100%] h-[86%] text-black rounded-[30px] rounded-bl-none items-center">
          <Header />
          <Sidebar />
          <SearchInput />
          <Spaces />
        </div>
      </div>
    </div>
  );
}