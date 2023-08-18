import React, { useState } from 'react'
import Cads from './Cads'
import { sajans } from '../data'
import '../styles/Cards.css'


function ShowHidde() {
    const [show, setShow] = useState(true)
    const [likes, setLikes] = useState(0)
    const [img,setImg] = useState(0)

    console.log(img)

    const haddleClick = ()=>{
        setShow(!show)
    }

    const addClick = ()=>{
        setLikes(likes + 1 )
        setShow(!show)
    }

    const addImg = ()=>{
    
        const cards = [];

        for (let i = 0; i < img; i++) {

            img - 1 === i && console.log(`esta es la variable i de el ciclo for${i}`)
            cards.push(
                <Cads
                key={i}
                title={`GOKU ${i +1}`}
                description={`This is description for goku ${i + 1}`}
                image="https://depor.com/resizer/25quKBxP8Ti7cjCcmnR887FHER0=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/DAYT2F5NUNB7VPAFKUPHNDXVQA.jpg"
                />
            );

        }

        console.log(`esta es la variable img ${img}`)
        return cards;

    }
    
  return (
    <div>
        <button onClick={()=> setImg(img + 1)}>{img} cards</button>
        <button onClick={()=> setImg(img > 0 ? img - 1 : img = 0)}>quitar 1</button>
        <section className='Cards-Conteiner'>
            {addImg()}
        </section>
        {!show && <h2>text</h2>}
    </div>
  )
}

export default ShowHidde