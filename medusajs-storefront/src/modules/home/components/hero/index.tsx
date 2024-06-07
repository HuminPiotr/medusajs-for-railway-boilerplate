import './styles.scss';

import React from 'react';
import Image from 'next/image';

import ButtonLink from '@/app/components/ButtonLink';

const Hero = () => {
  return (
    <section className='hero'>
        <Image 
            src="/images/background-shop.jpg" 
            className='hero__image' 
            fill  
            quality={100}
            alt="Wnętrze sklepu Hollandstyle"
        />
        <div className="hero__filter"></div>
        <h2 className='hero__title'>
            Nadaj swojemu wnętrzu duszę.
        </h2>
        <ButtonLink href="/sklep" className="hero__button" >
          Wejście
        </ButtonLink>
    </section>
  )
}

export default Hero;