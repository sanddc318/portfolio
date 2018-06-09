import React from 'react'

import myPhoto from '../../public/images/me_grayscale.jpg'

const About = () => (
  <div className="outer-box outer-box--inverted">
    <div className="container container--inverted">
      <h1 className="section-header" style={{ textTransform: 'lowercase' }}>
        &nbsp; $ whoami &nbsp;
      </h1>

      <h2 className="about__intro">
        Mainly focused on the frontend. I love seeing a design come together,
        but enjoy the logic in programming even more. I guess that's just the
        INTP in me.
      </h2>

      <div className="about__photo">
        <img src={myPhoto} alt="Picture of Dontavious Sanders" />
      </div>

      <p className="about__content">
        But wait a sec, let's rewind a little first. I'm originally from{' '}
        <em>'The Good Life City'</em> of Albany, GA. Somewhere along the line, I
        got introduced to coding via codecademy and as they say, the rest is
        history.
      </p>
      <p className="about__content">
        Since then, I've dabbled with many a language -- from a some Java to PHP
        to finally settling on JavaScript. I like the fact that an entire
        project can be done in one language. I particularly like React and can
        appreciate the fact that it's really just JavaScript. My dream job would
        be working with the technology.
      </p>
      <p className="about__content">
        When I'm not trying to master code, I'm instead trying to perfect my
        fighting game craft. I am a self-proclaimed music buff and lover of bad
        movies.
      </p>
      <p className="about__content">
        I strive to learn{' '}
        <span style={{ textDecoration: 'underline' }}>something</span> everyday
        and hopefully you learned a bit about me reading this.
      </p>
    </div>
  </div>
)

export default About
