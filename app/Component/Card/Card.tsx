import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div>
      <div className='Card rounded-lg border bg-card text-card-foreground shadow-sm'>
        <div className='p-6 pt-6'>
          <i className='bx bx-search-alt-2 text-5xl'></i>
          <h2 className="font-bold mb-2">{title}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
