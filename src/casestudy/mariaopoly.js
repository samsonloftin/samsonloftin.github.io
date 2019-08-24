import React, { Component } from 'react'
import mp01 from './img/mp01.jpg'
import mp02 from './img/mp02.jpg'
import mp03 from './img/mp03.jpg'
import mp04 from './img/mp04.jpg'
import mp05 from './img/mp05.jpg'

class Mariaopoly extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
 
  render() {
    return (
      <div className='casestudy'>
        <h1>Maria-poly</h1>

        <p className='text-container'>
          Maria-opoly is an alternative version of Monopoly. 
          I wanted to do this project because Monopoly is my girlfriend's favorite board game 
          and I thought it would be awesome to create a version that was all about her for our anniversary. 
          I also never designed a physical product or even designed solely on an iPad Pro. 
          So this project was definitely an exciting challenge.
        </p>
      
      <div className='casestudy-info'>
        <div className='tools'>
          <h3 className='casestudy-title'>Timeframe</h3>
          <p>4 Months</p>
        </div>

        <div className='timeframe'>
          <h3 className='casestudy-title'>Tools</h3>
          <p>iPad Pro, ProCreate, Affinity Photos</p>
        </div>
      </div>

        <img src= { mp01 } alt='Maria-opoly Board Game' className='casestudy-img' />

        <h3 className='casestudy-title'>Is It Possible</h3>
        <p className='text-container'>
          Before I could begin designing, I looked into printing a board game. 
          Luckily, I came across a website called The Game Crafter. 
          They not only specialize in printing custom tabletop games. custom printing games, 
          but provide plenty of templates to assure my designs are printed properly.
        </p>

        <h3 className='casestudy-title'>Redesign, Not Reinvent</h3>
        <p className='text-container'>
          I had full freedom over this redesign; however, 
          I didn't want for it to become a reinvention of Monopoly because my girlfriend loves Monopoly. 
          I ended up playing the redesign too safe, which lead to the first design, 
          bottom half of the image below. I wasn't too happy with the design, which lead to the final design, 
          top half of the image below.
        </p>
        
        <img src= { mp02 } alt='Maria-opoly gameboard designs' className='casestudy-img'/>

        <h3 className='casestudy-title'>What's A Computer?</h3>
        <p className='text-container'>
          This entire project was designed on an iPad Pro. I never thought it was possible, 
          but as I challenged myself to experiment with different applications. 
          I learned how powerful of a device the iPad Pro is. Everything was designed in ProCreate, 
          but was all assembled in Affinity Photos.
        </p>
        
        <div className='imageGroup'>
          <img src= { mp03 } alt='Maria-opoly card designs' className='casestudy-img' id='mp03'/>
          <img src= { mp04 } alt='Maria-opoly physical product close ups' className='casestudy-img' id='mp04'/>
          <img src= { mp05 } alt='Maria-opoly card designs' className='casestudy-img' id='mp05' />
        </div>

        <h3 className='casestudy-title'>Summary</h3>
        <p className='text-container'>
          The project has been a very fun experience. I learned a lot about what I'm capable of. 
          Seeing my design on a physical product was inspiring and motivating. 
          I'm also seeing aspects where I'm able to improve my workflow on the iPad 
          as well as my approach to the project as well.
        </p>
        
      </div>
    )
  }
}

export default Mariaopoly;