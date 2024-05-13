
import knex from "../knex.js";
import bcrypt from 'bcrypt';
import crypto from 'node:crypto';
import jwt from 'jsonwebtoken';

export const signUp = async (username, email, password) => {

    try {
        const exitUser = await knex('user').where('email', email).first();
        if (exitUser) {
            return { message: 'Email exist', status: 400 };
        }
        const passwordHash = await bcrypt.hash(password, 10);
        await knex('user').insert({
            email,
            username,
            password: passwordHash
        });
        return { message: 'Sign up successful', status: 200 };

    } catch (error) {
        console.error(error);
    }
}

export const findByEmail = async (email) => {
    try {
        const user = await knex('user').where('email', email).first();
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const login = async (email, password) => {
    const foundUser = await findByEmail(email);
    if (!foundUser) {
        return { message: 'User not found', status: 400 };
    }

    const match = await bcrypt.compare(password, foundUser.password);
    console.log(foundUser.password);
    if (!match) {
        return { message: 'Wrong password', status: 400 };
    }

    const privateKey = crypto.randomBytes(64).toString('hex')
    const publicKey = crypto.randomBytes(64).toString('hex')

    const accessToken = jwt.sign({ userId: foundUser.id }, privateKey, { expiresIn: '1h' });
    const refreshToken = jwt.sign({ userId: foundUser.id }, publicKey, { expiresIn: '7d' });

    return { email, message: 'Login successful', status: 200, accessToken, refreshToken };

}