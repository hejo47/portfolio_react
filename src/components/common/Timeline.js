import React, { useEffect, useRef } from "react";

import TimelineObserver from "react-timeline-animation";
import { fireConfetti } from "./Confetti";

import "./Confetti.css";

const Timeline = ({ setObserver, callback }) => {
  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const timeline4 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);

  const someCallback4 = () => {
    fireConfetti();
  };
  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(timeline4.current);
    setObserver(circle1.current);
    setObserver(circle2.current);
    setObserver(circle3.current);
    setObserver(circle4.current, someCallback4);
  }, []);

  return (
    <div className='wrapper'>
      <div id='timeline1' ref={timeline1} className='timeline' style={{ height: "100vh" }} />
      <div className='circleWrapper'>
        <div id='circle1' ref={circle1} className='circle'>
          1
        </div>
        {/* <div className='message'>{message1}</div> */}
      </div>
      <div id='timeline2' ref={timeline2} className='timeline' />
      <div className='circleWrapper'>
        <div id='circle2' ref={circle2} className='circle'>
          2
        </div>
        {/* <div className='message'>{message2}</div> */}
      </div>
      <div id='timeline3' ref={timeline3} className='timeline' />
      <div className='circleWrapper'>
        <div id='circle3' ref={circle3} className='circle'>
          3
        </div>
        {/* <div className='message'>{message3}</div> */}
      </div>
      <div id='timeline4' ref={timeline4} className='timeline' />
      <div className='circleWrapper'>
        <div id='circle4' ref={circle4} className='circle'>
          4
        </div>
        {/* <div className='message'>{message4}</div> */}
      </div>
    </div>
  );
};

export default function App() {
  const onCallback = () => {
    console.log("awesome");
  };

  return (
    <>
      {/* <h1>react-scroll-animation component</h1> */}
      {/* <div className='stub1'>⬇️ scroll to start ⬇️</div> */}
      <TimelineObserver initialColor='#e5e5e5' fillColor='black' handleObserve={(setObserver) => <Timeline callback={onCallback} className='timeline' setObserver={setObserver} />} />
      {/* <div className='stub2'>{message}</div> */}
    </>
  );
}
