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

export function Userview() {
    const { user } = useAuth();
  const navigate = useNavigate();


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

//fin consulta de datos
const [pen, setpen] = useState([])
const mpen = async () => {

    const q1 = query(collection(db, "matriculas-pendientes"), where("user_id", "==", user.uid));
    const unsubscribe = onSnapshot(q1, (data1) => {
        const docs2 = [];
        data1.forEach((doc) => {
            console.log("pendientes", doc.data())
            docs2.push({ ...doc.data(), id: doc.id });

        });
        setpen(docs2)
    })
}
useEffect(() => {
    mpen();
}, [])


 {
 
  if(pendientes.length==0){
    navigate("/matricula")
  }
  if(pen.length==0){
    navigate("/ficha")
  }
  pendientes.map((blog) => {
    console.log(blog.nombre,"datoooooosss")
})

 };
 

  return (
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
                      <img src={user.photoURL} class="img-responsive foto-perfil-thumbnail" alt="Foto de perfil" data-id="22411" />
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

  );
}
