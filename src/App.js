import { BrowserRouter } from "react-router-dom";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import GIcon from "./assets/images/google-icon.png";
import { useEffect, useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(new Date());
  const [file, setFile] = useState(<>Select File Type</>);
  const fileType = [
    {
      id: 1,
      title: "Video",
      extension: "mkv|mp4|avi|mov|mpg|wmv|divx|mpeg",
      icon: "far-regular fa-video",
    },
    {
      id: 2,
      title: "PDF/Doc",
      extension:
        "MOBI|CBZ|CBR|CBC|CHM|EPUB|FB2|LIT|LRF|ODT|PDF|PRC|PDB|PML|RB|RTF|TCR|DOC|DOCX",
      icon: "far-regular fa-file",
    },
    {
      id: 3,
      title: "Music",
      extension: "mp3|wav|ac3|ogg|flac|wma|m4a|aac|mod",
      icon: "far-regular fa-music",
    },
    {
      id: 4,
      title: "Software/Games",
      extension: "exe|iso|dmg|tar|7z|bz2|gz|rar|zip|apk",
      icon: "far-regular fa-compact-disc",
    },
    {
      id: 5,
      title: "Image",
      extension: "jpg|png|bmp|gif|tif|tiff|psd",
      icon: "far-regular fa-image",
    },
    {
      id: 6,
      title: "Other",
      extension: "",
      icon: "far-regular fa-gear",
    },
  ];

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleFile = (selectedFile) => {
    setFile(
      <>
        <FontAwesomeIcon
          className="mr-2"
          icon={selectedFile.icon}
        ></FontAwesomeIcon>
        {selectedFile.title}
      </>
    );
  };

  return (
    <BrowserRouter>
      <div
        style={{
          "--image-url": `url(${"https://source.unsplash.com/random/1920x1080?nature-dark"})`,
        }}
        className="min-h-screen min-w-full bg-[image:var(--image-url)] bg-cover bg-center bg-no-repeat"
      >
        <div className="flex justify-center items-center h-screen flex-col">
          <div className="flex gap-[0.2rem] flex-wrap justify-center">
            <div className="flex md:flex-row flex-col md:gap-[2px] gap-[5px]">
              <div className="flex items-center gap-3 bg-[rgb(255_255_255_/_10%)] pl-4 rounded-[0.2rem] backdrop-blur-[10px]">
                <img src={GIcon} alt="" className="h-6" />
                <input
                  type="text"
                  placeholder="Search anything"
                  className="outline-none text-[rgb(255_255_255_/_80%)] text-base border-[none]  w-full h-[3.25rem] bg-transparent pl-2 p-4  placeholder:text-[rgb(255_255_255_/_80%)]"
                />
              </div>

              <div
                onClick={handleOpen}
                className="z-10 flex p-4 mr-0 bg-[rgb(255_255_255_/_10%)] text-[rgb(255_255_255_/_80%)] text-base border-[none] focus:bg-[rgb(255_255_255_/_16%)] cursor-pointer rounded-[0.2rem] backdrop-blur-[10px]"
              >
                <button>{file}</button>
                {open ? (
                  <ul className="shadow-[0px_10px_50px_9px_rgba(0,0,0,0.2)] top-[3.4rem] left-0 absolute list-none mx-0 my-[5px] p-0 bg-[rgb(255_255_255_/_10%)] min-w-[199px] backdrop-blur-[10px]">
                    {fileType.map((file, index) => {
                      return (
                        <li key={index} onClick={() => handleFile(file)}>
                          <div className="w-full p-2 pl-3 font-semibold text-base border-[none] hover:bg-[#eee] hover:text-gray-700 cursor-pointer bg-[rgb(255_255_255_/_10%)] backdrop-blur-[100px]">
                            <FontAwesomeIcon
                              className="mr-2"
                              icon={file.icon}
                            ></FontAwesomeIcon>
                            {file.title}
                          </div>
                        </li>
                      );
                    })}

                    {/* <li className="menu-item">
                    <button className="w-full p-2 text-[rgb(255_255_255_/_80%)] text-base border-[none] hover:bg-[rgb(255_255_255_/_16%)] cursor-pointer backdrop-blur-[10px]">
                      Menu 2
                    </button>
                  </li> */}
                  </ul>
                ) : null}
                {/* {open ? <div>Is Open</div> : <div>Is Closed</div>} */}
              </div>
            </div>

            <button
              className=" bg-[rgb(255_255_255_/_10%)] text-[rgb(255_255_255_/_80%)] text-base border-[none] focus:bg-[rgb(255_255_255_/_16%)] w-14 cursor-pointer rounded-[0.2rem] backdrop-blur-[10px]"
              type="button"
            >
              <FontAwesomeIcon icon="far-regular fa-search"></FontAwesomeIcon>
            </button>
          </div>
          <div className="flex justify-center items-center mt-28 md:h-3/6 h-2/6 md:w-[70%] w-[80%] bg-[rgb(255_255_255_/_10%)] text-[rgb(255_255_255_/_80%)] border-[none] rounded-[0.2rem] backdrop-blur-[10px]">
            <div className="clock">
              <div className="md:block hidden text-4xl text-center">
                {time.toDateString()}
              </div>
              <ul>
                <li className="md:inline text-[7em] md:text-[10em] text-center leading-[90px]">
                  {time.getHours()}
                </li>
                <li className="md:inline hidden text-[7em] md:text-[10em] text-center relative px-2.5">
                  :
                </li>
                <li className="md:inline text-[7em] md:text-[10em] text-center leading-[90px]">
                  {time.getMinutes()}
                </li>
                <li className="md:inline hidden text-[7em] md:text-[10em] text-center relative px-2.5">
                  :
                </li>
                <li className="md:inline hidden text-[7em] md:text-[10em] text-center">
                  {time.getSeconds()}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
library.add(fab, fas, far);
