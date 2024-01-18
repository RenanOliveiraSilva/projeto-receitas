import React from "react";
import "./navbar.css";

import logo from "../../images/logo-site.jpg";
import { FaHome } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { MdAddToPhotos } from "react-icons/md";
import { BiSolidHelpCircle } from "react-icons/bi";

function Navbar() {
    return(
        <>
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="Logo do site" />
                </div>
                <div className="content-nav">
                    
                    <div className="nav-item">
                        <a href="#">
                            <i><FaHome /></i>
                            <span>Home</span>

                        </a>
                    </div>
                    
                    <div className="nav-item">
                        <a href="#">
                            <i><MdMenuBook /></i>
                            <span>Receitas</span>

                        </a>
                    </div>

                    <div className="nav-item">
                        <a href="#">
                            <i><MdAddToPhotos /></i>
                            <span>Adicionar uma receita</span>

                        </a>
                    </div>                    
                    
                    <div className="nav-item">
                        <a href="#">
                            <i><BiSolidHelpCircle /></i>
                            <span>Help</span>

                        </a>
                    </div>

                </div>    
            </div>    
        </>
    )
}

export default Navbar;