'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ProfilePicture() {
  const [imageError, setImageError] = useState(false);

  return (
    <div style={{ 
      padding: '0 20px 20px 20px', 
      marginTop: '-250px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <div className="relative">
        <Image
          src={imageError ? "/images/profile.gif" : "/images/profile.jpg"}
          alt="Profile"
          width={1400}
          height={800}
          style={{
            maxWidth: '1400px',
            width: '100%',
            height: 'auto',
            border: '3px solid var(--secondary-color)',
            borderRadius: '15px',
            objectFit: 'contain',
            boxShadow: '0 0 15px rgba(91,192,190,0.5), 0 10px 30px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.02)';
            e.target.style.boxShadow = '0 0 25px rgba(91,192,190,0.7), 0 10px 30px rgba(0, 0, 0, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 0 15px rgba(91,192,190,0.5), 0 10px 30px rgba(0, 0, 0, 0.2)';
          }}
          onError={() => {
            console.error('Error loading profile image, falling back to GIF');
            setImageError(true);
          }}
        />
      </div>
    </div>
  );
} 