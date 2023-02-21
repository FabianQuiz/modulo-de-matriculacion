import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import $ from 'jquery';
import { savematricula } from "../database";
import { uploadcomprobante } from "../firebase";

import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
export function Estado() {
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Módulo de Gestión de Trámites"
    }, []);
 
    const { logout, user } = useAuth();

    console.log(user);
    const handleLogout = async () => {
      try {
        await logout();
      } catch (error) {
        console.error(error.message);
      }
    };
    //fin consulta de datos
 const [pendientes, setpendientes] = useState([])
 const mpendientes = async () => {

     const q1 = query(collection(db, "matriculas"), where("user_id", "==", user.uid));
     const unsubscribe = onSnapshot(q1, (data1) => {
         const docs2 = [];
         data1.forEach((doc) => {
             console.log("pendientes", doc.data())
             docs2.push({ ...doc.data(), id: doc.id });

         });
         setpendientes(docs2)
     })
 }
 useEffect(() => {
     mpendientes();
 }, [])
 {
  if (pendientes.length === 1) navigate("/inicio") ;
 };
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
                            <font color="white"> | SISTEMA DE MATRICULACIÓN</font>
                        </b>
                    </div>
                    <div class="navbar-collapse collapse">
                        <ul class="nav navbar-nav navbar-right">

                            <li><a><img src={user.photoURL}  style={{ width: 25 }} />
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
                        <li>
                            <a href="#"><i class="fa fa-edit "></i>Matrícula</a>
                        </li>

                    </ul>

                </div>

            </nav>


            <div id="page-wrapper">
                <div id="page-inner">


                    <div class="row">
                        <div class="col-md-15">
                            <div class="btn-info">
                                <div class="panel-heading text-center">
                                    <h2><b>Estado de la Matrícula</b></h2>
                                </div>
                            </div>

                            <hr />

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="panel panel-primary text-center no-boder bg-color-blue">
                                        <div class="panel-body">
                                            <i class="fa fa-desktop fa-2    x"></i>
                                            <h3>Procesando </h3>
                                        </div>
                                        <div class="panel-footer back-footer-blue">
                                            Pendiente
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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
