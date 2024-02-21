import '../styles/main.css'
import $ from 'jquery'

import { useEffect } from 'react';

export default function Home() {
    //Add scale to show what is a million when showing Bernard Arnault wealth
    //Add trivia to explain how stupid it is. Like how long someone at minimum wage would need to work to get this amount of wealth

    useEffect(() => {
        let currentIndex = 0;
        const sections = document.querySelectorAll('.demo');

        for(let i = 0; i < sections.length; i++){
            sections[i].setAttribute('data-id', i);
        }
        const buttonDown = document.querySelector('.arrow-down'); 
        const buttonUp = document.querySelector('.arrow-up');

        buttonDown.addEventListener('click', () => {
            currentIndex++;
            if(currentIndex > sections.length-1){
                currentIndex = 0;
            }
            return indexScroll(currentIndex);
        });

        buttonUp.addEventListener('click', () => {
            currentIndex--;
            if(currentIndex < 0){
                currentIndex = sections.length-1;
            }
            return indexScroll(currentIndex);
        })

        function indexScroll(idx){
            
            let active = document.querySelector('.active');
            if(active == undefined) document.querySelector('.tenPoorest').add('active');
            let x = sections[idx];
            console.log(x);
            active.classList.remove('active');
            x.classList.add('active');
            $("html, body").animate({
                scrollTop: $(".active").offset().top
            }, 2000);
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
                    <p>Chaque pixel bleu correspond à 1000€.</p>
                    <p>Pour défiler chaque catégorie, il suffit de cliquer sur la flèche qui va apparaître</p>
                </div>
                <div className='wrapper'>
                    <div className='demo tenPoorest active'>
                        <span>Les 10% les plus pauvres possèdent au plus 4400€ </span>
                        <div className='money-block tenPoorest'></div>
                    </div>
                    <div className='demo'>
                        <span>177 200€ le patrimoine médian en France</span>
                        <div className='money-block median'></div>
                    </div>
                    <div className='demo'>
                        <span>Les 10% les plus riches de France (716 300€)</span>
                        <div className='money-block tenRichest'></div>
                    </div>
                    <div className='demo'>
                        <span>On arrive aux millionaires.<br/> Les 5% les plus riches de France (1 034 600€)</span>
                        <div className='money-block fiveRichest'></div>
                    </div>
                    <div className='demo'>
                        <span>Les 1% les plus riches de France (2 239 200€)</span>
                        <div className='money-block oneRichest'></div>
                    </div>
                    <div className='demo'>
                        <span>Voici ce que représente un milliard d&apos;euros</span>
                        <div className='money-block oneBillion'><div className='demo oneBillion-end'></div></div>
                        
                        
                    </div>
                    <div className='demo'>
                        <span>Voici la richesse de Bernard Arnault 221,1 milliards d&apos;euros</span>
                        <div className='money-block bernard'>
                            <div className='demo information-patience'><span>On vient d&apos;atteindre seulement 15% de sa fortune</span></div>
                            <div className='demo information-reminder'><span>Pour rappel, voici ce que représente <br />un million d&apos;euros</span></div>
                            <div className='money-block fiveRichest reminderBlock'></div>
                            <div className='demo information-SMIC'><span>Il faudrait 12 millions d&apos;années pour un salarié au SMIC pour espérer gagner autant</span></div>
                            <div className='demo information-budgetEduc'><span>Le budget de l&apos;éducation nationale comparé à la fortune de Bernard Arnault</span></div>
                            <div className='money-block educationBlock'>
                                <div className='demo educationBlock-end'></div>
                            </div>
                            
                        </div>
                    </div>
                    <div className='demo'>
                        <span>Ceci ne représente que la richesse de l&apos;homme le plus riche de France et du monde. Imaginez ce que pourrait représenter les 100 personnes les plus riches de France</span>
                    </div>
                    <div className='demo'>
                        <h3>Sources :</h3>
                        <ul>
                            <li>Observatoire des inégalités</li>
                            <li>Projet de loi de finances 2024</li>

                        </ul>
                    </div>
                </div>
                <div className='wrapper-arrow'>
                    <div className='arrow arrow-up' id='scrollUpArrow'><a href='#'>&#8593;</a></div>
                    <div className='arrow arrow-down' id="scrollDownArrow"><a href='#/'>&#8595;</a></div>
                </div>
            </main>
        </>
    )
}