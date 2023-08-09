
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
        scroll-mt-40
        "
        id="about-section"
      >
        <div>
          <h1>About me</h1>
        </div>
      </div>
      <div className="flex max-w-4xl mb-[3rem] text-violet-50 space-x-8">
        <div className="flex-1">
          <div className="flex flex-col items-start justify-start space-y-4">
            <p className="text-xl font-sans leading-9">
              I&apos;ve been building products and digital experiences for the
              web since 2020. My inexhaustible curiosity and love for web
              technologies and design led me to attend <br />{" "}
              <strong className="text-text">
                Simon Fraser University (SFU)
              </strong>
              , where I earned <br /> my Bachelor&apos; Degree of Science with
              a major in Computer Science.
            </p>
            <p className="text-xl font-sans leading-9">
              As my first big project, I gathered a team of 3 developers and
              started to develop the full-stack application for the university
              experience. My experiments and projects eventually got me my first
              job out of university at{" "}
              <strong className="text-text">Tiggy</strong>.
            </p>
          </div>
        </div>
        <div className="flex-1 ml-2 space-y-4 items-start justify-start">
          <div>
            <p className="text-xl font-sans leading-9">
              There I have been working on a delivery app and nd received an
              incredible amount of skills and knowledge starting from setting up
              a component library to participating in extensive standup and code
              reviews. After Tiggy, I got into the web development agency{" "}
              <strong className="text-text">SEO Soul</strong>, where I developed
              a Chrome extension for company needs and delivered features to
              clients&apos; projects.
            </p>
          </div>
          <p className="text-xl font-sans leading-9">
            I&apos;ve worked in various areas of application development, including
            front-end & full-stack development, Chrome Extension, mobile and app
            UI/UX.
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
        <div>
          <button className="bg-[#262F45] rounded-md border border-solid border-[#7AA0F7]  text-[#5686f5] font-semibold text-sm leading-5 py-3 px-4 text-center glow-on-hover">
            Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
