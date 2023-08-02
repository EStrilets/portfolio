import Image from "next/image";

const Experiecne = () => {
    return (
      <main className="flex flex-col items-center justify-between p-24 lg:mt-20 space-y-12">
        <Image src="/experienceheader.svg" alt="An SVG of an eye" width={500} height={500} className='my-4' />
      <div className="flex flex-row z-10 w-full max-w-6xl items-start justify-between m-2 flex-1 space-x-12">
        <div className="flex-auto w-3/6">
          <div className="flex-auto flex-col items-start justify-start space-y-4 bg-white p-12 h-[40vh] rounded-2xl">
            <h1 className="text-5xl font-semibold font-sans">Yevhenii Strilets</h1>
            <h2 className="text-3xl font-semibold font-sans">Full Stack Developer</h2>
            <p className="text-xl font-sans">
              I build accessible, inclusive products and digital <br />
              experiences for the web.
            </p>
          </div>  
        </div>
        <div className="flex-auto w-2/6 h-[40vh] items-start justify-start p-12 space-y-4 bg-white rounded-2xl">
          <p className="text-xl font-sans">
            My main focus these days is building products and leading projects for
            our clients at Upstatement. In my free time, Ive also released an
            online video course that covers everything you need to know to build a
            web app with the Spotify API.
          </p>
        </div>
      </div>
      <div className="flex flex-row z-10 w-full max-w-6xl items-start justify-between m-2 flex-1 space-x-12">
      <div className="flex-auto w-2/6 h-[40vh] items-start justify-start p-12 space-y-4 bg-white rounded-2xl">
          <p className="text-xl font-sans">
            My main focus these days is building products and leading projects for
            our clients at Upstatement. In my free time, Ive also released an
            online video course that covers everything you need to know to build a
            web app with the Spotify API.
          </p>
        </div>
        <div className="flex-auto w-3/6">
          <div className="flex-auto flex-col items-start justify-start space-y-4 bg-white p-12 h-[40vh] rounded-2xl">
            <h1 className="text-5xl font-semibold font-sans">Yevhenii Strilets</h1>
            <h2 className="text-3xl font-semibold font-sans">Full Stack Developer</h2>
            <p className="text-xl font-sans">
              I build accessible, inclusive products and digital <br />
              experiences for the web.
            </p>
          </div>  
        </div>
      </div>
    </main>
    );
}
 
export default Experiecne;