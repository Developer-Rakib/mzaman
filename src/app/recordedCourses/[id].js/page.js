import { useParams } from 'next/navigation'
import React from 'react'

export default function SingeCourse() {
    const query = useParams()
    console.log(query);
    return (
        <div>SingeCourse</div>
    )
}
