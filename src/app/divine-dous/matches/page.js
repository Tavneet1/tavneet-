"use client"
import MatchesCard from '@/DivineComponents/MatchesCard'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
export default function page() {

  const [matches, setMatches] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get('/Matches.json')
      .then(response => {
        setMatches(response.data);
      })
      .catch(error => {
        console.error('Error fetching the JSON file', error);
      });
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % matches.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + matches.length) % matches.length);
  };

  if (matches.length === 0) {
    return <p>No matches found.</p>;
  }

  return (
    <div className='flex flex-col justify-center items-center gap-5 py-5 px-0 lg:px-11 lg:px-36'>
    <MatchesCard
     item={matches[currentIndex]}
     onNext={handleNext}
     onPrevious={handlePrevious}
   />
   </div>
  )
}
