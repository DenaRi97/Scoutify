import { User } from "../models/authModel.js";


//Definimos una funcion que verifica que el rol que entra en la resquest es el que esta guardado en nuestra base de datos relacionada con el usuario
export const verifyRole = async (req, res, next) => {
    //Busco el id del usuario por el token que entra
    const id= req.user._id
    //encuentro el usuario por su id
    const userRole= await User.findById(id)
    //Comparo el rol que entra con el que hay en la base de datos
    if (userRole.role !== "admin") {
        return res.status(403).json({ message: "No tienes permisos para acceder a esta funcionalidad." });
    }
    next();
};

//Defino una funcion que verifica que el role sea admin
export const verifyAdminRole = (req, res, next) => {
    const userRole = [req.user.role]

    //verifico que el rol del usuario incluya la palabra 'admin' ***include es un metodo para arrays por eso en la variable userRole, el valor del role lo guardo entre corchetes para que lo entienda como un array
    if(req.user && userRole.includes('admin')) {
        next()
    } else {
        res.status(403).json({ message: "Permission denied" })
    }
}