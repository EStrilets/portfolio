
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
      <div className="flex max-w-4xl mb-[3rem] text-violet-50 space-x-8">
        <div className="flex-1">
          <div className="flex flex-col items-start justify-start space-y-4">
            <p className="text-xl font-sans leading-9">
              I've been building products and digital experiences for the web
              since 2020. My inexhaustible curiosity and love for web technologies and design
              led me to attend <br/> Simon Fraser University (SFU), where I earned <br/> my
              Bachelor's Degree of Science with a major <br/> in Computer Science.
            </p>
            <p className="text-xl font-sans leading-9">
              As my first big project, I gathered a team of 3 developers and
              started to develop the full-stack application for the university
              experience. My experiments and projects eventually got me my first job out of
              university at <strong className="text-text">Tiggy</strong>.
            </p>
          </div>
        </div>
        <div className="flex-1 ml-2 space-y-4 items-start justify-start">
          <div>
            <p className="text-xl font-sans leading-9">
              I've worked in various areas of application development, including
              front-end & full-stuck development, Chrome Extension, mobile and
              app UI/UX.
            </p>
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
