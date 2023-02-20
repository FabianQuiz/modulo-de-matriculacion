import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import $ from 'jquery';
import { savematricula } from "../database";
import { uploadcomprobante } from "../firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export function Inicio() {
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
  const [urlimg, seturlimg] = useState(user.photoURL);
  console.log(urlimg);


  //fin consulta de datos
 const [pendientes, setpendientes] = useState([])
 const mpendientes = async () => {

     const q1 = query(collection(db, "matriculas-pendientes"), where("user_id", "==", user.uid));
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
 
  if(pendientes.length==0){
    navigate("/matricula")
  }
  if(pendientes.length>=1){
    navigate("/estado-matricula")
  }
  pendientes.map((blog) => {
    console.log(blog.nombre,"datoooooosss")
})

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
          <div class="col-md-12">
            <div class="profile-sidebar">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title h5">Datos del usuario:</h5>
                  <div class="profile-userpic">
                    <a href="javascript:void(0);" class="foto-perfil-actualizar-modal" data-id="22411">
                      <img src={urlimg} class="img-responsive foto-perfil-thumbnail" alt="Foto de perfil" data-id="22411" />
                    </a>
                  </div>
                  <div class="profile-usertitle">
                    <div class="profile-usertitle-name">
                      <span class="text-danger">{user.email} <i class="fa fa-close"></i></span>
                    </div>
                    <div class="profile-usertitle-job">
                      {user.displayName || user.email}
                    </div>
                  </div>
                  <ul class="list-group list-group-unbordered">
                    <li class="list-group-item">
                      <b>Activo</b> <a class="pull-right fa fa-check"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="profile-sidebar1">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title h5">Información personal:</h5>

                  <h4>Curso: </h4>
                  <h4 >Estado de matricula: </h4>
                  <a class="btn btn-primary pull-right" href="/core/persona/detalle/114244">
                    <i class="fa fa-arrow-circle-right"></i> Ir a perfil
                  </a>
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
