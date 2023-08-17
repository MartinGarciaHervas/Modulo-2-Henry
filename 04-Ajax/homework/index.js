// $("#boton").on("click", function () {

//   $("#lista").empty();  // esto lo q hace es vaciar la lista si apretamos el click, cosa de que no se vuelva a cargar la lista de amigos de nuevo

//   $.get("http://localhost:5000/amigos", (data) => {
//     data.map(amigo => {
//       let info = document.createElement("li");
//       info.innerHTML = amigo.name;

//       $("#lista").append(info)
//     });
//   })
// });

// $("#search").on("click", function () {
//   $("#amigo").empty();
//   let id = $("#input").val();

//   if (id) {
//     $.get(`http://localhost:5000/amigos/${id}`, (data) => {

//       let info = document.createElement("p");
//       info.textContent = data.name;
//       $("#amigo").append(info);

//     })
//   }
// })

// $("#delete").on("click", function () {
//   $("#success").empty();
//   let id = $("#inputDelete").val();

//   if (id) {
//     $.ajax({
//       type: "DELETE",
//       url: `http://localhost:5000/amigos/${id}`,
//       success: () => {
//         let info = document.createElement("p");
//         info.textContent = `Tu amigo borrado fue borrado con exito`;
//         $("#success").append(info);

//         $(`#${id}`).remove();
//       }
//     })
//   }
// })


// lo ideal es crear las funciones aparte, de esa manera nos queda separado y nos permite llamarla cuando necesitemos, aparte de ser mas 
// ordenado
// esto permite enviar las funciones a otro archivo, y que solo las acciones queden en un archivo :)
// seria algo asi:

let friendsHandler = function () {
  $("#lista").empty();

  $.get("http://localhost:5000/amigos", (data) => {
    data.map(amigo => {
      let info = document.createElement("li");
      info.innerHTML = amigo.name;

      $("#lista").append(info)
    })
  }
  )
}

let searchHandler = function () {
  $("#amigo").empty();
  let id = $("#input").val();

  if (id) {
    $.get(`http://localhost:5000/amigos/${id}`, (data) => {

      let info = document.createElement("p");
      info.textContent = data.name;
      $("#amigo").append(info);

    })
  }
}

let deleteHandler = function () {
  $("#success").empty();
  let id = $("#inputDelete").val();

  if (id) {
    $.ajax({
      type: "DELETE",
      url: `http://localhost:5000/amigos/${id}`,
      success: () => {
        let info = document.createElement("p");
        info.textContent = `Tu amigo borrado fue borrado con exito`;
        $("#success").append(info);
        friendsHandler(); //aca puedo llamar de nuevo a la funcion que me muestra los amigos, asi se actualiza la lista sin el que acabo de eliminar
      }
    })
  }
}

$("#boton").on("click", friendsHandler);

$("#search").on("click", searchHandler);

$("#delete").on("click", deleteHandler);