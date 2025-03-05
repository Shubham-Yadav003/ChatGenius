// this fiile for creating user 
import userModel from "../models/user.model.js"

export const createUser = async ({
    email, password
}) => {
    if (!email || !password) {
        throw new Error("Email and password are required")
    } // if not user , pass throw error 

    const hashedPassword = await userModel.hashPassword(password); //hashing password before creating user
    const user = await userModel.create({
        email,
        password: hashedPassword // using hashed pasword
    });

    return user;
}