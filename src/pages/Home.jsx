import '../styles/main.css'

import moneyBlock from '../assets/money-block.png';
import { useEffect } from 'react';

export default function Home() {


    useEffect(() => {
        let currentIndex = 0;
        const sections = document.querySelectorAll('.demo');

        for(let i = 0; i < sections.length; i++){
            sections[i].setAttribute('data-id', i);
        }
        const buttonDown = document.querySelector('.arrowDown'); 

        buttonDown.addEventListener('click', () => {
            currentIndex++;
            if(currentIndex > sections.length-1){
                currentIndex = 0;
            }
            return indexScroll(currentIndex);
        });

        function indexScroll(idx){
            let active = document.querySelector('.active');
            let x = sections[idx];
            console.log(x);
            active.classList.remove('active');
            x.classList.add('active');
            x.scrollIntoView({
                behavior: 'smooth'
              });
        }
    }, [])


    return (
        <>
            <header>
                <h1>Visualisation richesse</h1>
            </header>
            <main>
                <div className='main-title'>
                    <h2>Que représente la richesse des <span className='main-title-word'>milliardaires</span> comparée au français moyen ?</h2>
                    <span>Avec l&apos;augmentation des inégalités d&apos;années en années, il est temps de rappeler le patrimoine en euros de Français les plus riches comparé à celui du français moyen.</span>
                </div>
                <div className='main-desc'>
                    <p>Chaque <img src={moneyBlock}></img> correspond à 1000€.</p>
                    <p>Pour défiler chaque catégorie, il suffit de cliquer sur la flèche qui va apparaître</p>
                </div>
                <div>
                    <div className='demo 10poorest active'>
                        <span>Les 10% les plus pauvres possèdent au plus 4400€ </span>
                        <div className='money-block tenPoorest'></div>
                    </div>
                    <div className='demo median'>
                        <span>177 200€ le patrimoine médian en France</span>
                        <div className='money-block median'></div>
                    </div>
                    <div className='demo tenRichest'>
                        <span>Les 10% les plus riches de France (716 300€)</span>
                        <div className='money-block tenrichest'></div>
                    </div>
                    <div className='demo fiveRichest'>
                        <span>On arrive aux millionaires.<br/> Les 5% les plus riches de France (1 034 600€)</span>
                        <div className='money-block fiveRichest'></div>
                    </div>
                    <div className='demo oneRichest'>
                        <span>Les 1% les plus riches de France (2 239 200€)</span>
                        <div className='money-block oneRichest'></div>
                    </div>
                    <div className='demo milliard'>
                        <span>Voici ce que représente une richesse d&apos;un milliard d&apos;euros</span>
                        <div className='money-block oneBillion'></div>
                    </div>
                </div>
                
                <div className='arrowDown' id="scrollDownArrow"><a href='#/'>&#8595;</a></div>
            </main>
        </>
    )
}