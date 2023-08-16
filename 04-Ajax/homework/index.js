$("#boton").on("click", function () {
$.get("http://localhost:5000/amigos", (data) => { 

for(let i = 0; i < data.length; i++){
  let info = document.createElement("li");
  info.textContent = data[i].name
  info.id = data[i].id
  $("#lista").append(info);
}

})
});

$("#search").on("click", function () {
    $.get("http://localhost:5000/amigos/" + input.value, (data) => {

    let info = document.createElement("p");
    info.textContent = data.name;
    $("#amigo").append(info);
    
    })
    })

$("#delete").on("click", function () {
    $.ajax({
        type: "DELETE",
        url: "http://localhost:5000/amigos/" + inputDelete.value,
          success: (data) => {
            console.log(data);

              let info = document.createElement("p");
              info.textContent = `Tu amigo borrado fue borrado con exito`;
              $("#success").append(info);

              $(`#${inputDelete.value}`).remove();
        }
    })
})

$("#agregar").on("click", function() {
$.post( "http://localhost:5000/amigos", { name: "John", time: "2pm" } )
})



// $("#agregar").on("click", function() {
//   $.ajax({
//     type: "POST",
//     url: "http://localhost:5000/amigos",
//     data: {
//       name: $("#nombre").val(),
//       apellido: $("#apellido").val(),
//       email: $("#mail").val()
//         },
//     success: (data) => {
//       console.log(data);
//     }
//   });
// })