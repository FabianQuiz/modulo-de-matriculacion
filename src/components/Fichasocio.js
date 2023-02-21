import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import $ from 'jquery';
import { ficha } from "../database";
import { uploadcomprobante } from "../firebase";

import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
export function Ficha() {
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Módulo de Gestión de Trámites"
    }, []);

    const { logout, user } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error(error.message);
        }
    };

    const [name1, setname1] = useState("");
    const [ci, setci] = useState("");
    const [dir, setdir] = useState("");
    const [vivienda, setvivienda] = useState("");
    const [tipovi, settipovi] = useState("");
    const [servicios, setservicios] = useState("");
    const [infra, setinfra] = useState("");
    const [añoacursar, setañoacursar] = useState("");
    const [añoapro, setañoapro] = useState("");
    const [añoper, setañoper] = useState("");
    const [matfav, setmatfav] = useState("");
    const [matdif, setmatdif] = useState("");
    const [problemas, setproblemas] = useState("");
    const [alergias, setalergias] = useState("");
    const [medicamentos, setmedicamentos] = useState("");
    const [dosis, setdosis] = useState("");
    const [discapacidad, setdiscapacidad] = useState("");
    const [name2, setname2] = useState("");
    const [parentesco, setparentesco] = useState("");
    const [ocupacion, setocupacion] = useState("");
    const [contacto, setcontacto] = useState("");

    const guradar = async () => {
        try {
            const datos = {
                user_id: user.uid,
                nombre_estudiante: name1,
                nombre_representante: name2,
                cedula_de_identidad: ci,
                parentesco:parentesco,
                ocupacion:ocupacion,
                contacto:contacto,
                direccion: dir,
                vivienda: vivienda,
                tipo_vivienda: tipovi,
                servicios_basicos: servicios,
                infraestrucctura: infra,
                añoacursar: añoacursar,
                año_aprobado: añoapro,
                perdida_de_año: añoper,
                materia_favorita: matfav,
                materia_dificultad: matdif,
                problemas_de_aprendizaje: problemas,
                alergias: alergias,
                medicamentos:medicamentos,
                dosis:dosis,
                discapacidad:discapacidad
            }
            console.log(datos)

            await ficha(datos);
        } catch (error) {
            console.log(error.message);
        }
    };

 //fin consulta de datos
 const [pendientes, setpendientes] = useState([])
 const mpendientes = async () => {

     const q1 = query(collection(db, "Fichas-socioeconomicas"), where("user_id", "==", user.uid));
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
  if (pendientes.length === 1) navigate("/estado-matricula") ;
 };
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
 if (pen.length === 0) navigate("/matricula") ;
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
                                    <form role="form" id="economica" >
                                        <div class="col-md-6">
                                            <div class="box box-primary">
                                                <div class="box-header with-border">
                                                    <h3 id="titulo1" class="box-title">
                                                        <font COLOR="navy">1. Datos de identificación</font>
                                                    </h3>
                                                </div>
                                                <div class="box-body">
                                                    <div class="form-group">
                                                        <label for="exampleInputEmail1">Nombres y Apellidos</label>
                                                        <input type="text" class="form-control" id="nombres"
                                                            placeholder={user.displayName || user.email}  onChange={e => setname1(e.target.value)} required />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleInputPassword1">Número de cédula</label>
                                                        <input type="text" class="form-control" id="cedula" placeholder="1105668493" onChange={e => setci(e.target.value)} required />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleInputPassword1">Dirección</label>
                                                        <input type="text" class="form-control" id="direccion" placeholder="Sector Los Eucaliptos" onChange={e => setdir(e.target.value)} required />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="box box-success">
                                                <div class="box-header with-border">
                                                    <h3 class="box-title">
                                                        <font COLOR="navy">2. Datos del representante legal</font>
                                                    </h3>
                                                </div>
                                                <div class="box-body">
                                                    <div class="form-group">
                                                        <label for="exampleInputEmail1">Nombres y Apellidos</label>
                                                        <input id="representante" type="text" class="form-control" placeholder="Amable Asunción Quizhpe" onChange={e => setname2(e.target.value)} required />
                                                    </div>

                                                    <div class="form-group">
                                                        <label>Parentesco</label>
                                                        <select id="parentesco" class="form-control select2" style={{ "width": "100%;" }} onChange={e => setparentesco(e.target.value)} required >
                                                            <option selected="selected">Seleccionar</option>
                                                            <option>Madre</option>
                                                            <option>Padre</option>
                                                            <option>Hermano/a</option>
                                                            <option>Tío/a</option>
                                                            <option>Abuelo/a</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleInputPassword1">Ocupación</label>
                                                        <input id="ocupacion" type="text" class="form-control" placeholder="Jubilado" onChange={e => setocupacion(e.target.value)} required />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleInputPassword1">Contacto</label>
                                                        <input id="contacto" type="text" class="form-control" placeholder="0983871171" onChange={e => setcontacto(e.target.value)} required />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="box box-danger">
                                                <div class="box-header with-border">
                                                    <h3 class="box-title">
                                                        <font COLOR="navy">3. Datos de la vivienda</font>
                                                    </h3>
                                                </div>
                                                <div class="box-body">


                                                    <div class="form-group">
                                                        <label>Vivienda</label>
                                                        <select id="vivienda" class="form-control select2" style={{ "width": "100%;" }} onChange={e => setvivienda(e.target.value)} required >
                                                            <option selected="selected">Seleccionar</option>
                                                            <option>Propia</option>
                                                            <option>Arrendada</option>
                                                            <option>Prestada</option>
                                                            <option>Anticresis</option>
                                                        </select>
                                                    </div>

                                                    <div class="form-group">
                                                        <label>Tipo de vivienda</label>
                                                        <select id="tipodevivienda" class="form-control select2" style={{ "width": "100%;" }} onChange={e => settipovi(e.target.value)} required >
                                                            <option selected="selected">Seleccionar</option>
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
                                                        <input id="serviciosbasicos" type="text" class="form-control" placeholder="Luz, Agua, Alcantarillado" onChange={e => setservicios(e.target.value)} required />
                                                    </div>

                                                    <div class="form-group">
                                                        <label>Infraestructura</label>
                                                        <select id="infraestructura" class="form-control select2" style={{ "width": "100%;" }} onChange={e => setinfra(e.target.value)} required >
                                                            <option selected="selected">Seleccionar</option>
                                                            <option>Concreto/Ladrillo</option>
                                                            <option>Adobe</option>
                                                            <option>Madera</option>
                                                        </select>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-md-6">

                                            <div class="box box-info">
                                                <div class="box-header with-border">
                                                    <h3 class="box-title">
                                                        <font COLOR="navy">4. Datos de salud</font>
                                                    </h3>
                                                </div>
                                                <div class="box-body">
                                                    <div class="form-group">
                                                        <label>Alergias</label>
                                                        <select id="alergias" class="form-control select2" style={{ "width": "100%;" }} onChange={e => setalergias(e.target.value)} required >
                                                            <option selected="selected">Seleccionar</option>
                                                            <option>Si</option>
                                                            <option>No</option>
                                                        </select>
                                                    </div>

                                                    <div class="form-group">
                                                        <label>Medicamentos</label>
                                                        <select id="medicamentos" class="form-control select2" style={{ "width": "100%;" }} onChange={e => setmedicamentos(e.target.value)} required >
                                                            <option selected="selected">Seleccionar</option>
                                                            <option>Si</option>
                                                            <option>No</option>
                                                        </select>
                                                    </div>

                                                    <div class="form-group">
                                                        <label>Dosis de COVID</label>
                                                        <select id="dosis" class="form-control select2" style={{ "width": "100%;" }} onChange={e => setdosis(e.target.value)} required >
                                                            <option selected="selected">Seleccionar</option>
                                                            <option>0</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                        </select>
                                                    </div>

                                                    <div class="form-group">
                                                        <label>Tiene alguna discapacidad</label>
                                                        <select id="NEE" class="form-control select2" style={{ "width": "100%;" }} onChange={e => setdiscapacidad(e.target.value)} required >
                                                            <option selected="selected">Seleccionar</option>
                                                            <option>Si</option>
                                                            <option>No</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="box box-warning">
                                                <div class="box-header with-border">
                                                    <h3 class="box-title">
                                                        <font COLOR="navy">5. Datos académicos</font>
                                                    </h3>
                                                </div>
                                                <div class="box-body">
                                                    <div class="form-group">
                                                        <label>Año a cursar</label>
                                                        <select id="Añoacursar" class="form-control select2" style={{ "width": "100%;" }} onChange={e => setañoacursar(e.target.value)} required >
                                                            <option selected="selected">Seleccionar</option>
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
                                                        <select id="Añoaprobado" class="form-control select2" style={{ "width": "100%;" }} onChange={e => setañoapro(e.target.value)} required >
                                                            <option selected="selected">Seleccionar</option>
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
                                                        <select id="Perdidadeaño" class="form-control select2" style={{ "width": "100%;" }} onChange={e => setañoper(e.target.value)} required >
                                                            <option selected="selected">Seleccionar</option>
                                                            <option>0</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <label>Materia favorita</label>
                                                        <select id="materiafavorita" class="form-control select2" style={{ "width": "100%;" }} required onChange={e => setmatfav(e.target.value)}>
                                                            <option selected="selected">Seleccionar</option>
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
                                                        <select id="dificultad" class="form-control select2" style={{ "width": "100%;" }} required onChange={e => setmatdif(e.target.value)}>
                                                            <option selected="selected">Seleccionar</option>
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
                                                        <select id="problemasdeaprendizaje" class="form-control select2" style={{ "width": "100%;" }} required onChange={e => setproblemas(e.target.value)}>
                                                            <option selected="selected">Seleccionar</option>
                                                            <option>Si</option>
                                                            <option>No</option>
                                                        </select>
                                                    </div>
                                                    <div lass="form-group">
                                                        <a target="_blank" class="btn btn-default"><i class="fa fa-print"></i> Imprimir</a>
                                                        <button type="button" class="btn btn-success " onClick={guradar}><i class="fa fa-credit-card"></i>  GUARDAR</button>
                                                        <button type="button" class="btn btn-primary " >
                                                            <i class="fa fa-download"></i> Generar PDF
                                                        </button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
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
