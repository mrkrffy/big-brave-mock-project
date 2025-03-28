import videoBg from "/src/assets/coffee-making.mp4"; // Import the video

const MainVideo = () => {
  return (
    <div
      id="main-video-section"
      className="flex flex-col lg:flex-row items-center justify-between lg:px-20 py-20  text-white lg:space-x-20 lg:space-y-0 space-y-10"
    >
      <div className="lg:w-2/5 text-center lg:text-left lg:px-0 px-10">
        <h2 className="text-4xl font-bold mb-4">Experience the Best Coffee</h2>
        <p className="text-lg text-gray-300 mb-6">
          Big Brave Coffee offers the richest flavors and smoothest blends for
          coffee lovers.
        </p>
        <button className="px-6 py-3 bg-orange-400 text-orange-200 font-semibold rounded-lg hover:bg-yellow-600 transition">
          Learn More
        </button>
      </div>

      <div className="lg:w-3/5 mt-8 lg:mt-0">
        <video
          className="w-full lg:h-[600px] h-[480px] rounded-lg shadow-lg bg-black object-cover"
          src={videoBg}
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
};
export default MainVideo;
