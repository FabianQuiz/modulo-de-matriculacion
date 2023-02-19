
import React from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function Login() {


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
                        <a href="inicio.html"><img src="images/Logo IE1.png" style={{ width: 150 }} /></a>
                    </div>
                  
                </div>
            </div>

            <div id="preloader">
                <i class="circle-preloader"></i>
            </div>



            <div class="breadcumb-area bg-img" style={{"background-image": "url(img/bg-img/breadcumb.jpg)"}}>
                <div class="bradcumbContent">
                    <h2>INGRESAR</h2>
                </div>
            </div>

            <section class="contact-area">


                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div data-wow-delay="600ms">
                                <div class="single-top-popular-course text-center">
                                    <span>--</span>
                                    <h3>--</h3>
                                    <p>Saludos cordiales estimado usuario, por favor seleccione uno de los métodos de autenticación disponibles:</p>
                                    <p><b>Administrativos:</b>  Este tipo de usuario es para administrativos de la Institución Educativa (Secretaria, Tesorería).</p>
                                    <p><b>Usuarios:</b> Este tipo de usuario es para estudiantes y representantes legales.</p>
                                    <p>Identifíquese usando su cuenta como:</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >



            <div class="academy-buttons-area mb-100">
                <a href="#" class="btn btn-primary px-4 py-3">Administrativos</a>
                <a href="#" class="btn academy-btn btn-3 m-2">Usuarios</a>
            </div>


            <footer >
                <div class="bottom-footer-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <p>
                                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> ProWeb - UNL | Todos los derechos reservados
                                </p>
                            </div>
                        </div>
                    </div>
                </div >
            </footer >

        </div >

    );
}
