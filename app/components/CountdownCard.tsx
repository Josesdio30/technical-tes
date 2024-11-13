import React, { useEffect, useRef } from 'react';

interface CountdownCardProps {
  value: number;
  label: string;
}

const CountdownCard: React.FC<CountdownCardProps> = ({ value, label }) => {
  const displayTopRef = useRef<HTMLDivElement>(null);
  const displayBottomRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const overlayTopRef = useRef<HTMLDivElement>(null);
  const overlayBottomRef = useRef<HTMLDivElement>(null);

  // Format value as two digits (e.g., "09" for 9)
  const formattedValue = String(value).padStart(2, '0');

  useEffect(() => {
    if (
      displayTopRef.current &&
      displayTopRef.current.textContent === formattedValue
    ) {
      return;
    }

    overlayRef.current?.classList.add('flip');

    if (displayTopRef.current) displayTopRef.current.textContent = formattedValue;
    if (overlayBottomRef.current) overlayBottomRef.current.textContent = formattedValue;

    const handleAnimationEnd = () => {
      overlayRef.current?.classList.remove('flip');
      if (displayBottomRef.current) displayBottomRef.current.textContent = formattedValue;
      if (overlayTopRef.current) overlayTopRef.current.textContent = formattedValue;
    };

    overlayRef.current?.addEventListener('animationend', handleAnimationEnd);

    return () => {
      overlayRef.current?.removeEventListener('animationend', handleAnimationEnd);
    };
  }, [formattedValue]);

  return (
    <div className="time-section">
      <div className="time-group">
        <div className="time-segment">
          <div className="segment-display">
            <div ref={displayTopRef} className="segment-display__top"></div>
            <div ref={displayBottomRef} className="segment-display__bottom"></div>
            <div ref={overlayRef} className="segment-overlay">
              <div ref={overlayTopRef} className="segment-overlay__top"></div>
              <div ref={overlayBottomRef} className="segment-overlay__bottom"></div>
            </div>
          </div>
        </div>
      </div>
      <p>{label}</p>
    </div>
  );
};

export default CountdownCard;