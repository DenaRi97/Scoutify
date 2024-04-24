//No implementado


// const Recaptcha = require('recaptcha-validator');

// // Configura las claves de sitio y secreto de reCAPTCHA
// const SITE_KEY = 'TU_CLAVE_DE_SITIO';
// const SECRET_KEY = 'TU_CLAVE_SECRETA';

// // Función para validar el token reCAPTCHA
// const validarTokenRecaptcha = async (req, res) => {
//     const token = req.body.token; // Obtiene el token reCAPTCHA del cuerpo de la solicitud
    
//     // Crea una instancia de Recaptcha con tus claves de sitio y secreto
//     const recaptcha = new Recaptcha({ secretKey: SECRET_KEY });
    
//     try {
//         // Valida el token reCAPTCHA
//         const resultado = await recaptcha.validate(token);
        
//         // Si el token es válido, responde con un mensaje de éxito
//         if (resultado.success) {
//             res.status(200).json({ success: true, message: 'Token reCAPTCHA válido' });
//         } else {
//             // Si el token no es válido, responde con un mensaje de error
//             res.status(400).json({ success: false, message: 'Token reCAPTCHA inválido' });
//         }
//     } catch (error) {
//         // Si ocurre un error durante la validación, responde con un mensaje de error
//         console.error('Error al validar el token reCAPTCHA:', error);
//         res.status(500).json({ success: false, message: 'Error al validar el token reCAPTCHA' });
//     }
// };

// module.exports = { validarTokenRecaptcha };


//USAR EL CONTROLADOR EN LAS RUTAS NECESARIAS__
// const express = require('express');
// const router = express.Router();
// const recaptchaController = require('./recaptchaController');

// // Ruta para validar el token reCAPTCHA
// router.post('/validar-recaptcha', recaptchaController.validarTokenRecaptcha);

// module.exports = router;