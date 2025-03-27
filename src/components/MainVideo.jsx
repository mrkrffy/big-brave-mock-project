import videoBg from "/src/assets/coffee-making.mp4"; // Import the video

const MainVideo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-20 py-40 text-white md:space-x-20">
      <div className="md:w-2/5 text-center md:text-left">
        <h2 className="text-4xl font-bold mb-4">Experience the Best Coffee</h2>
        <p className="text-lg text-gray-300 mb-6">
          Big Brave Coffee offers the richest flavors and smoothest blends for
          coffee lovers.
        </p>
        <button className="px-6 py-3 bg-orange-400 text-orange-200 font-semibold rounded-lg hover:bg-yellow-600 transition">
          Learn More
        </button>
      </div>

      <div className="md:w-3/5 mt-8 md:mt-0">
        <video
          className="w-full h-[600px] rounded-lg shadow-lg bg-black object-cover"
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
