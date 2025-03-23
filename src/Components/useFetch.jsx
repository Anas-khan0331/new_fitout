import { useEffect, useState } from 'react'

export default function useFetch(url) {
    const [content, setcontent] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        let isMounted = true

        const getResource = async (url)=>{
            setLoading(true)
            setError(null)

            try {

                const fetched = await fetch(url)
                if (!fetched.ok){
                    throw new Error (`error ${fetched.status}`);
                }

                const result = await fetched.json()

                if (isMounted){
                    setcontent(result)
                }
                
            } catch (error) {
                if(isMounted){
                    setError(error.message)
                    setcontent([])
                }
            } finally {
                if(isMounted){
                    setLoading(false)
                }
            }

            
        };

        getResource(url);

        return(()=>{
            isMounted = false
        })

    },[url])

  return [content, loading, error]
}
