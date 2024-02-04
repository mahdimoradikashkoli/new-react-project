/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {createContext, useState } from "react";

export const store = createContext({
  showPasswordImg:false,
  setShowPasswordImg: (value: boolean) => {},
  playSong:(value:any)=>{},
  stopSong:(value:any)=>{},
  curentSong:'',
  setCurentSong:()=>{},
});

export const storeProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [showPasswordImg, setShowPasswordImg] =useState<boolean>(false);
  const [curentSong,setCurentSong]=useState<any>()

  const playSong=(song:any)=>{
    song.play()
    setCurentSong(song)
  }

  const stopSong=(song:any)=>{
    song.pause()
    setCurentSong(null)
  }
  

  return (
    <store.Provider
      value={{
        showPasswordImg,
        setShowPasswordImg,
        playSong,
        stopSong,
        curentSong,
        setCurentSong:()=>{}
      }}
    >
      {props.children}
    </store.Provider>
  );
};
