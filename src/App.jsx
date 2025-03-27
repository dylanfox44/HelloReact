import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const movie1 = {
  title: 'The Shawshank Redemption',
  director: 'Frank Darabont',
  release: 'October 14, 1994',
  image: '/images/movie1.jpg',
  height: '378',
  width: '264'
};

const movie2 = {
  title: 'Inception',
  director: 'Christopher Nolan',
  release: 'July 13, 2010',
  image: '/images/movie2.jpg',
  height: '378',
  width: '264'
};

const movie3 = {
  title: 'The Shawshank Redemption',
  director: 'Frank Darabont',
  release: 'October 14, 1994',
  image: '/images/movie1.jpg',
  height: '378',
  width: '264'
};

function Movie() {
  return (
    <div>
      <h2>{movie1.title} ({movie1.release})</h2>
      <p>{movie1.director}</p>
      <img className="moviePoster"
      src={movie1.image}
      alt={movie1.title + ' poster'}
      style={{
        width: movie1.width,
        height: movie1.height
      }}
      />
    </div>
  );
}

function Movie2() {
  return (
    <div>
      <h2>{movie1.title} ({movie1.release})</h2>
      <p>{movie1.director}</p>
      <img className="moviePoster"
      src={movie1.image}
      alt={movie1.title + ' poster'}
      style={{
        width: movie1.width,
        height: movie1.height
      }}
      />
    </div>
  );
}

function Movie3() {
  return (
    <div>
      <h2>{movie1.title} ({movie1.release})</h2>
      <p>{movie1.director}</p>
      <img className="moviePoster"
      src={movie1.image}
      alt={movie1.title + ' poster'}
      style={{
        width: movie1.width,
        height: movie1.height
      }}
      />
    </div>
  );
}

function App() {
  
  return (
    <>
    <Movie />
    <Movie2 />
    <Movie3 />
    </>
  )
}

export default App
