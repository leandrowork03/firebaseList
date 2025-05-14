import styles from './login.module.css'
import { Input } from '../../components/input'
import { useState, type FormEvent } from 'react'

import {auth} from '../../services/firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    
    function cadastrar(e:FormEvent){
        e.preventDefault()

          if(email === "" || password === ""){
            alert('Preencha todos os campos')
            return
        }

        signInWithEmailAndPassword(auth, email, password)
        .then(()=>{
            navigate("/login", {replace: true})
        })
        .catch((error)=>{
            console.error('error', error)
        })
    }

    return(
        <main className={`flex flex-col justify-center items-center h-screen gap-6 ${styles.main}`}>
            <h1 className="font-bold text-3xl ">Login</h1>
            <form onSubmit={cadastrar} className={`flex flex-col gap-1 ${styles.form}`}>
                <Input 
                type='email'
                placeholder='E-mail'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}          
                />

                <Input 
                type='password'
                placeholder='*******'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />

                <button type='submit' className={`${styles.button}`}>Cadastrar</button>

            </form>
        </main>
    )
}

