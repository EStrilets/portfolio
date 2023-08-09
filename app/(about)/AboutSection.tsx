
const AboutSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#1B263E] gap-8">
      <div
        className="
        flex flex-col 
        w-full max-w-4xl
        items-start justify-center 
        font-bold text-3xl
        mt-[3rem]
        text-violet-50
        "
      >
        <div>
          <h1>About me</h1>
        </div>
      </div>
      <div className="flex max-w-4xl mb-[3rem] text-violet-50">
        <div className="flex-1">
          <div className="flex flex-col items-start justify-start space-y-4">
            <h2 className="text-3xl font-semibold font-sans">
              Full Stack Developer
            </h2>
            <p className="text-xl font-sans leading-9">
              I build accessible, inclusive products and digital <br />
              experiences for the web.
            </p>
          </div>
        </div>
        <div className="flex-1 ml-2 space-y-4 items-start justify-start">
          <div>
            <h1 className="text-xl font-sans leading-9">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </h1>
          </div>
          <p className="text-xl font-sans leading-9">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of
          </p>
        </div>
      </div>
      <div
        className="
        flex flex-col 
        w-full max-w-4xl
        items-start justify-center 
        font-bold text-3xl
        mb-[3rem]
        text-violet-50
        "
      >
        <div></div>
      </div>
    </div>
  );
};

export default AboutSection;
