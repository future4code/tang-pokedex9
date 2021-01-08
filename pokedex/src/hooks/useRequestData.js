import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useRequestData(initialData, url) {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            alert(`Erro: ${error} , tente novamente`)
        })

    }, [url])
    
    return data
}
