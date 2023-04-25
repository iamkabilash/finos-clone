import bannerMd from "../assets/banner-md.png";

function Banner() {
  return (
    <section id="banner" className="w-screen h-[90vh] px-[80px] flex flex-row items-center justify-between">
      <div className="flex flex-col gap-[70px]">
        <h1 className="text-6xl font-bold py-[5px]">
          The Cloud Core
          <br />
          Banking Platform
        </h1>
        <p className="text-2xl font-bold">
          Digitalizing Banks & Financial Institutions.
        </p>
        <a href="https://www.finos.tech/contact/">
          <button className="w-[200px] px-[20px] py-[6px] bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white text-lg font-bold rounded-xl">
            Request Demo
          </button>
        </a>
      </div>
      <div className="flex">
        <img src={bannerMd} alt="banner-image" className="w-[45vw]" />
      </div>
    </section>
  );
}

export default Banner;
