"use client"
import { useRouter } from 'next/navigation'




export default function Users(){
    
    const router = useRouter()
    router.push('/operator/appointments')

    return (
       <></>
    )
    
}