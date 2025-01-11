import "../layout/NavBar.css"
import "../home/homepage.css"
import {Button, Drawer, Menu, Space} from "antd"
import logo from "../assets/img/scsvr.png"
import cafepic from"../assets/img/cafe pic.png"
import { useState } from "react"
import { IoMenuOutline } from "react-icons/io5";
export const Homepage=()=>{
     const [openMenu,setOpenMenu]=useState(false);
    return(
    <div >
            <section style={{backgroundColor:"#FF6501"}}>
                <div className="navbar" style={{padding:"4px"}}>
                    <div className="logo" style={{marginLeft:"50px"}}>
                        <img src={logo} width={100} alt="" />
                    </div>
                    <div style={{width:"50%"}}>
                        <div style={{width:"50px",marginRight:30,padding:"4px 4px 4px 4px",float:"right"}} className="menuIcon">

                            <IoMenuOutline style={{fontSize:38,backgroundColor:"black",borderRadius:"10px 5px",color:"white"}}
                            onClick={()=>{
                                setOpenMenu(true)
                            }}
                            />
                        </div>
                        <span className="menubar">
                            <AppMenu/>
                        </span>
                            
                            <Drawer
                            className="drawer"
                            open={openMenu} 
                            placement="left"
                            width={200}
                            onClose={()=>{
                                setOpenMenu(false)
                            }}
                            closable={false} bodyStyle={{backgroundColor:"darkorange"}}>
                                <AppMenu isInline />
                            </Drawer>
                        
                    </div>
                </div>
                <div className="bhome" >
                            <div className="bleft" >
                                <div><h1 style={{fontWeight:"bold"}}>Best Coffe</h1></div>
                                <div style={{fontSize:"20px"}}><p>Make your day great with our <br /> specail coffee!</p></div>
                                <Space style={{marginTop:"30px"}}>
                                    <Button type="primary" shape="round" style={{width:"100px",height:"40px",backgroundColor:"#6B0000"}}><a>Order Now</a></Button>
                                    <Button type="primary" shape="round" style={{width:"100px",height:"40px",backgroundColor:"white",color:"black"}}>Contact</Button>
                                </Space>
                            </div>
                            <div className="b-right">
                                <img src={cafepic} alt="cafe"/>
                            </div>
                </div>

            </section>
            
            
    </div>
              
                    
                
        
        
    )
}
function AppMenu({isInline=false}){
   
    return (
        <Menu 
                            
                            className=""
                            style={{backgroundColor:isInline?"darkorange":"#FF6501",border:"none",height:"100%",alignItems:"center",fontSize:"20px",fontWeight:"bold" }}
                            mode={isInline?"inline":"horizontal"}
                            
                            items={[
                                {
                                    label:"Home",
                                    key:"home"
                                    
                                    
                                },
                                {
                                    label:"About US",
                                    key:"about us"
                                },
                                {
                                    label:"Menu",
                                    key:"menu"
                                },
                                 {
                                    label:"Contact",
                                    key:"contact"
                                },
                            ]}>

        </Menu>
    )
}