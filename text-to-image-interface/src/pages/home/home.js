import Categorybar from "../../components/categorybar/Categorybar";
import Searchbar from "../../components/introbar/Searchbar";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./home.css"


export default function Home() {
  return (
    <>
        <Topbar/>
        <Searchbar/>
      
      <div className="homeContainer">
        <Sidebar/>
        <Posts/>



        
        
        
      </div>
    </>
  );
}