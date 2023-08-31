import { useEffect } from 'react'
import Link from "next/link"


const Movie = () => {
    const url = process.env.RAPID_KEY;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0aab924765msh8fb8dac84136333p1349b8jsn6561d10539b9',
            'X-RapidAPI-Host': 'netflix-data.p.rapidapi.com'
        }
    };
    const fetchData = async () => {

        const res = await fetch(url, options)
        const data = await res.json()
        // const main_data = data.titles
        // console.log(main_data);
        console.log(data);
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div>
                Movie PAge

            </div>

            <Link href='/movie/123'>
                <button className="border-2 border-gray-400" >ON Single Movie</button>
            </Link>
        </>
    )
}

export default Movie
