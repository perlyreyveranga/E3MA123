import logo from './logo.svg';
import './App.css';
import React from 'react';
import logo1 from './logo.png';
import img1 from './bird1.jpg';
import img2 from './bird2.jpg';
import img3 from './bird3.jpg';
import img4 from './bird4.jpg';

console.log(img1);
function App() {


  return (
    <div className="App">
   <div className="fontbg">


              <div className="h1design">
                  <div className="imgbg">
                      <img src={logo1} alt="Bird"/>
                    </div>
                    Birdwatching
                </div>


              <div className="navbg">
                  <nav>
                      <ul>
                          <li><a href="#home">Home</a></li>
                          <li><a href="#Get Starded">Get Starded</a></li>
                          <li><a href="#Photo">Photo</a></li>
                          <li><a href="#Gear">Gear</a></li>
                          <li><a href="#Forum+">Forum</a></li>
                      </ul>
                  </nav>
              </div>
              
              <main>
              <aside>
                  <div className="h1design">Welcome</div>
               
       		<article>
        			<p>Welcome to our fake birdwatching site. If this were a real site, it would be the ideal place to come to learn more about birdwatching, whether you are a beginner looking to learn how to get into birding, or an expert wanting to share ideas, tips, and photos with other like-minded people.</p>
        			<p>So don't waste time! Get what you need, then turn off that computer and get out into the great outdoors!</p>
                  </article>
              </aside>

              <aside>
                  <div class="h2design">Favourite Photos</div>
                  <div class="aside">
                          <img src={img1} alt='bird' />;
                           <img src={img2} alt='bird' />;
                           <img src={img3} alt='bird' />;
                           <img src={img4} alt='bird' />;
              </div>
                  </aside>
                  </main>

       <div className="fontbg">
       	<article>
        		<p>Created by: Veranga,Perlyrey // Castasus,Nathaniel - ©</p>
        		<p><a href="#">Parrot.icon</a> by Pinterest.</p>
    		</article>
        </div>
        </div>
        </div>
        
  );

}

export default App;
