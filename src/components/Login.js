
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export function Login() {
    useEffect(() => {
        document.title = "Iniciar Sesión"
     }, []);
      const [email, setemail] = useState("");
      const [password, setpassword] = useState("");
      const { login} = useAuth();
      const [error, setError] = useState("");
      const navigate = useNavigate();
      const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
        console.log(email, password,"hola");
          await login(email, password);
          navigate("/inicio");
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
                        <a href="inicio.html"><img src="images/Logo IE1.png" style={{ width: 150 }} /></a>
                    </div>

                </div>
            </div>

            <div id="preloader">
                <i class="circle-preloader"></i>
            </div>



            <div class="breadcumb-area bg-img" style={{ "background-image": "url(img/bg-img/breadcumb.jpg)" }}>
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


                            <form class="login-form" onSubmit={handleSubmit}>
                                    <div class="form-group has-feedback">
                                        <input id="login_email" type="email" class="form-control" placeholder="Usuario"  onChange={e=>setemail(e.target.value)}/>
                                            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                                    </div>
                                    <div class="form-group has-feedback">
                                        <input id="login_password" type="password" class="form-control" placeholder="Contraseña" onChange={e=>setpassword(e.target.value)}/>
                                            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                                    </div>

                                    <div class="col-xm-4">
                                        <button type="submit" id="login" class="btn btn-info px-4 py-3">INICIAR SESIÓN</button>

                                        </div>
                                </form>

                        </div>
                        
                       

                    </div>
                </div>
            </section >


            <div class="container">
                <div class="row slider-text align-items-center justify-content-center" data-scrollax-parent="true">
                    <div class="col-md-8 ftco-animate text-center fadeInUp ftco-animated">

                        <div class="login-box">
                            
                            <div class="login-box-body">
                              
                                </div>



                        </div>


                    </div>
                </div>
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
