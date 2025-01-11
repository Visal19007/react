import {Space} from"antd"
import { Outlet } from "react-router-dom"
import "../layout/NavBar.css"
export const NavBar=()=>{
        return (
            <div className="navbar">
                <div style={{width:"100%",height:"80px",backgroundColor:"#FF6501"}}>
                    
                        <div>logo</div>
                        <div>menu</div>
                    
                </div>
                
                    <Outlet/>
                
            </div>
        )
}