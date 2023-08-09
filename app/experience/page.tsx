"use client";
import experience from '@/data/experience'

interface ExperienceCardProps { 
  position?: string,
  company?: string,
  date?: string,
  description?: string,
  headerPoints?: string,
  bodyPoints?: string,
}
const ExperienceCard:React.FC<ExperienceCardProps> = (props) => {
  return (
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
      <div className="space-y-16 mb-[3rem]">
        <div className="flex items-start space-x-5">
          <p className="flex items-center h-8 text-sm text-[#87A9F8]">{props.date}</p>
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between space-x-4 mb-7">
              <h1>{props.position}</h1>
              <h1 className="whitespace-nowrap text-base text-[#5686f5]">
                {props.company}
              </h1>
            </div>
            <div>
              <p className="text-lg leading-9 font-medium mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum
                nec varius. Et diam cursus quis sed purus nam. Scelerisque amet
                elit non sit ut tincidunt condimentum. Nisl ultrices eu
                venenatis diam.
              </p>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 fill-current dark:text-violet-400"
                >
                  <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                  <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                </svg>
                <h1 className="text-lg font-semibold">
                  Quis velit quae similique maxime optio temporibus
                </h1>
              </div>
              <p className="ml-7 text-base font-medium">
                Illum hic placeat unde porro, cupiditate nesciunt? Numquam
                debitis eligendi aspernatur mum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8">
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
        <div className="mb-6">
          <h1>Experience</h1>
        </div>
        {experience.map((item) => (
          <ExperienceCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
