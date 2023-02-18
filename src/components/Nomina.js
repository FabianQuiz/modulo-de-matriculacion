import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert } from "./Alert";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import $ from 'jquery';

const ocultamenu = () => {
    $('#sliders').removeClass('active');
    $('#sliders-background').removeClass('active');
};

export function Nomina() {
    useEffect(() => {
        document.title = "Módulo de Gestión de Trámites"
    }, []);
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const { login, loginWithGoogle, loginWithFacebook, resetPassword } = useAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await login(user.email, user.password);
            navigate("/calendar");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleChange = ({ target: { value, name } }) =>
        setUser({ ...user, [name]: value });

    const handleGoogleSignin = async () => {
        try {
            await loginWithGoogle();
            navigate("/calendar");
        } catch (error) {
            setError(error.message);
        }
    };
    const handleFacebookSignin = async () => {
        try {
            await loginWithFacebook();
            navigate("/calendar");
        } catch (error) {
            setError(error.message);
        }
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

                            <li><a href="inicio.html"><img src="assets/img/Foto perfil.png" style={{ width: 25 }} />
                                <font color="white"> Fabián Andrés Quizhpe Quizhpe</font>
                            </a></li>
                            <li><a href="ingresar.html"><img src="images/cerrar1.png" style={{ width: 19 }} />
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
                            <a href="#"><i class="fa fa-edit "></i>Estudiantes a legalizar<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a href="2EGB.html"><i class="fa fa-desktop "></i> 2 EGB </a>
                                </li>

                                <li>
                                    <a href="3EGB.html"><i class="fa fa-desktop "></i> 3 EGB </a>
                                </li>
                                <li>
                                    <a href="4EGB.html"><i class="fa fa-desktop "></i> 4 EGB </a>
                                </li>

                                <li>
                                    <a href="5EGB.html"><i class="fa fa-desktop "></i> 5 EGB </a>

                                </li>
                                <li>
                                    <a href="6EGB.html"><i class="fa fa-desktop "></i> 6 EGB </a>
                                </li>
                                <li>
                                    <a href="7EGB.html"><i class="fa fa-desktop "></i> 7 EGB </a>
                                </li>
                                <li>
                                    <a href="8EGB.html"><i class="fa fa-desktop "></i> 8 EGB </a>
                                </li>
                                <li>
                                    <a href="9EGB.html"><i class="fa fa-desktop "></i> 9 EGB </a>
                                </li>
                                <li>
                                    <a href="10EGB.html"><i class="fa fa-desktop "></i> 10 EGB </a>
                                </li>
                                <li>
                                    <a href="1BGU.html"><i class="fa fa-desktop "></i> 1 BGU </a>
                                </li>
                                <li>
                                    <a href="2BGU.html"><i class="fa fa-desktop "></i> 2 BGU </a>
                                </li>
                                <li>
                                    <a href="3BGU.html"><i class="fa fa-desktop "></i> 3 BGU </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-edit "></i>Estudiantes matriculados<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a href="2EGBM.html"><i class="fa fa-desktop "></i> 2 EGB </a>
                                </li>

                                <li>
                                    <a href="3EGBM.html"><i class="fa fa-desktop "></i> 3 EGB </a>
                                </li>
                                <li>
                                    <a href="4EGBM.html"><i class="fa fa-desktop "></i> 4 EGB </a>
                                </li>

                                <li>
                                    <a href="5EGBM.html"><i class="fa fa-desktop "></i> 5 EGB </a>

                                </li>
                                <li>
                                    <a href="6EGBM.html"><i class="fa fa-desktop "></i> 6 EGB </a>
                                </li>
                                <li>
                                    <a href="7EGBM.html"><i class="fa fa-desktop "></i> 7 EGB </a>
                                </li>
                                <li>
                                    <a href="8EGBM.html"><i class="fa fa-desktop "></i> 8 EGB </a>
                                </li>
                                <li>
                                    <a href="9EGBM.html"><i class="fa fa-desktop "></i> 9 EGB </a>
                                </li>
                                <li>
                                    <a href="10EGBM.html"><i class="fa fa-desktop "></i> 10 EGB </a>
                                </li>
                                <li>
                                    <a href="1BGUM.html"><i class="fa fa-desktop "></i> 1 BGU </a>
                                </li>
                                <li>
                                    <a href="2BGUM.html"><i class="fa fa-desktop "></i> 2 BGU </a>
                                </li>
                                <li>
                                    <a href="3BGUM.html"><i class="fa fa-desktop "></i> 3 BGU </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>


            <div id="page-wrapper">
                <div id="page-inner">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="btn-info">
                                <div class="panel-heading">
                                    <h2><b>Matrícula</b></h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section class="content">
                        <div class="box box-default">
                            <div class="box-body">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="box-header with-border">
                                            <h3 class="box-title">
                                                <h1 style={{ "color": "#000080" }}>1. Detalle de matrícula</h1>
                                            </h3>
                                        </div>
                                        <div class="form-group">
                                            <label>Nombre de representante</label>
                                            <input type="email" class="form-control" id="valor" placeholder="Nombre del representante" />
                                        </div>
                                        <div class="form-group">
                                            <label>Valor de matrícula</label>
                                            <input type="email" class="form-control" id="valor" placeholder="Valor de matrícula" />
                                        </div>
                                        <div class="form-group">
                                            <label>Año a cursar</label>
                                            <select id="añoacursar" class="form-control select2" style={{ "width": "100%" }}>
                                                <option selected="selected">seleccionar</option>
                                                <option>1 EGB</option>
                                                <option>2 EGB</option>
                                                <option>3 EGB</option>
                                                <option>4 EGB</option>
                                                <option>5 EGB</option>
                                                <option>6 EGB</option>
                                                <option>7 EGB</option>
                                                <option>8 EGB</option>
                                                <option>9 EGB</option>
                                                <option>10 EGB</option>
                                                <option>1 BGU</option>
                                                <option>2 BGU</option>
                                                <option>3 BGU</option>
                                            </select>
                                        </div>
                                        <div class="col-md-20">
                                            <div class="form-group">
                                                <label>Fecha de matrícula:</label>
                                                <div class="input-group">
                                                    <div class="input-group-addon">
                                                        <i class="fa fa-calendar"></i>
                                                    </div>
                                                    <input id="fechamatricula" type="date" class="form-control"
                                                        data-inputmask="'alias': 'dd/mm/yyyy'" data-mask />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="box box-danger">
                                            <div class="box-header">
                                                <h3 class="box-title">
                                                    <h1 style={{ "color": "#000080" }}>2. Comprobante de pago</h1>
                                                </h3>
                                            </div>
                                        </div>
                                        <div class="box-body">
                                            <div class="form-group">
                                                <label>Institución Financiera</label>
                                                <select id="institucionfinanciera" class="form-control select2" style={{ "width": "100%" }}>
                                                    <option selected="selected">seleccione</option>
                                                    <option>Banco de Loja</option>
                                                    <option>Western Union</option>
                                                </select>
                                            </div>

                                            <div class="form-group">
                                                <label>Tipo de pago</label>
                                                <select id="tipodepago" class="form-control select2" style={{ "width": "100%" }}>
                                                    <option selected="selected">seleccione</option>
                                                    <option>Depósito</option>
                                                    <option>Transferencia</option>
                                                </select>
                                            </div>

                                            <div class="form-group">
                                                <label>Número del comprobante</label>

                                                <div class="input-group">
                                                    <div class="input-group-addon">
                                                        <i class="fa fa-laptop"></i>
                                                    </div>
                                                    <input id="numerodecomprobante" type="email" class="form-control"
                                                        placeholder="Número de comprobante" />
                                                </div>

                                            </div>


                                            <div class="form-group">
                                                <label>Fecha del depósito:</label>
                                                <div class="input-group">
                                                    <div class="input-group-addon">
                                                        <i class="fa fa-calendar"></i>
                                                    </div>
                                                    <input id="fechadeposito" type="date" class="form-control"
                                                        data-inputmask="'alias': 'mm/dd/yyyy'" data-mask />
                                                </div>

                                            </div>

                                            <div class="form-group">
                                                <label for="exampleInputFile">Subir el comprobante de pago</label>
                                                <input id="comprobante" type="file" />


                                            </div>
                                        </div>
                                    </div>

                                    <div class="row no-print">
                                        <div class="col-xs-12">
                                            <button id="enviar" type="button" class="btn btn-success" style={{"margin-left": "50%",
  "transform": "translateX(-50%)"}}><i
                                                class="fa fa-credit-card"></i> ENVIAR
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>



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

                <footer class="main-footer">
                    <div class="pull-right hidden-xs">
                        <b>Version</b> 1.0
                    </div>
                    <strong>Copyright &copy; 2022-2023 <a>ProWeb - UNL</a>.</strong> Todos los derechos reservados.
                </footer>
            </div>
        </div >
    );
}
