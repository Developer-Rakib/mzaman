import Image from 'next/image'
import React from 'react'
import img from '../../imges/suiting-trend-anything-basic-director-wear-classic-navy-suit-mens-fashion-man-face-portrait-banner-copy-space-283212679-removebg-preview.png'

function BannerSection() {
    return (
        <div className='flex items-center justify-between text-left py-16'>
            <div className='w-[60%]'>
                <h1 className='text-8xl font-extrabold text-orange-500'>Hi i am</h1>
                <h1 className='text-2xl font-bold'>MZaman</h1>
                <p>
                    I help your online business and career thrive 📈 with over 8+ years of industry experience in growth and digital marketing.
                </p>
            </div>
            <div>
                <img src="https://i.ibb.co.com/SKzpzRL/suiting-trend-anything-basic-director-wear-classic-navy-suit-mens-fashion-man-face-portrait-banner-c.png" alt='' />
            </div>

        </div>
    )
}

export default BannerSection
