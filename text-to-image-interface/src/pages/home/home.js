import Categorybar from "../../components/categorybar/Categorybar";
import Searchbar from "../../components/introbar/Searchbar";
import Posts from "../../components/posts/Posts";
import Topbar from "../../components/topbar/Topbar";
import "./home.css"


export default function Home() {
  return (
    <>
      
      <div className="homeContainer">
        <Topbar/>
        <Searchbar/>
        <Posts/>

        
        
        
      </div>
    </>
  );
}