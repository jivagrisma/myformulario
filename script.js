// Función para validar el formulario
function validateForm() {
    // Obtener los elementos del formulario
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confirm_password = document.getElementById("confirm-password");

    // Validar que los campos no estén vacíos
    if (name.value == "" || email.value == "" || password.value == "" || confirm_password.value == "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    // Validar que la contraseña tenga al menos 8 caracteres
    if (password.value.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres");
        return false;
    }

    // Validar que la contraseña y la confirmación coincidan
    if (password.value != confirm_password.value) {
        alert("Las contraseñas no coinciden");
        return false;
    }

    // Si todo está bien, mostrar un mensaje de éxito y capturar los datos ingresados
    alert("Te has registrado exitosamente");
    console.log("Nombre: " + name.value);
    console.log("Correo electrónico: " + email.value);
    console.log("Contraseña: " + password.value);
    return true;
}
