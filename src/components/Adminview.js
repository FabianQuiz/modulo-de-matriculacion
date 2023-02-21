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
export function Adminview() {

    //fin consulta de datos
    const [pen, setpen] = useState([])
    const mpen = async () => {

        const q1 = query(collection(db, "matriculas-pendientes"));
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
    const [urlimg, seturlimg] = useState("");
    const cargarimg = async (id) => {
        console.log(id);
        seturlimg(id);
        window.$('#myModal').modal('show')
     }
    return (
        <div id="page-wrapper" >
            <div id="page-inner">
                <h2>Bienvenido</h2>
                <div class="col-md-12">
                    <div class="btn-info">
                        <div class="panel-heading">
                            <h2><b>Reporte de estudiantes a legalizar matrícula</b></h2>
                        </div>
                    </div>
                    <table class="table table-condensed">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre y Apellido</th>
                                <th>Ficha socioeconómica</th>
                                <th>Comprobante de pago</th>
                                <th>Curso a matricular</th>
                                <th colSpan={2}>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                pen.map((blog) => {
                                    return (
                                        <tr>
                                            <td>1</td>
                                            <td>{blog.nombre}</td>
                                            <td>
                                                <div class="row no-print">
                                                    <div class="col-xs-12">
                                                        <button id="ver" type="button"> Visualizar </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="row no-print">
                                                    <div class="col-xs-12">
                                                        <button id="ver" type="button"  onClick={(e) => { e.stopPropagation(); cargarimg(blog.comprobanteimg); }}> Visualizar
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="row no-print">
                                                    <div class="col-xs-12">
                                                        {blog.añoacursar}
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="row no-print">
                                                    <div class="col-xs-12">
                                                        <button id="ver" type="button" class="btn-success pull-right">Legalizar
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="row no-print">
                                                    <div class="col-xs-12">
                                                        <button id="ver" type="button" class="btn-danger">Rechazar
                                                        </button>
                                                    </div>
                                                </div>
                                            </td >
                                        </tr>

                                    )
                                })
                            }

                        </tbody >
                    </table >



                </div >
            </div >
           
            <div class="modal fade" id="myModal" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Comprobante de pago</h4>
                        </div>
                        <div class="modal-body">
                            <img src={urlimg}></img>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
}
