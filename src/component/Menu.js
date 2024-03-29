import React from "react";

import music from "../static/music.png"
import game from "../static/game.png"
import settings from "../static/setting.png"

import "../css/Menu.css"
class Menu extends React.Component {
    render() {
        const { active,menuItems, songImgUrl} = this.props;
        return (

            <div className="menu-container">
                <div className="menu">
                    <ul>
                        {menuItems.map((element, index)=>{
                            return active===index?<li key={index} className="active">&nbsp;{element}</li>:<li key={index}>&nbsp;{element}</li>
                        })}
                    </ul>
                </div>
                <div className="leaf">
                    {active === 0 && <img className="leaf-img" src={songImgUrl} alt=""></img>}
                    {active === 1 && <img className="leaf-img" src={music} alt=""></img>}
                    {active === 2 && <img className="leaf-img" src={game} alt=""></img>}
                    {active === 3 && <div className="setting-leaf-img"><img className="leaf-img-settings" src={settings} alt=""></img></div>}
                </div>
            </div>
        )
    }
}

export default Menu;