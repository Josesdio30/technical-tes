import React, { useEffect } from 'react';


const Countdown: React.FC = () => {
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 5);

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      const isComplete = updateAllSegments();
      if (isComplete) clearInterval(countdownTimer);
    }, 1000);

    updateAllSegments();

    return () => clearInterval(countdownTimer); // Cleanup interval on component unmount
  }, []);

  function getTimeSegmentElements(segmentElement: HTMLElement) {
    const segmentDisplay = segmentElement.querySelector('.segment-display') as HTMLElement;
    const segmentDisplayTop = segmentDisplay.querySelector('.segment-display__top') as HTMLElement;
    const segmentDisplayBottom = segmentDisplay.querySelector('.segment-display__bottom') as HTMLElement;
    const segmentOverlay = segmentDisplay.querySelector('.segment-overlay') as HTMLElement;
    const segmentOverlayTop = segmentOverlay.querySelector('.segment-overlay__top') as HTMLElement;
    const segmentOverlayBottom = segmentOverlay.querySelector('.segment-overlay__bottom') as HTMLElement;

    return {
      segmentDisplayTop,
      segmentDisplayBottom,
      segmentOverlay,
      segmentOverlayTop,
      segmentOverlayBottom,
    };
  }

  function updateSegmentValues(displayElement: HTMLElement, overlayElement: HTMLElement, value: number) {
    displayElement.textContent = value.toString();
    overlayElement.textContent = value.toString();
  }

  function updateTimeSegment(segmentElement: HTMLElement, timeValue: number) {
    const segmentElements = getTimeSegmentElements(segmentElement);

    if (parseInt(segmentElements.segmentDisplayTop.textContent || '0', 10) === timeValue) return;

    segmentElements.segmentOverlay.classList.add('flip');

    updateSegmentValues(segmentElements.segmentDisplayTop, segmentElements.segmentOverlayBottom, timeValue);

    function finishAnimation(this: HTMLElement) {
      segmentElements.segmentOverlay.classList.remove('flip');
      updateSegmentValues(segmentElements.segmentDisplayBottom, segmentElements.segmentOverlayTop, timeValue);
      this.removeEventListener('animationend', finishAnimation);
    }

    segmentElements.segmentOverlay.addEventListener('animationend', finishAnimation);
  }

  function updateTimeSection(sectionID: string, timeValue: number) {
    
    const paddedValue = String(timeValue).padStart(2, '0');
    const firstNumber = parseInt(paddedValue[0], 10);
    const secondNumber = parseInt(paddedValue[1], 10);
    const sectionElement = document.getElementById(sectionID) as HTMLElement;
    const timeSegments = sectionElement.querySelectorAll('.time-segment');
    
    updateTimeSegment(timeSegments[0] as HTMLElement, firstNumber);
    updateTimeSegment(timeSegments[1] as HTMLElement, secondNumber);
  }

  function getTimeRemaining(targetDateTime: number) {
    const nowTime = Date.now();
    const complete = nowTime >= targetDateTime;

    if (complete) {
      return { complete, seconds: 0, minutes: 0, hours: 0 };
    }

    const secondsRemaining = Math.floor((targetDateTime - nowTime) / 1000);
    const hours = Math.floor(secondsRemaining / 3600);
    const minutes = Math.floor(secondsRemaining / 60) - hours * 60;
    const seconds = secondsRemaining % 60;

    return { complete, seconds, minutes, hours };
  }

  function updateAllSegments() {
    const timeRemainingBits = getTimeRemaining(targetDate.getTime());

    updateTimeSection('seconds', timeRemainingBits.seconds);
    updateTimeSection('minutes', timeRemainingBits.minutes);
    updateTimeSection('hours', timeRemainingBits.hours);

    return timeRemainingBits.complete;
  }

  return (
    <div className="countdown">
      <div className="time-section" id="hours">
        <div className="time-group">
          <div className="time-segment">
            <div className="segment-display">
              <div className="segment-display__top"></div>
              <div className="segment-display__bottom"></div>
              <div className="segment-overlay">
                <div className="segment-overlay__top"></div>
                <div className="segment-overlay__bottom"></div>
              </div>
            </div>
          </div>
          <div className="time-segment">
            <div className="segment-display">
              <div className="segment-display__top"></div>
              <div className="segment-display__bottom"></div>
              <div className="segment-overlay">
                <div className="segment-overlay__top"></div>
                <div className="segment-overlay__bottom"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <p>Hours</p> */}
      </div>

      <div className="time-section" id="minutes">
        <div className="time-group">
          <div className="time-segment">
            <div className="segment-display">
              <div className="segment-display__top"></div>
              <div className="segment-display__bottom"></div>
              <div className="segment-overlay">
                <div className="segment-overlay__top"></div>
                <div className="segment-overlay__bottom"></div>
              </div>
            </div>
          </div>
          <div className="time-segment">
            <div className="segment-display">
              <div className="segment-display__top"></div>
              <div className="segment-display__bottom"></div>
              <div className="segment-overlay">
                <div className="segment-overlay__top"></div>
                <div className="segment-overlay__bottom"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <p>Minutes</p> */}
      </div>

      <div className="time-section" id="seconds">
        <div className="time-group">
          <div className="time-segment">
            <div className="segment-display">
              <div className="segment-display__top"></div>
              <div className="segment-display__bottom"></div>
              <div className="segment-overlay">
                <div className="segment-overlay__top"></div>
                <div className="segment-overlay__bottom"></div>
              </div>
            </div>
          </div>
          <div className="time-segment">
            <div className="segment-display">
              <div className="segment-display__top"></div>
              <div className="segment-display__bottom"></div>
              <div className="segment-overlay">
                <div className="segment-overlay__top"></div>
                <div className="segment-overlay__bottom"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <p>Seconds</p> */}
      </div>
    </div>
  );
};

export default Countdown;