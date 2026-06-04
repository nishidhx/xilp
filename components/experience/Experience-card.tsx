"use client"
import { useEffect, useState } from "react"
import axios from "axios"
interface workExperience {
    id: string;
    role: string;
    companyName: string;
    skills: string[];
    description: string[];
    place: string;
    joining_date: string;
    working: boolean

}

export const ExperienceCard = () => {
    const [workExperience, setworkExperience] = useState<workExperience | []>([]);

    useEffect(() => {
        const fetchUserExperience = async () => {
            const work = await axios.get(`${process.env.SERVER_URL ?? "http://localhost:3000"}/api/v1/work`)
            const data =  await work.data;
            setworkExperience(data)
            console.log(data)
        }

        fetchUserExperience()
    }, [])

    return (
        <div >Experience: {JSON.stringify(workExperience)}</div>
    )
}