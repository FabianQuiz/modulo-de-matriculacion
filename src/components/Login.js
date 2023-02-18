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

export function Login() {
  useEffect(() => {
    document.title = "CompuLab: Iniciar Sesión"
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
            <a href="inicio.html"><img src="images/Logo IE1.png" style="width: 100px;" /></a><b>
              <font color="white"> l SISTEMA DE MATRICULACIÓN</font>
            </b>
          </div>
          <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">

              <li><a href="inicio.html"><img src="assets/img/Foto perfil.png" style="width: 25px;" />
                <font color="white"> Fabián Andrés Quizhpe Quizhpe</font>
              </a></li>
              <li><a href="ingresar.html"><img src="images/cerrar1.png" style="width: 19px;" />
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
              <img src="assets/img/tramites.png" style="width: 250px;" />
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


      <div id="page-wrapper">
        <div id="page-inner">
          <div class="row">
            <div class="col-md-12">
              <div class="btn-info">
                <div class="panel-heading">
                  <h2><b>Datos de la cuenta</b></h2>
                </div>
              </div>


              <section class="content">
                <div class="row">

                  <div class="col-md-6">

                    <div class="box box-primary">
                      <div class="box-header with-border">

                      </div>


                      <form role="form">
                        <div class="box-body">
                          <div class="form-group">

                            <label for="exampleInputEmail1">Nombre de usuario</label>
                            <div class="panel-body">
                              <a>Fabián Andrés Quizhpe Quizhpe ✔</a>
                            </div>
                          </div>
                          <div class="form-group">
                            <label for="exampleInputPassword1">Correo electrónico</label>
                            <div class="panel-body">
                              <a>fabian.quizhpe@unl.edu.ec ✔</a>
                            </div>
                          </div>
                          <div class="form-group">
                            <label for="exampleInputPassword1">Estado</label>
                            <div class="panel-body">
                              <a>Activo ✔</a>
                            </div>
                          </div>
                          <div class="form-group">

                          </div>
                          <div class="checkbox">
                            <label>

                            </label>
                          </div>
                        </div>


                        <div class="row no-print">
                          <div class="col-xs-12">

                          </div>
                        </div>

                      </form>
                    </div>

                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
