// Función para encriptar el texto
function encriptar() {
    const texto = document.getElementById("inputText").value;

    // Validar que solo contenga letras minúsculas
    if (!/^[a-z\s]*$/.test(texto)) {
        alert("El texto solo debe contener letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    // Aplicar las reglas de encriptación
    const textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    // Mostrar el resultado en el textarea de salida
    document.getElementById("outputText").value = textoEncriptado;
}

// Función para desencriptar el texto
function desencriptar() {
    const texto = document.getElementById("inputText").value;

    // Validar que solo contenga letras minúsculas
    if (!/^[a-z\s]*$/.test(texto)) {
        alert("El texto solo debe contener letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    // Aplicar las reglas de desencriptación
    const textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    // Mostrar el resultado en el textarea de salida
    document.getElementById("outputText").value = textoDesencriptado;
}

// Función para copiar el texto encriptado/desencriptado
function copiarTexto() {
    const textoCopiado = document.getElementById("outputText");

    // Verifica si hay un valor en el campo
    if (textoCopiado.value === "") {
        alert("No hay texto para copiar.");
        return;
    }

    // Seleccionar el texto y copiarlo al portapapeles
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}

// Función para borrar el texto del área de salida
function borrarTexto() {
    document.getElementById("outputText").value = "";
}
