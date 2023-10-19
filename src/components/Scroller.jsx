import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Movies from './Movies';

const Scroller = ({ activeGenres }) => {
  return (
    <ScrollToBottom className='scroller'>
      <Movies activeGenres={activeGenres} />
    </ScrollToBottom>
  );
};

export default Scroller;
