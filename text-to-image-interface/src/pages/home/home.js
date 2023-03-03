import Categorybar from "../../components/categorybar/Categorybar";
import Searchbar from "../../components/introbar/Searchbar";
import Topbar from "../../components/topbar/Topbar";
import "./home.css"

export default function Home() {
  return (
    <>
      
      <div className="homeContainer">
        <Topbar/>
        <Searchbar/>
        <Categorybar/>
      </div>
    </>
  );
}