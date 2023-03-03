import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/material";




export default function Topbar() {
  

  
  
  return (
    <div className="topbarContainer">
        <div className="topbarContent">
            <div className="app-header-left bold">
            <a class="app-header-item-desktop selected">IMAGEN·</a>
            <a class="app-header-item-desktop" href="/history">History</a>
            <a class="app-header-item-desktop" href="/collections">Collections</a>
            </div>
            <div class="app-header-right">
                <div class="user-dropdown" aria-haspopup="true" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M 2.5 6.5 C 3.328 6.5 4 7.172 4 8 C 4 8.828 3.328 9.5 2.5 9.5 C 1.672 9.5 1 8.828 1 8 C 1 7.172 1.672 6.5 2.5 6.5 Z M 8 6.5 C 8.828 6.5 9.5 7.172 9.5 8 C 9.5 8.828 8.828 9.5 8 9.5 C 7.172 9.5 6.5 8.828 6.5 8 C 6.5 7.172 7.172 6.5 8 6.5 Z M 13.5 6.5 C 14.328 6.5 15 7.172 15 8 C 15 8.828 14.328 9.5 13.5 9.5 C 12.672 9.5 12 8.828 12 8 C 12 7.172 12.672 6.5 13.5 6.5 Z" fill="currentColor"></path></svg>
                    <div class="avatar avatar-small">
                        <div class="avatar-letter">H</div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
   
  );
}