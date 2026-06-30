const VideoPlayer = ({ videoSrc }: { videoSrc: string }) => {
  return (
    <div className="w-full flex items-center justify-center px-4">
      <div className="flex flex-col items-center w-full">
        <div className="relative w-full max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw] bg-black rounded-lg overflow-hidden">

          {/* YouTube Embed with responsive aspect ratio */}
          <div className="relative pt-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={videoSrc}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube Video"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
