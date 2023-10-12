import React from 'react';
import "./Cards.css";
import {Link} from 'react-router-dom';



const App = () => {
  const cards = [
    {
      
      heading: 'Basic',
      price: '$9.99',
      bullets: [
        
      ],
      cta: 'get_started',
      path : "/x1"
    },
    {
      heading: 'Pro',
      price: '$19.99',
      bullets: [
        
      ],
      cta: 'Upgrade to Pro',
      path : "/x2"
    },
    {
      heading: 'Ultimate',
      price: '$29.99',
      bullets: [
        
      ],
      cta: 'Go Ultimate',
      path : "/x3"
    },
    {
      heading: 'Ultimate',
      price: '$29.99',
      bullets: [
        
      ],
      cta: 'Go Ultimate',
      path : "/x4"
    },
    {
      heading: 'Pro',
      price: '$19.99',
      bullets: [
        
      ],
      cta: 'Upgrade to Pro',
      path : "/x5"
        },
    {
      heading: 'Ultimate',
      price: '$29.99',
      bullets: [
       
      ],
      cta: 'Go Ultimate',
      path : "/x6"
    },
  ];

  const handleCardHover = (e) => {
    const card = e.currentTarget;
    const overlay = document.querySelector('.overlay');

    overlay.style.opacity = 1;
    overlay.style.x = `${e.pageX - card.offsetLeft}px`;
    overlay.style.y = `${e.pageY - card.offsetTop}px`;
  };

  return (
    <main className="main flow">
      <h1 className="main__heading">Pricing</h1>
      <div className="main__cards cards">
        <div className="cards__inner">
          {cards.map((card, i) => (
            <div>
            <Link to={card.path} style={{textDecoration : "none"}}>
            <div 
              key={i}
              className="cards__card card"
              onMouseMove={handleCardHover}
            >
              <h2 className="card__heading">{card.heading}</h2>
              <p className="card__price">{card.price}</p>
              <ul role="list" className="card__bullets flow">
                {card.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>
              <a href={""} className="card__cta cta">
                {card.cta}
              </a>
            </div>
            </Link>
            </div>
          ))}
        </div>
        <div className="overlay cards__inner"></div>
      </div>
    </main>
  );
};

export default App;
