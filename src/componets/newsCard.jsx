import { useState } from 'react'
import '../App.css'

const noImageUrl = "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"

function NewsCard({ title, image, author, data }) {

    const dateToFormat = new Date(data)

    return (
        <>
            <div className='card'>
                <div className='imageContainer'>
                    <img src={image == null ? noImageUrl : image} alt="No image" />
                </div>
                <div className='textContainer'>
                    <div className='titleContainer'><p>{title}</p></div>
                    <div className='spacer'></div>
                    <div className='infoNewsContainer'>
                        <p>{author}</p>
                        <p>{dateToFormat.toLocaleDateString()}</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default NewsCard
