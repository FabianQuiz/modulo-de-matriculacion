import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import $ from 'jquery';
import { savematricula } from "../database";
import { uploadcomprobante } from "../firebase";
export function Ficha() {
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

            <div id="page-wrapper">
                <div id="page-inner">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="btn-info">
                                <div class="panel-heading">
                                    <h2><b>Ficha socioeconómica</b></h2>
                                </div>
                            </div>

                            <section class="content">
                                <div class="row">

                                    <div class="col-md-6">
                                        <div class="box box-primary">
                                            <div class="box-header with-border">
                                                <h3 id="titulo1" class="box-title">
                                                    <font COLOR="navy">1. Datos de identificación</font>
                                                </h3>
                                            </div>

                                            <form role="form" id="economica">
                                                <div class="box-body">
                                                    <div class="form-group">
                                                        <label for="exampleInputEmail1">Nombres y Apellidos</label>
                                                        <input type="text" class="form-control" id="nombres"
                                                            placeholder="Fabián Andrés Quizhpe Quizhpe" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleInputPassword1">Número de cédula</label>
                                                        <input type="text" class="form-control" id="cedula" placeholder="1105668493" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleInputPassword1">Dirección</label>
                                                        <input type="text" class="form-control" id="direccion" placeholder="Sector Los Eucaliptos" />
                                                    </div>
                                                    <div class="form-group">

                                                    </div>
                                                    <div class="checkbox">
                                                        <label>

                                                        </label>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="box box-success">
                                            <div class="box-header with-border">
                                                <h3 class="box-title">
                                                    <font COLOR="navy">2. Datos del representante legal</font>
                                                </h3>
                                            </div>
                                            <form role="form">
                                                <div class="box-body">
                                                    <div class="form-group">
                                                        <label for="exampleInputEmail1">Nombres y Apellidos</label>
                                                        <input id="representante" type="text" class="form-control" placeholder="Amable Asunción Quizhpe" />
                                                    </div>

                                                    <div class="form-group">
                                                        <label>Parentesco</label>
                                                        <select id="parentesco" class="form-control select2" style={{ "width": "100%;" }}>
                                                            <option selected="selected">Padre</option>
                                                            <option>Madre</option>
                                                            <option>Padre</option>
                                                            <option>Hermano/a</option>
                                                            <option>Tío/a</option>
                                                            <option>Abuelo/a</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleInputPassword1">Ocupación</label>
                                                        <input id="ocupacion" type="text" class="form-control" placeholder="Jubilado" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleInputPassword1">Contacto</label>
                                                        <input id="contacto" type="text" class="form-control" placeholder="0983871171" />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="box box-danger">
                                            <div class="box-header with-border">
                                                <h3 class="box-title">
                                                    <font COLOR="navy">3. Datos de la vivienda</font>
                                                </h3>
                                            </div>
                                            <form role="form">
                                                <div class="box-body">


                                                    <div class="form-group">
                                                        <label>Vivienda</label>
                                                        <select id="vivienda" class="form-control select2" style={{ "width": "100%;" }}>
                                                            <option selected="selected">Propia</option>
                                                            <option>Propia</option>
                                                            <option>Arrendada</option>
                                                            <option>Prestada</option>
                                                            <option>Anticresis</option>
                                                        </select>
                                                    </div>

                                                    <div class="form-group">
                                                        <label>Tipo de vivienda</label>
                                                        <select id="tipodevivienda" class="form-control select2" style={{ "width": "100%;" }}>
                                                            <option selected="selected">Casa/Villa</option>
                                                            <option>Casa/Villa</option>
                                                            <option>Departamento</option>
                                                            <option>Cuarto</option>
                                                            <option>Mediagua</option>
                                                            <option>Rancho</option>
                                                            <option>Covacha</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleInputPassword1">Servicios basicos</label>
                                                        <input id="serviciosbasicos" type="text" class="form-control" placeholder="Luz, Agua, Alcantarillado" />
                                                    </div>

                                                    <div class="form-group">
                                                        <label>Infraestructura</label>
                                                        <select id="infraestructura" class="form-control select2" style={{ "width": "100%;" }}>
                                                            <option selected="selected">Concreto/Ladrillo</option>
                                                            <option>Concreto/Ladrillo</option>
                                                            <option>Adobe</option>
                                                            <option>Madera</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                    <div class="col-md-6">

                                        <div class="box box-info">
                                            <div class="box-header with-border">
                                                <h3 class="box-title">
                                                    <font COLOR="navy">4. Datos de salud</font>
                                                </h3>
                                            </div>
                                            <form role="form">
                                                <div class="box-body">
                                                    <div class="form-group">
                                                        <label>Alergias</label>
                                                        <select id="alergias" class="form-control select2" style={{ "width": "100%;" }}>
                                                            <option selected="selected">No</option>
                                                            <option>Si</option>
                                                            <option>No</option>
                                                        </select>
                                                    </div>


                                                    <div class="form-group">
                                                        <label>Medicamentos</label>
                                                        <select id="medicamentos" class="form-control select2" style={{ "width": "100%;" }}>
                                                            <option selected="selected">No</option>
                                                            <option>Si</option>
                                                            <option>No</option>
                                                        </select>
                                                    </div>


                                                    <div class="form-group">
                                                        <label>Dosis de COVID</label>
                                                        <select id="dosis" class="form-control select2" style={{ "width": "100%;" }}>
                                                            <option selected="selected">3</option>
                                                            <option>0</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                        </select>
                                                    </div>

                                                    <div class="form-group">
                                                        <label>Tiene alguna discapacidad</label>
                                                        <select id="NEE" class="form-control select2" style={{ "width": "100%;" }}>
                                                            <option selected="selected">No</option>
                                                            <option>Si</option>
                                                            <option>No</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="box box-warning">
                                            <div class="box-header with-border">
                                                <h3 class="box-title">
                                                    <font COLOR="navy">5. Datos académicos</font>
                                                </h3>
                                            </div>
                                            <form role="form">
                                                <div class="box-body">


                                                    <div class="form-group">
                                                        <label>Año a cursar</label>
                                                        <select id="Añoacursar" class="form-control select2" style={{ "width": "100%;" }}>
                                                            <option selected="selected">6 EGB</option>
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

                                                    <div class="form-group">
                                                        <label>Año aprobado</label>
                                                        <select id="Añoaprobado" class="form-control select2" style={{ "width": "100%;" }}>
                                                            <option selected="selected">5 EGB</option>
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


                                                    <div class="form-group">
                                                        <label>Perdida de año</label>
                                                        <select id="Perdidadeaño" class="form-control select2" style={{ "width": "100%;" }}>
                                                            <option selected="selected">0</option>
                                                            <option>0</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                        </select>
                                                    </div>

                                                    <div class="form-group">
                                                        <label>Materia favorita</label>
                                                        <select id="materiafavorita" class="form-control select2" style={{ "width": "100%;" }}>
                                                            <option selected="selected">Ciencias Naturales</option>
                                                            <option>Matematicas</option>
                                                            <option>Ciencias Naturales</option>
                                                            <option>Estudios Sociales</option>
                                                            <option>Lengua y Literatura</option>
                                                            <option>Física</option>
                                                            <option>Química</option>
                                                            <option>Biología</option>
                                                            <option>Computación</option>
                                                            <option>Religión</option>
                                                            <option>Educación Artística</option>
                                                            <option>Educación Física</option>
                                                        </select>
                                                    </div>

                                                    <div class="form-group">
                                                        <label>Materia que se le dificulta</label>
                                                        <select id="dificultad" class="form-control select2" style={{ "width": "100%;" }}>
                                                            <option selected="selected">Matemáticas</option>
                                                            <option>Matemáticas</option>
                                                            <option>Ciencias Naturales</option>
                                                            <option>Estudios Sociales</option>
                                                            <option>Lengua y Literatura</option>
                                                            <option>Física</option>
                                                            <option>Química</option>
                                                            <option>Biología</option>
                                                            <option>Computación</option>
                                                            <option>Religión</option>
                                                            <option>Educación Artística</option>
                                                            <option>Educación Física</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <label>Problemas de aprendizaje</label>
                                                        <select id="problemasdeaprendizaje" class="form-control select2" style={{ "width": "100%;" }}>
                                                            <option selected="selected">No</option>
                                                            <option>Si</option>
                                                            <option>No</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                    <div class="col-md-6 h">
                                        <a target="_blank" class="btn btn-default"><i class="fa fa-print"></i> Imprimir</a>
                                        <button id="save" type="submit" class="btn btn-success "><i class="fa fa-credit-card"></i>  GUARDAR</button>
                                        <button type="button" class="btn btn-primary " >
                                            <i class="fa fa-download"></i> Generar PDF
                                        </button>

                                    </div>
                                </div>

                            </section>
                        </div>

                    </div>


                </div >

            </div >
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
