
import React from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function Home() {


  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-danger ftco-navbar-dark" id="ftco-navbar">
      <div class="top-header">
        <div class="container h-100">
          <div class="row h-100">
            <div class="col-12 h-100">
              <div class="header-content h-100 d-flex align-items-center justify-content-between">
                <div class="academy-logo">
                  <a href="Index.html"><img src="images/Logo IE1.png" style={{ width: 155 }} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active"><a href="Index.html" class="nav-link">INICIO</a></li>

        </ul>
      </div>
  </nav >
  
    
    <div class="hero-wrap fondo" >
      <div class="overlay">
      <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center" >
          <div class="col-md-12 text-center">
            <h1 class="mb-4" style={{color:"white"}}><h1>MÓDULO DE MATRICULACIÓN</h1></h1>
            <p><a class="btn btn-info px-4 py-3" href="ingresar.html">INGRESAR</a></p>
              
          </div>
        </div>
      </div>
    </div>
    </div>
      
 </div>

  );
}
