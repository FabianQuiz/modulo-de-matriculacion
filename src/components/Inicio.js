import React from "react";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import $ from 'jquery';
import { savematricula } from "../database";
import { uploadcomprobante } from "../firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { Userview } from "./Userview";
import { Adminview } from "./Adminview";

export function Inicio() {
  useEffect(() => {
    document.title = "Módulo de Gestión de Trámites"
  }, []);

  const { logout } = useAuth();
  const { user } = useAuth();
  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };
  const [urlimg, seturlimg] = useState(user.photoURL);
  console.log(urlimg);


  return (
    <div id="wrapper">
      <div class="navbar navbar-inverse navbar-fixed-top">
        <div class="adjust-nav">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a href="inicio.html"><img src="images/Logo IE1.png" style={{ width: 100 }} /></a><b>
              <font color="white"> l SISTEMA DE MATRICULACIÓN</font>
            </b>
          </div>
          <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">

              <li><a><img src={user.photoURL || "images/user.png"} style={{ width: 25 }} />
                <font color="white"> {user.displayName || user.email}</font>
              </a></li>
              <li><a onClick={handleLogout}><img src="images/cerrar1.png" style={{ width: 19 }} />
                <font color="white"> Cerrar Sesión</font>
              </a></li>

            </ul>
          </div>

        </div>
      </div>

      <nav class="navbar-default navbar-side" role="navigation">
        <div class="sidebar-collapse">
          <ul class="nav" id="main-menu">
            <li class="text-center user-image-back">
              <img src="assets/img/tramites.png" style={{ width: 250 }} />
            </li>
            <li>
              <a href="inicio.html"><i class="fa fa-desktop "></i>Inicio</a>
            </li>
            <li>
              <a href="fichasocioeconomica.html"><i class="fa fa-table "></i>Ficha socioeconómica</a>
            </li>
          </ul>
        </div>

      </nav>


      <div id="page-wrapper" >
        <div id="page-inner">
          <h2>Bienvenido</h2>


          {user.email === "anali.cazar@unl.edu.ec" ? <Adminview /> : <Userview />}

        </div>


      </div>


      <div class="page-footer">
          <div class="page-footer-inner"> 
         < div class="pull-right hidden-xs">
                        <b>Version</b> 1.0
                    </div>
                    <strong>Copyright &copy; 2022-2023 <a>ProWeb - UNL</a>.</strong> Todos los derechos reservados.
          </div>
          <div class="scroll-to-top">
            <i class="icon-arrow-up"></i>
          </div>
        </div>



    </div >
  );
}
