import React, { useRef } from "react";
import External_render from "./Components/External_render";
import HowAreYou from "./Components/HowAreYou";
import { Link, animateScroll as scroll } from 'react-scroll';

function App() {
  const externalRenderRef = useRef(null);

  const scrollToExternalRender = () => {
    scroll.scrollTo(externalRenderRef.current.offsetTop);
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 flex flex-col justify-center items-center p-4">
      <HowAreYou onEmojiSelect={scrollToExternalRender} />
      <External_render
        ref={externalRenderRef}
        link="https://en.wikipedia.org/wiki/Main_Page"
        title="Wikipedia"
        width="70%"
        height="600px"
      />
      <Link to="external-render" smooth={true} duration={500}>
      </Link>
    </div>
  );
}

export default App;
