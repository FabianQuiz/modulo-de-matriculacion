
import React from "react";
import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import $ from 'jquery';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import {
    Navbar, NavItem, NavbarToggler, Collapse, NavLink, Nav, NavbarBrand
} from 'reactstrap';
export function Navbarpage() {
    const [isActive, setIsActive] = useState(false);


    const ShowAlertComponent = () => {
        if ($('#sliders').hasClass('active')) {
            $('#sliders').removeClass('active');
            $('#sliders-background').removeClass('active');
        } else {
            $('#sliders').addClass('active');
            $('#sliders-background').addClass('active');
        }
    };

    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
    };



    const { logout, user } = useAuth();

    console.log(user);
    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error(error.message);
        }
    };
    return (
        <>
            <div id="wrapper">

                <nav class="navbar-default navbar-side" role="navigation">
                    <div class="sidebar-collapse">
                        <ul class="nav" id="main-menu">
                            <li class="text-center user-image-back">
                                <img src="assets/img/tramites.png" style={{width: 250}} />
                            </li>
                            <li>
                                <a href="inicio.html"><i class="fa fa-desktop "></i>Inicio</a>
                            </li>
                            <li>
                                <a href="fichasocioeconomica.html"><i class="fa fa-table "></i>Ficha socioeconómica</a>
                            </li>
                            <li>
                                <a href="matricula.html"><i class="fa fa-edit "></i>Matrícula</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <Outlet></Outlet>

        </>

    );
}
