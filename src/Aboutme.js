import React from 'react';
import { Helmet } from 'react-helmet';
import Image from './project_image.jpg';

const Aboutme = () => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Catamaran:wght@100..900&family=Jersey+15&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="true"
        />
      </Helmet>

      <main className='aboutme'>
        <section className='firstabout' >
        <div class="textcontent">
            <h1>About:</h1>
            <p className="para">I'm a hustling front-end developer</p>
            <p>
              I started my journey as a "quality engineer" but from the depth of my heart, I always wanted to become a
              "front-end developer" as I'm always passionate about designing.
            </p>
          </div>
          
             <img src={Image} alt="Project Preview" /> 
          
            
           
          
        </section>

        <section className='secondabout'>
          <div className='secondabout0'>
            <h1>Part coder:</h1>
            <ul>
              <li>Front-end development</li>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>Swearing at my computer</li>
              <li>React view library</li>
            </ul>
          </div>
          
          
            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODdtMmNteWo0aTlwOTloOTNtdWg3ZGlpNXNlaGFwbzFmcjZsZGJiMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohhwEBrUKal8ebBni/giphy.gif"
              alt="Coding GIF"
            />
         
        </section> 

        <section className='thirdabout'>
         <div className='thirdabout0'>
             <h1>Hobbies:</h1>
              <ul>
               <li>Gaming</li>
               <li>Improving career-relevant skills</li>
               <li>Boxing/Fitness</li>
              </ul>
            </div>
          
              <img
               src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXdvam91bGpjaTc1djR4dHB3Y2tzdTE3ajgxdGY1cmZtMTdhN3NxNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mV9pgQ0VwPK6gfyQwm/giphy.gif"
               alt="Hobbies GIF"
              />
          

        </section>

       {/* Bubble Animation Wrapper */}
      <div className="wrapper2">
        <div><span className="dot2"></span></div>
        <div><span className="dot2"></span></div>
        <div><span className="dot2"></span></div>
        <div><span className="dot2"></span></div>
        <div><span className="dot2"></span></div>
        <div><span className="dot2"></span></div>
        <div><span className="dot2"></span></div>
        <div><span className="dot2"></span></div>
        <div><span className="dot2"></span></div>
        <div><span className="dot2"></span></div>
        <div><span className="dot2"></span></div>
        <div><span className="dot2"></span></div>
        <div><span className="dot2"></span></div>
        <div><span className="dot2"></span></div>
        <div><span className="dot2"></span></div>
        <div><span className="dot2"></span></div> {/* Added more bubbles */}
        <div><span className="dot2"></span></div> {/* Add more if needed */}
        <div><span className='dot2'></span></div>
        <div><span className='dot2'></span></div>
      </div>

      </main>
    </>
  );
};

export default Aboutme;
