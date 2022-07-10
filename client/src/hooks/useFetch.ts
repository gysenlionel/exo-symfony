import axios from "axios";
import { useEffect, useState } from "react";


const useFetch = (url:string) => {

    const [data,setData] = useState<any>([])
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState<boolean | any>(false)
    const API: string = process.env.REACT_APP_API as string

    useEffect(()=>{
        const fetchData = async ()=>{
        setIsLoading(true)
        try {
            const res = await axios.get(`${API}${url}`)
            setData(res.data)
        } catch (err) {
            setError(err)
        }
        setIsLoading(false)
    }
    fetchData()
    },[url])
   
    const reFetch = async() => {
        setIsLoading(true)
        try {
            const res = await axios.get(`${API}${url}`)
            setData(res.data)
        } catch (err) {
            setError(err)
        }
        setIsLoading(false)
    }
    
    return {data,isLoading,error,reFetch}
}

export default useFetch