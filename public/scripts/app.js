//firebase
var firebaseConfig = {
  apiKey: "AIzaSyAFUDvYNZ_RrWEtCLkZNbRC5ZXe-arZJIQ",
  authDomain: "datosmatricula.firebaseapp.com",
  databaseURL: "https://datosmatricula-default-rtdb.firebaseio.com",
  projectId: "datosmatricula",
  storageBucket: "datosmatricula.appspot.com",
  messagingSenderId: "1079985654091",
  appId: "1:1079985654091:web:5d0b5cd3ad0c6f21c200ce"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();


//Variable to access database collection
const db = firestore.collection("usuarios");


//Get Submit Form
let submitButton = document.getElementById("save");

//Pueda guardar datos
submitButton.addEventListener("click", (e) => {
  
  e.preventDefault();

  //Datos a ingresar
  //Datos de estudiante
  let nombres = document.getElementById("nombres").value;
  let cedula = document.getElementById("cedula").value;
  let direccion = document.getElementById("direccion").value;
  
  //Datos de representante
  let representante = document.getElementById("representante").value;
  let parentesco = document.getElementById("parentesco").value;
  let ocupacion = document.getElementById("ocupacion").value;
  let contacto = document.getElementById("contacto").value;

  //Datos de vivienda

  let vivienda = document.getElementById("vivienda").value;
  let tipodevivienda = document.getElementById("tipodevivienda").value;
  let serviciosbasicos = document.getElementById("serviciosbasicos").value;
  let infraestructura = document.getElementById("infraestructura").value;

  //datos de salud
  let alergias = document.getElementById("alergias").value;
  let medicamentos = document.getElementById("medicamentos").value;
  let dosis = document.getElementById("dosis").value;
  let NEE = document.getElementById("NEE").value;

  //Datosacademicos
  let Añoacursar = document.getElementById("Añoacursar").value;
  let Añoaprobado = document.getElementById("Añoaprobado").value;
  let DosisCovid = document.getElementById("DosisCovid").value;
  let Perdidadeaño = document.getElementById("Perdidadeaño").value;
  let materiafavorita = document.getElementById("materiafavorita").value;
  let dificultad = document.getElementById("dificultad").value;
  let problemasdeaprendizaje = document.getElementById("problemasdeaprendizaje").value;
  





  firestore
    .collection("usuarios")
    .get()
    .then((snapshot) => {
      
    });
  //Save Form Data To Firebase
  db.doc()
    .set({
      nombres: nombres,
      cedula: cedula,
      direccion: direccion,
      representante: representante,
      parentesco: parentesco,
      ocupacion: ocupacion,
      contacto: contacto,
      vivienda: vivienda,
      tipodevivienda: tipodevivienda,
      serviciosbasicos:serviciosbasicos,
      infraestructura: infraestructura,
      alergias: alergias,
      medicamentos:medicamentos,
      dosis: dosis,
      NEE:NEE,
      Añoacursar :Añoacursar,
      Añoaprobado :Añoaprobado,
      DosisCovid: DosisCovid,
      Perdidadeaño: Perdidadeaño,
      materiafavorita:materiafavorita,
      dificultad : dificultad,
      problemasdeaprendizaje: problemasdeaprendizaje, 

    })
    .then(() => { })
    .catch((error) => {
      console.log(error);
    });

  
  alert("Guardado correctamente");

  //clear form after submission
  function clearForm() {
    document.getElementById("clearFrom").reset();
  }
  clearForm()
});
