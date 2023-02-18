function pdfexport (){

    //labels
    var identificacion = document.getElementById("titulo1").innerText, 
    nombres = document.getElementById("nombres").innerText,
    cedula = document.getElementById("cedula").innerText,
    direccion= document.getElementById("direccion").innerText;

    //inputs

    var lnombre = document.getElementById("exampleInputEmail1").value,
    lcedula = document.getElementById("exampleInputPassword1").value,
    ldireccion = document.getElementById("exampleInputPassword1").value;

    //Hacer PDF
    var doc= new jsPDF ();
    doc.setfontSize(22);
    doc.text(identificacion, 20,10);
    doc.setfontSize(16);
    doc.text(nombres+""+lnombre, 10,20)
    doc.text(cedula+""+lcedula, 10,20)
    doc.text(direccion+""+ldireccion, 10,20)

}