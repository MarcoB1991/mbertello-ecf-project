
import { Router } from 'express'
import userModel from '../model/userModel';
import jwt from 'jsonwebtoken';

const router = Router()

router.post('/signup', async (req, res) => {
    try {
        const user = await userModel.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        // Generation token JWT
    const token = jwt.sign({ userId: user.id }, 'wh_jkl_HC64538-1!wwQQ-8945', { expiresIn: '1h' });

    res.status(200).send({ data: { user, token } });
    } catch (error) {
    res.status(400).send({ error: error.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ where: { email } });
    
        if (!user || user.password !== password) {
        return res.status(401).send({ error: 'Invalid credentials' });
        }
    
    // Generation token JWT
    const token = jwt.sign({ userId: user.id }, 'wh_jkl_HC64538-1!wwQQ-8945', { expiresIn: '1h' });

    res.status(200).send({ data: { user, token } });
    } 
    catch (error) {
    res.status(400).send({ error: error.message });
    }
});

    

export default router;