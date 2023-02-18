
import React from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function Home() {


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
              <a href="inicio.html"><img src="images/Logo IE1.png" style={{ width: 200 }} /></a>
            </div>
            <div class="navbar-collapse collapse">
              <ul class="nav navbar-nav navbar-right">
                <li><a href="ingresar.html">
                  <font color="white" style={{"font-size":"20px"}}> Inicio</font>
                </a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="fondo" >
          <div class="overlay">
            <div class="container">
                <div class="col-md-12 text-center no-gutters slider-text">
                <h1 class="mb-4" style={{ "color": "white" }}><b><font >MÓDULO DE MATRICULACIÓN</font></b></h1>
                <h1><a class="btn btn-info px-4 py-3" href="/login"><b>INGRESAR</b></a></h1>
                
              </div>
            </div>
          </div>
        </div>

      </div>

      );
}
