
import * as accessService from '../../../service/access.service.js'

export const signUp = async (req, res) => {
    const { username, email, password } = req.body
    try {
        const result = await accessService.signUp(username, email, password)
        res.json({
            data: result
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body
    console.log(req.body)
    try {
        const result = await accessService.login(email, password)
        res.json({
            data: result
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}