'use client'

import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function SingleCourse() {
    const { courseId } = useParams();  // Using useParams to get courseId from the route
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data when courseId changes
    useEffect(() => {
        async function fetchCourseData() {
            try {
                const res = await fetch(`https://api.example.com/courses/${courseId}`);
                if (!res.ok) {
                    throw new Error('Failed to fetch course data');
                }
                const data = await res.json();
                setCourse(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        if (courseId) {
            fetchCourseData();
        }
    }, [courseId]);  // Re-fetch when courseId changes

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='mt-36'>
            <h1>Course Details</h1>
            {course ? (
                <div>
                    <div>
                        <Image src={course.img} alt={course.title} />
                    </div>

                    <h2>{course.courseName}</h2>

                    <div className="ganaretedHtml" dangerouslySetInnerHTML={{ __html: course.description }} />

                </div>
            ) : (
                <div>Course not found</div>
            )}
        </div>
    );
}
