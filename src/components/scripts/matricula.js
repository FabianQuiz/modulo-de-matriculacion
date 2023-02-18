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


firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

//Colección de matricula

const db = firestore.collection("matricula");


//Boton de  guardar datos de matricula
let submitButton = document.getElementById("enviar");

//Pueda guardar datos
submitButton.addEventListener("click", (e) => {
  
  e.preventDefault();

  //  DETALLES DE MATRICULA

  let valor = document.getElementById("valor").value;
  let añoacursar = document.getElementById("añoacursar").value;
  let fechamatricula =document.getElementById("fechamatricula").value;

  //COMPROBANTE DE MATRICULA

  let institucionfinanciera= document.getElementById("institucionfinanciera").value;
  let tipodepago = document.getElementById("tipodepago").value;
  let numerodecomprobante =document.getElementById("numerodecomprobante").value;
  let fechadeposito =document.getElementById("fechadeposito").value;
  let comprobante =document.getElementById("comprobante").value;
  



  firestore
    .collection("matricula")
    .get()
    .then((snapshot) => {
      
    });
  //Datos guardados
  db.doc()
    .set({
      //Detalle de matricula
      valor:valor,
      añoacursar:añoacursar,
      fechamatricula:fechamatricula,

      //Comprobante de pago

      institucionfinanciera: institucionfinanciera,
      tipodepago:tipodepago,
      numerodecomprobante: numerodecomprobante,
      fechadeposito:fechadeposito,
      comprobante:comprobante,

    })
    .then(() => { })
    .catch((error) => {
      console.log(error);
    });

  
  alert("Matricula generada");


  function clearForm() {
    document.getElementById("clearFrom").reset();
  }
  clearForm()
});
