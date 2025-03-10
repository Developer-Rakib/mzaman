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
                const res = await fetch(`https://server.mzamanbd.com/recordedCourse/${courseId}`);
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
    // console.log(course);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='mt-36'>
            {course ? (
                <div className='mt-[140px]  flex flex-col md:flex-row justify-between'>
                    <div className='w-full md:w-8/12 mx-auto'>
                        <img className='rounded-lg w-full' src={course.courseThumbnail} alt="Course Image" />
                    </div>
                    <div className="mx-auto w-full md:p-4 md:ml-4 mt-6 md:mt-0 bg-white md:shadow-lg md:border-2 rounded-lg">

                        <div className="ganaretedHtml" dangerouslySetInnerHTML={{ __html: course.courseDetails }} />
                    </div>
                </div>

                // <div className='flex justify-between'>
                //     <div style={{ width: '50%' }}>  {/* Set width of the container to 50% */}
                //         <Image
                //             src={course.courseThumbnail}
                //             alt={course.courseName}
                //             width={500}   // Set a base width in pixels (for the aspect ratio)
                //             height={500}  // Set a base height in pixels
                //             layout="responsive" // This makes the image responsive
                //         />
                //     </div>

                //     <div className='w-2'>
                //         
                //     </div>

                // </div>
            ) : (
                <div>Course not found</div>
            )}
        </div>
    );
}
