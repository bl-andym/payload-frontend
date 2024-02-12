import React from 'react'
import Image from 'next/image'

export default function TwoColumn({ heading, text, image, direction }) {
    console.log('image: ', image)
    return (
        <div className={`component ${direction === 'reverse' ? 'reverse' : 'default'}`}>
            <div className='content'>
                <h2>{heading}</h2>
                <p>{text}</p>
            </div>
            <div className='media'>
                {image && (
                    <Image
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
                        height={image.height}
                        width={image.width}
                        alt={image.alt}
                    />
                )}
            </div>
        </div>
    )
}