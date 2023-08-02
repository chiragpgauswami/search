import { BrowserRouter } from "react-router-dom";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import GIcon from "./assets/images/google-icon.png";
// import Tilt from "react-parallax-tilt";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          "--image-url": `url(${"https://source.unsplash.com/random/1920x1080?nature-dark"})`,
        }}
        className="min-h-screen min-w-full bg-[image:var(--image-url)] bg-cover bg-center bg-no-repeat"
      >
        <div className="flex justify-center items-center h-[35vh]">
          <div className="flex gap-[0.2rem]">
            <div className="flex items-center gap-3 bg-[rgb(255_255_255_/_10%)] pl-4 rounded-[0.2rem] backdrop-blur-[10px]">
              <img src={GIcon} alt="" className="h-6" />
              <input
                type="text"
                placeholder="Search anything"
                className="outline-none text-[rgb(255_255_255_/_80%)] text-base border-[none]  w-full h-[3.25rem] bg-transparent pl-2 p-4  placeholder:text-[rgb(255_255_255_/_80%)]"
              />
            </div>

            <button
              className="rounded-br-lg bg-[rgb(255_255_255_/_10%)] text-[rgb(255_255_255_/_80%)] text-base border-[none] focus:bg-[rgb(255_255_255_/_16%)] w-14 cursor-pointer rounded-[0.2rem] backdrop-blur-[10px]"
              type="button"
            >
              <FontAwesomeIcon icon="far-regular fa-search"></FontAwesomeIcon>
            </button>

            {/* <button
              className="bg-[rgb(255_255_255_/_10%)] text-[rgb(255_255_255_/_80%)] text-base border-[none] focus:bg-[rgb(255_255_255_/_16%)] w-14 cursor-pointer rounded-[0.2rem] backdrop-blur-[10px]"
              type="button"
            >
              <FontAwesomeIcon icon="far-regular fa-microphone"></FontAwesomeIcon>
            </button> */}

           
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
library.add(fab, fas, far);
