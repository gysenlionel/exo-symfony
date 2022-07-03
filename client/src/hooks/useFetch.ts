import axios from "axios";
import { useEffect, useState } from "react";


const useFetch = (url:string) => {

    const [data,setData] = useState<any>([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState<boolean | any>(false)
    const API: string = 'http://localhost:8000/api'

    useEffect(()=>{
        const fetchData = async ()=>{
        setLoading(true)
        try {
            const res = await axios.get(`${API}${url}`)
            setData(res.data)
        } catch (err) {
            setError(err)
        }
        setLoading(false)
    }
    fetchData()
    },[API,url])
   
    const reFetch = async() => {
        setLoading(true)
        try {
            const res = await axios.get(`${API}${url}`)
            setData(res.data)
        } catch (err) {
            setError(err)
        }
        setLoading(false)
    }
    
    return {data,loading,error,reFetch}
}

export default useFetch