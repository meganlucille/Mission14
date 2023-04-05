import React from 'react';
import imageSource from './JoelHiltonHeadshot(1).jpg';

function Home() {
  return (
    <div>
      <h1> Welcome to Joel Hilton's Movie Collection</h1>
      <p>
        {' '}
        This site has two additional pages, one with a link to a podcast, and
        the other shows his movie collection.{' '}
      </p>{' '}
      <br></br>
      <img src={imageSource} alt="Hilton's bro" />
    </div>
  );
}

export default Home;
