$(document).ready(function(){
    $("#formulario").on("submit", function (event) {
        event.preventDefault();
    
        const noCorreoElectronicombre = $("#correo").val().trim();
        const contraseña = $("#contrasenia").val().trim();
    
        // Verificar que se hayan ingresado los datos
        if (!noCorreoElectronicombre || !contraseña) {
          return alert("Por favor, completa todos los campos.");
        }
    
        $.ajax({
          url: ``,
          method: "GET",
          contentType: "application/json",
          success: function (respuesta) {
            if (respuesta.length === 0) {
              return alert("Registro no encontrado.");
            }
            console.log(respuesta[0]);
            const clubEncontrado = respuesta[0];
            if (clubEncontrado.contrasenia === contraseña) {
                alert('Usuario encontrado');
            } else {
              alert("Contraseña incorrecta.");
            }
          },
          error: function (xhr) {
            console.error("Error al iniciar sesión:", xhr.responseText);
            alert(
              "Hubo un error al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde."
            );
          },
        });
      });
})