$('document').ready(function() {
    //cambiar orientacion de las columnas 
    $('#reverse').click(function() {
        //toggleClass agrega o quita la clase si ya existe
        $('#reverse-columns').toggleClass('reverse');
    });
    //cambiar el titulo
    $('#btn_title').click(function() {
        let nuevoTitulo = $('#txt_titulo').val();
        if (nuevoTitulo.trim() !== '') {
            $('h1').text(nuevoTitulo);
        } else {
            //una pequeña validacion
            alert('Por favor, ingresa un título válido.');
        }
    });
    //modificar subtitulo y fuente
    $('#btn_color-title').click(function() {
        // por que conformarme con un solo color?
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); //genera un color hexadecimal aleatorio
        $('.efecto h3').css('color', randomColor); //aplica el color aleatorio
        //cambiar la fuente a Arial
        $('.efecto p').css('font-family', 'Arial, sans-serif');
    });
    //mostrar imagen
    $('#btn_img').click(function() {
        //necesitamos internet papi para ver la imagen de nuestra alma mater
        $('#img-selected').html('<img src="https://uca.edu.sv/wp-content/themes/kubo/images/logo-uca.png" alt="Imagen Placeholder">');
    });
})