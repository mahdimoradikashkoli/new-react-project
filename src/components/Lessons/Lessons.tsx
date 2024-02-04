import React, { useContext, useEffect, useRef, useState } from "react";
import { Howl } from "howler";
import { store } from "../../contexts";

type LessonsType = {
  src: string;
  LessonNumber: string;
  key?:string,
  subjectLesson:string
};

export const Lessons: React.FC<LessonsType> = ({ src, LessonNumber ,key,subjectLesson}) => {
  const {stopSong,playSong}=useContext(store)
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [seek, setSeek] = useState(0);
  const [duration, setDuration] = useState(0);
  const intervalId = useRef<number | null>(null);

  const musicRef = useRef<Howl | null>(
    new Howl({
      src: [`${src}`],
      html5: true,
      format: ["mp3"],
      loop: false,
    })
  );

  useEffect(() => {
    musicRef.current!.on("load", () => {
      setDuration(Math.floor(musicRef.current!.duration()));
    });

    musicRef.current!.on("end", () => {
      setSeek(0);
      setIsPlaying(false);
    });

    intervalId.current = window.setInterval(() => {
      setSeek(Math.floor(musicRef.current!.seek()));
    }, 500);

    return () => {
      clearInterval(intervalId.current!);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const ProgressBar = ({
    progress,
    onClick,
  }: {
    progress: number;
    onClick: (e: React.MouseEvent) => void;
  }) => {
    return (
      <div className={`w-44 h-1 rounded-3xl bg-slate-500 `} onClick={onClick}>
        <div
          className="h-1 bg-blue-700 rounded-3xl"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  };

  const seekTo = (e: React.MouseEvent) => {
    const seekTime =
      (e.nativeEvent.offsetX / e.currentTarget.clientWidth) * duration;
    musicRef.current!.seek(seekTime);
    setSeek(seekTime);
  };

  const playButton = () => {
    if (!isPlaying) {
      playSong(musicRef.current)
      setIsPlaying(true);
    }
  };

  const stopButton = () => {
    if (isPlaying) {
      stopSong(musicRef.current)
      setIsPlaying(false);
    }
  };

  return (
    <div key={key}>
      <div className="w-full h-16 border border-slate-300 rounded-l-full rounded-r-full px-1 flex items-center justify-between mt-1">
        <div className="w-12 h-12 rounded-full bg-slate-300 flex items-center justify-center font-medium text-xl text-blue-700">
          {LessonNumber}
        </div>
        <div>
          <h1 className="font-medium">{subjectLesson}</h1>
          <p className="text-slate-600">{formatTime(duration)}</p>
        </div>
        {isPlaying ? (
          <img
            className="w-12 h-12 rounded-full"
            onClick={stopButton}
            src="/icons/stopbutton.png"
            alt="stopbutton"
          />
        ) : (
          <img
            className="w-12 h-12 rounded-full"
            onClick={playButton}
            src="/icons/playbutton.png"
            alt="playbutton"
          />
        )}
      </div>
      {seek > 0 && seek < duration ? (
        <div className="flex justify-center mt-3">
          <div className="flex items-center gap-1">
            <span>{formatTime(Math.floor(seek))}</span>
            <ProgressBar progress={(seek / duration) * 100} onClick={seekTo} />
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      ) : null}
    </div>
  );
};
