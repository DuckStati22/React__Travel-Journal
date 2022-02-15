import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import data from './data';

function App() {
  const cards = data.map(card => {
    return (<Card
      key={card.id}
      {...card}
    />
    )
  })
  return (
    <div className="container">
      <Header />
      <main className="main">
        {cards}
      </main>
    </div>
    
  );
}

export default App;