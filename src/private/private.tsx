import { useEffect, useState, type ReactNode } from "react"
import {auth} from '../services/firebaseConnection'
import { onAuthStateChanged } from "firebase/auth"
import { Navigate} from "react-router-dom"

interface privateProps{
    children: ReactNode
}

export function Private({children}: privateProps){
    const [loading, setLoading] = useState(true)
    const [signed, setSigned] = useState(false)

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, (user)=>{
            if(user){
                const userData = {
                    uid: user?.uid,
                    email: user?.email
                }
                localStorage.setItem("@teste", JSON.stringify(userData))
                setSigned(true)
            }else{
                setSigned(false)
            }
            setLoading(false)
        })
        return ()=>{
            unsub()
        }
    },[])

    if(loading){
        return <h1>Carregando...</h1>
    }

    if(!signed){
        return <Navigate to='/login'/>
    }
    
    return children
}