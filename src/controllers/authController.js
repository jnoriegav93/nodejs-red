import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import { createAccessToken } from '../libs/jwt.js'

export const register = async (req, res) =>{
    const {username, email, password} = req.body
    try{
        const passwordHash = await bcrypt.hash(password, 10) //String aleatorio
        const newUser = new User({
            username,
            email,
            password: passwordHash
        })
        
        const userSaved = await newUser.save();
        
        const token = await createAccessToken({ id: userSaved._id});
        res.cookie('token', token);
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt
        });
    }catch(error){
        if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
            res.status(400).json({ error: 'El email ya está registrado.' });
        } else {
            console.error(error);
            res.status(500).send('Error interno del servidor.');
        }
    }
}
export const login = async (req, res) =>{
    const {email, password } = req.body;
    try{
        const userFound = await User.findOne({ email });
        if(!userFound) return res.status(400).json({ messaje: "El usuario no existe."});
        const isMatch = await bcrypt.compare(password, userFound.password);
        if(!isMatch) return res.status(400).json({ messaje: "La clave es incorecta."});
        const token = await createAccessToken({ id: userFound._id});
        res.cookie('token', token);
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt
        });
    }catch(error){
        if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
            res.status(400).json({ error: 'El email ya está registrado.' });
        } else {
            console.error(error);
            res.status(500).send('Error interno del servidor.');
        }
    }
}

export const logout = (req, res) =>{
    res.cookie('token','',{
        expires: new Date(0)
    });
    return res.sendStatus(200);
}


export const profile = async (req, res) =>{
    const userFound = await User.findById(req.user.id);
    if(!userFound)
        return res.status(401).json({ message : "Usuario no encontrado."});
    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt
    })
}