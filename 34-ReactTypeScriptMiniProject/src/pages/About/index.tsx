import InfoSection from "../../components/InfoSection";

const About = () => {
  return (
    <div>
      <div className="max-w-[1280px] mx-auto">
        <div>
          <div className="flex justify-center items-center">
            <h1 className="py-20 text-4xl md:text-6xl font-black">About Us</h1>
          </div>
          <div className="w-[60%] flex flex-col gap-5 mb-7">
            <h1 className="flex items-center gap-3 text-3xl font-bold">
              <div className="bg-red-500 h-0.5 w-10"></div>Our Mission
            </h1>
            <p className="text-gray-600">
              Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt
              labore et dolore magna aliqua. Quis ipsum suspendisces gravida.
              Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan
              lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas
              accumsan lacus.
            </p>
            <p className="text-gray-600">
              Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan
              lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas
              accumsan.
            </p>
          </div>
          <div className="w-[60%] flex flex-col gap-5 mb-20">
            <h1 className="flex items-center gap-3 text-3xl font-bold">
              <div className="bg-red-500 h-0.5 w-10"></div>Our Vision
            </h1>
            <p className="text-gray-600">
              Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt
              labore et dolore magna aliqua. Quis ipsum suspendisces gravida.
              Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan
              lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas
              accumsan lacus.
            </p>
            <p className="text-gray-600">
              Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan
              lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas
              accumsan.
            </p>
          </div>
          <InfoSection/>
        </div>
      </div>
    </div>
  );
};

export default About;
