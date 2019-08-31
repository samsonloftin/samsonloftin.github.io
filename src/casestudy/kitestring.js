import React, { Component } from 'react'
import ks01 from './img/ks01.jpg'
import ks02 from './img/ks02.jpg'
import ks05 from './img/ks05.jpg'
import ks06 from './img/ks06.jpg'
import ks07 from './img/ks07.jpg'
class KiteString extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
 
  render() {
    return (
      <div className='casestudy'>
        <h1>Kite & String</h1>

        <p className='text-container'>
          Kite & String is an animated series about the adventures 
          between a ball of string and a kite. I was contracted to 
          animate episode 2.
        </p>
      
        <div className='tools'>
          <h3 className='casestudy-title'>Tools</h3>
          <p>Adobe Animate, Adobe Photoshop</p>
        </div>

        <div className='video-container'>
          <iframe 
            title="Kite & String Animation" aria-label="Kite & String Animation" 
            width="560" height="315" src="https://www.youtube.com/embed/DROHyuFNsrk" frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
          </iframe>
        </div>

        <h3 className='casestudy-title'>Original Designs</h3>
        <p className='text-container'>
          My client gave me the choice between redesigning the characters 
          or reusing the characters from episode one. I ultimately chose 
          to redesign because I wanted to see what more I could do with the 
          original designs.
        </p>

        <img src= { ks07 } alt='Kite & String Original Design' className='casestudy-img' id='ks07' />

        <h3 className='casestudy-title'>Character Designs</h3>
        <p className='text-container'>
          The three images below are the character designs I ultimately 
          chose to go with. Using elements of the original design mixed 
          into my own style. I chose a more muted color theme for a very 
          soft look. Once the client approved the new redesigns, I moved 
          onto the animatics.
        </p>

        <div className='imageGroup'>
          <img src= { ks02 } alt='Kite & String Character Design' className='casestudy-img' id='ksDesign'/>
        </div>

        <h3 className='casestudy-title'>Animatics</h3>
        <p className='text-container'>
          The client wrote the script & provided great details into what 
          characters should be doing. It was a tremendous help in creating 
          the storyboard & animatics. The client also had the casting done 
          so I was able to quickly jump into creating an animatic. 
          The animatic process allowed myself & the client to rapidly change 
          scene transitions, pacing, and basic character placements without 
          much trouble.
        </p>

        <h3 className='casestudy-title'>Final Animation</h3>
        <p className='text-container'>
          Using the animatics as my base, I was able to quickly 
          add all the fancy animations, colors, and props to make 
          the animation come to life giving my client an update week 
          to week.
        </p>
        
        <div className='imageGroup'>
          <img src= { ks05 } alt='Kite & String Final' className='casestudy-img' id='ksAnimatic'/>
          <img src= { ks06 } alt='Kite & String Animatic' className='casestudy-img' id='ksAnimatic'/>
        </div>

        <h3 className='casestudy-title'>Summary</h3>
        <p className='text-container'>
          It has been an awesome experience animating such a neat series. 
          What was most challenging about this project was making sure this 
          is how the client imagined their script to be animated. The client did 
          offer me to continue animating for episode 3 so that's a great sign! 
          Unfortunately, I wasn't able to commit the time to animating episode 3, 
          at that time.
        </p>

        <img src= { ks01 } alt='Kite & String Background' className='casestudy-img' />

      </div>
    )
  }
}

export default KiteString;