import { useState, useCallback, useEffect } from 'react';
import ReactConfetti from 'react-confetti';

const ConfettiEffect = () => {
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const startConfetti = useCallback(() => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 5000); // Stop after 5 seconds
  }, []);

  return (
    <div>
      <button
        onClick={startConfetti}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Celebrate!
      </button>
      {isActive && (
        <ReactConfetti
          width={dimensions.width}
          height={dimensions.height}
          recycle={false}
          numberOfPieces={200}
        />
      )}
    </div>
  );
};

export default ConfettiEffect;
