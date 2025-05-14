import { InputHTMLAttributes } from "react"

interface inputProps extends InputHTMLAttributes<HTMLInputElement>{}

export function Input(props: inputProps){
    return(
        <input className="bg-amber-600 rounded px-1 h-8 text-black w-full"
        {...props}
        />
    )
}