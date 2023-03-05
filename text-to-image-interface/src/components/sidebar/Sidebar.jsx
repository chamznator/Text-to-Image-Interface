import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
  TagIcon
} from "@mui/icons-material";
import { Users } from "../../dummyData";
import CottageIcon from '@mui/icons-material/Cottage';
import PostAddIcon from '@mui/icons-material/PostAdd';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <CottageIcon className="sidebarIcon" />
            <span className="sidebarListItemText">For You</span>
          </li>
         
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <PostAddIcon fontSize="large" className="sidebarIcon" />
            <span className="sidebarListItemText">Share</span>
          </li>
       
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />

        <div className="suggestedWrapper">
            <p data-e2e="suggest-accounts" class="tiktok-kkg08c-PTitle e4a681b1">Suggested accounts</p>
            <div className="tiktok-1mo2fkg-DivUserLinkContainer e797se20">

                <img className="sugImg"  src="assets/person/1.jpeg" alt="" />
                <a href="" className="sugName">
                    <div className="nameWrapper">
                        <h4 className="idTag">theweekend</h4>
                        <p className="nameTag">The weekend</p>
                    </div>
            
                </a>

                
            </div>
            <div className="tiktok-1mo2fkg-DivUserLinkContainer e797se20">

                <img className="sugImg"  src="assets/person/2.jpeg" alt="" />
                <a href="" className="sugName">
                    <div className="nameWrapper">
                        <h4 className="idTag">RyRen</h4>
                        <p className="nameTag">Ryan Renolds</p>
                    </div>

                </a>


                </div>
                <div className="tiktok-1mo2fkg-DivUserLinkContainer e797se20">

                <img className="sugImg"  src="assets/person/5.jpeg" alt="" />
                <a href="" className="sugName">
                    <div className="nameWrapper">
                        <h4 className="idTag">Van4Go</h4>
                        <p className="nameTag">John Smith</p>
                    </div>
            
                </a>

                
            </div>
            <div className="tiktok-1mo2fkg-DivUserLinkContainer e797se20">

                <img className="sugImg"  src="assets/person/8.jpeg" alt="" />
                <a href="" className="sugName">
                    <div className="nameWrapper">
                        <h4 className="idTag">OliviaArts</h4>
                        <p className="nameTag">Olivia James</p>
                    </div>
            
                </a>

                
            </div>
            <div className="tiktok-1mo2fkg-DivUserLinkContainer e797se20">

                      <img className="sugImg"  src="assets/person/9.jpeg" alt="" />
                      <a href="" className="sugName">
                          <div className="nameWrapper">
                              <h4 className="idTag">AlistaGames</h4>
                              <p className="nameTag">Alex Duncan</p>
                          </div>

                      </a>


</div>
        
        
        </div>



        <hr className="sidebarHr" />

        <div class="tiktok-jvyzjv-DivDiscoverContainer eikhr9j2">
            <p data-e2e="nav-discover-title" class="tiktok-pvpn9t-PDiscoverTitle eikhr9j3">Discover</p>
            <div className="trendingWrapper">
                <div class="tiktok-1avbtpl-DivDiscoverItemContainer eikhr9j7">
                    <a href=""><span class="tiktok-e841qv-PText eikhr9j12"># whenwomenwin</span>
                    </a>                          
                </div>      
                <div class="tiktok-1avbtpl-DivDiscoverItemContainer eikhr9j7">
                    <a href=""><span class="tiktok-e841qv-PText eikhr9j12"># blackhistory</span>
                    </a>                          
                </div>   
                <div class="tiktok-1avbtpl-DivDiscoverItemContainer eikhr9j7">
                    <a href=""><span class="tiktok-e841qv-PText eikhr9j12"># watermelon sugar high in the ksy;</span>
                    </a>                          
                </div>   
                <div class="tiktok-1avbtpl-DivDiscoverItemContainer eikhr9j7">
                    <a href=""><span class="tiktok-e841qv-PText eikhr9j12"># US election</span>
                    </a>                          
                </div>
                <div class="tiktok-1avbtpl-DivDiscoverItemContainer eikhr9j7">
                    <a href=""><span class="tiktok-e841qv-PText eikhr9j12"># bla bla bla </span>
                    </a>                          
                </div>
                <div class="tiktok-1avbtpl-DivDiscoverItemContainer eikhr9j7">
                    <a href=""><span class="tiktok-e841qv-PText eikhr9j12"># support ukrain AI arts program </span>
                    </a>                          
                </div>
                <div class="tiktok-1avbtpl-DivDiscoverItemContainer eikhr9j7">
                    <a href=""><span class="tiktok-e841qv-PText eikhr9j12"># bla bla bla </span>
                    </a>                          
                </div>
                <div class="tiktok-1avbtpl-DivDiscoverItemContainer eikhr9j7">
                    <a href=""><span class="tiktok-e841qv-PText eikhr9j12"># bla bla bla </span>
                    </a>                          
                </div>
            </div>
                
        </div>
    </div>
        
      
    </div>
  );
}