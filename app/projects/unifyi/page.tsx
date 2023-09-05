"use client";

import ExperienceCard from "@/app/(experience)/ExprienceCard";
import UnifyiChart from "@/app/components/charts/UnifyiChart";
import MainDiagram from "@/app/components/diagrams/MainDiagram";
import Image from "next/image";
import Link from "next/link";

interface BadgeAnimatedGradientBorderProps {
  logo?: React.ReactNode;
  text?: string;
}

const BadgeAnimatedGradientBorder: React.FC<
  BadgeAnimatedGradientBorderProps
> = ({ logo, text }) => {
  return (
    <span className="relative inline-block overflow-hidden rounded-lg p-[1px]">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950/90 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        <h1 className="mr-1 text-violet-50">{text}</h1> {logo}
      </div>
    </span>
  );
};

const DefaultBadge: React.FC<BadgeAnimatedGradientBorderProps> = ({
  logo,
  text,
}) => {
  return (
    <span className="inline-flex mx-1 cursor-pointer items-center justify-center rounded-lg border border-[#1E2A45] bg-[#141B2D] px-3 py-1 text-sm font-medium text-slate-300 backdrop-blur-3xl">
      <span className="text-text">{text}</span>
    </span>
  );
};

export default function Unifyi() {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <div className="flex flex-col justify-center w-full max-w-3xl space-y-5 mt-[20rem] md:mt-[15rem] p-6 md:p-0">
        <Link href="/">
          <p className="text-violet-50 group transition-all duration-300 hover:text-text cursor-pointer">
            <span className="inline-block mr-1 transition-transform duration-300 transform translate-x-0 group-hover:-translate-x-1">
              &lt;-
            </span>
            Home
          </p>
        </Link>
        <p className="font-bold text-2xl leading-relaxed text-violet-50 md:text-3xl md:leading-loose">
          Unifyi - Microservices Web Application
        </p>
        <p className="font-medium text-sm leading-relaxed text-violet-50">
          March 2021 - June 2022 / 5min read
        </p>
      </div>
      <div className="flex flex-row justify-start w-full max-w-3xl gap-4">
        <BadgeAnimatedGradientBorder text="Microservices" />
        <BadgeAnimatedGradientBorder text="Full-stack" />
        <BadgeAnimatedGradientBorder text="Teamwork" />
        <BadgeAnimatedGradientBorder text="Start-up" />
      </div>
      <div className="flex flex-col justify-center w-full max-w-3xl space-y-5 mt-[2rem] p-6 md:p-0 scroll-mt-40" id="intro-section">
        <p className="text-2xl leading-relaxed text-violet-50 font-semibold">
          Introduction
        </p>
        <p className="font-medium text-lg leading-10 text-slate-400">
          As a member of the development team, I led a project aimed at
          simplifying the student experience at Simon Fraser University.
          <span className="text-text font-medium">
            {" "}
            The mission was to create a unified platform, offering students an
            efficient way to seek answers to their academic and campus life
            queries ✨.
          </span>{" "}
          Taking charge of both
          <DefaultBadge text="frontend" />
          and
          <span className="text-violet-50 font-medium">
            <DefaultBadge text="project management" />
          </span>
          , my responsibilities were central to the success.
        </p>
        <p className="font-medium text-lg leading-10 text-slate-400">
          This project stood out for its use of a microservice architecture,
          which encompassed over ten microservices. These components worked
          together to provide an intuitive, responsive, and personalized
          platform tailored to the needs of Simon Fraser University students.
        </p>
        <iframe
          width="450rem"
          height="250rem"
          src="https://www.youtube.com/embed/bdS4Fwc96Xs?si=wXFG937lOow9YNrx"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>
      <div className="flex flex-col justify-center w-full max-w-3xl space-y-5 mt-[2rem] p-6 md:p-0 scroll-mt-40" id="microservices-section">
        <p className="text-2xl  leading-10 text-violet-50 font-semibold">
          Understanding microservices
        </p>
        <p className="font-medium text-lg leading-10 text-slate-400">
          <span className="text-text font-semibold"> Microservices </span>
          are a software architectural approach that breaks down complex
          applications into smaller, independent services, each handling
          specific functions.
          <span className="text-violet-50 font-semibold">
            This decomposition promotes scalability, flexibility, and easier
            maintenance.
          </span>
          In this context, the outbox pattern plays a crucial role.
        </p>
        <p className="font-medium text-lg leading-10 text-slate-400">
          <span className="text-text font-semibold"> The Outbox Pattern </span>
          is a design pattern used in microservices to manage events and ensure
          data consistency. It involves two main components:
        </p>
        <ol className="list-decimal marker:text-violet-50 font-medium text-lg leading-7 text-slate-400 ml-5 space-y-6">
          <li>
            <span className="text-text font-semibold"> Outbox Table: </span>
            Each microservice maintains an &quot;outbox table&quot; within its
            database to store events that need to be shared. Each record
            contains event details.
          </li>
          <li>
            <span className="text-text font-semibold"> Event Publisher: </span>A
            dedicated component periodically checks these outbox tables,
            publishes new events to a message broker, and allows other
            microservices to subscribe and react accordingly.
          </li>
        </ol>
        <ExperienceCard>
          <MainDiagram />
        </ExperienceCard>
      </div>
      <div className="flex flex-col justify-center w-full max-w-3xl space-y-5 mt-[2rem] p-6 md:p-0 scroll-mt-40" id="overview-section">
        <p className="text-2xl  leading-10 text-violet-50 font-semibold">
          Project Overview
        </p>
        <p className="font-medium text-lg leading-10 text-slate-400">
          <span className="text-text font-semibold"> Unifyi </span> aimed to
          merge student life and academics into one platform, allowing students
          to discuss various topics, including courses, exams, and general
          matters. Its core feature was a Question and Answer (QA) system,
          enabling information exchange through questions and answers.
          Additionally, students could create specific discussion topics, with
          an integrated chat connecting all university courses.
        </p>
        <div className="grid grid-cols-2 gap-2 text-violet-50">
          <div className="col-span-1">
            <Image
              src="/unifyi2.png"
              alt="image"
              width={550}
              height={700}
              className="top-0 left-0 filter drop-shadow-lg rounded-md h-[13rem]"
            />
          </div>
          <div className="col-span-1">
            <Image
              src="/unifyi1.png"
              alt="image"
              width={550}
              height={700}
              className="top-0 left-0 filter drop-shadow-lg h-[13rem] rounded-md"
            />
          </div>
          <div className="col-span-1">
            <Image
              src="/unifyi3.png"
              alt="image"
              width={550}
              height={700}
              className="top-0 left-0 filter drop-shadow-lg h-[13rem] rounded-md"
            />
          </div>
          <div className="col-span-1">
            <Image
              src="/unifyi4.png"
              alt="image"
              width={550}
              height={700}
              className="top-0 left-0 filter drop-shadow-lg h-[13rem] rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full max-w-3xl space-y-5 mt-[1rem] p-6 md:p-0 scroll-mt-40" id="architecture-section">
        <p className="text-2xl leading-10 text-violet-50 font-semibold">
          Architecture
        </p>
        <div className="grid grid-cols-2 gap-6 text-violet-50">
          <div className="col-span-1 space-y-4">
            <h1 className="text-lg font-semibold text-text">Chat Service</h1>
            <ul className="list-disc marker:text-violet-50 ml-5 text-lg leading-8 text-slate-400">
              <li>
                The Chat Service facilitated real-time communication between
                students, instructors, and administrators.
              </li>
            </ul>
          </div>
          <div className="col-span-1 space-y-4">
            <h1 className="text-lg font-semibold text-text">
              Notification Service
            </h1>
            <ul className="list-disc marker:text-violet-50 ml-5 text-lg leading-8 text-slate-400">
              <li>
                The Notification Service handled alerting and notifications to
                keep users informed about updates, events, and important
                announcements.
              </li>
            </ul>
          </div>
          <div className="col-span-1 space-y-4">
            <h1 className="text-lg font-semibold text-text">
              Questions and Tags Service
            </h1>
            <ul className="list-disc marker:text-violet-50 ml-5 text-lg leading-8 text-slate-400">
              <li>
                The Question and Tags Service managed the querying and tagging
                of questions related to courses and student life.
              </li>
            </ul>
          </div>
          <div className="col-span-1 space-y-4">
            <h1 className="text-lg font-semibold text-text">Courses Service</h1>
            <ul className="list-disc marker:text-violet-50 ml-5 text-lg leading-8 text-slate-400">
              <li>
                The Courses Service provided essential course-related
                information, including schedules, materials, and announcements.
              </li>
            </ul>
          </div>
          <div className="col-span-1 space-y-4">
            <h1 className="text-lg font-semibold text-text">Nginx Gateway</h1>
            <ul className="list-disc marker:text-violet-50 ml-5 text-lg leading-8 text-slate-400">
              <li>
                Nginx served as the gateway to our microservices, directing
                incoming requests to the appropriate services.
              </li>
            </ul>
          </div>
          <div className="col-span-1 space-y-4">
            <h1 className="text-lg font-semibold text-text">
              WebSocket Connection Service
            </h1>
            <ul className="list-disc marker:text-violet-50 ml-5 text-lg leading-8 text-slate-400">
              <li>
                This service was responsible for establishing and managing
                WebSocket connections, ensuring efficient and secure real-time
                communication.
              </li>
            </ul>
          </div>
          <div className="col-span-1 space-y-4">
            <h1 className="text-lg font-semibold text-text">Infrastructure</h1>
            <ul className="list-disc marker:text-violet-50 ml-5 text-lg leading-8 text-slate-400">
              <li>
                Kubernetes, alongside Docker containers, provided scalable,
                fault-tolerant microservices deployment, while Helm streamlined
                package management for service configuration and scaling.
              </li>
            </ul>
          </div>
          <div className="col-span-1 space-y-4">
            <h1 className="text-lg font-semibold text-text">Frontend Client</h1>
            <ul className="list-disc marker:text-violet-50 ml-5 text-lg leading-8 text-slate-400">
              <li>
                It seamlessly integrated with our microservices, providing
                students with an intuitive and responsive platform for accessing
                information, asking questions, and communicating.
              </li>
            </ul>
          </div>
        </div>
        <ExperienceCard>
          <MainDiagram />
        </ExperienceCard>
      </div>
      <div className="w-full max-w-3xl"></div>
      <div className="flex flex-col justify-center w-full max-w-3xl space-y-5 mt-[2rem] p-6 md:p-0 scroll-mt-40" id="tech-section">
        <p className="text-2xl leading-relaxed text-violet-50 font-semibold">
          Technology Stack
        </p>
        <ol className="list-decimal marker:text-violet-50 font-medium text-lg leading-7 text-slate-400 ml-5 space-y-6">
          <li>
            <span className="text-text font-semibold"> Backend Services: </span>{" "}
            <DefaultBadge text="Golang" /> was the foundation for our
            microservices, ensuring efficiency and scalability.
          </li>
          <li>
            <span className="text-text font-semibold"> Frontend: </span>{" "}
            <DefaultBadge text="JavaScript" /> and <DefaultBadge text="React" />{" "}
            powered our user-friendly interface, offering interactivity and
            responsiveness.
          </li>
          <li>
            <span className="text-text font-semibold"> Event Broker: </span>{" "}
            <DefaultBadge text="Apache Kafka" /> facilitated event-driven
            communication, supporting the outbox pattern for data consistency.
          </li>
          <li>
            <span className="text-text font-semibold">
              {" "}
              Containerization & Orchestration:{" "}
            </span>{" "}
            <DefaultBadge text="Kubernetes" />, <DefaultBadge text="Docker" />
            , and <DefaultBadge text="Helm" /> streamlined deployment, scaling,
            and management for our microservices-based architecture.
          </li>
        </ol>
        <ExperienceCard>
          <div className="flex justify-center items-center">
            <UnifyiChart />
          </div>
        </ExperienceCard>
      </div>
      <div className="flex flex-col justify-center w-full max-w-3xl space-y-5 mt-[2rem] p-6 md:p-0 scroll-mt-40"  id="development-section">
        <p className="text-2xl leading-10 text-violet-50 font-semibold">
          Development Process
        </p>
        <p className="font-medium text-lg leading-10 text-slate-400">
          Our development process thrived within an{" "}
          <DefaultBadge text="Agile environmention" /> , marked by
          <DefaultBadge text="Weekly sprints" /> that ensured a steady pace of
          work.
        </p>
        <p className="font-medium text-lg leading-10 text-slate-400">
          I efficiently managed tasks and progress through{" "}
          <DefaultBadge text="Notion" />, team&apos;s project management tool of
          choice. Daily <DefaultBadge text="Scrum meetings" /> kept the team
          synchronized, while a well-maintained backlog allowed for the
          prioritization of tasks and features.
        </p>
        <p className="font-medium text-lg leading-10 text-slate-400">
          Embracing an iterative approach, we regularly delivered working
          features, actively sought feedback, and conducted thorough testing,
          all of which contributed to the project&apos;s quality and
          adaptability. At the end of each sprint, deployed features underwent
          stakeholder and user review, shaping our ongoing development efforts.
        </p>
      </div>
      <div className="flex flex-col justify-center w-full max-w-3xl space-y-5 mt-[2rem] p-6 md:p-0 scroll-mt-40" id="features-section">
        <p className="text-2xl leading-10 text-violet-50 font-semibold">
          Key Features
        </p>
        <ol className="list-decimal marker:text-violet-50 font-medium text-lg leading-7 text-slate-400 ml-5 space-y-6">
          <li>
            <span className="text-text font-semibold">
              {" "}
              Login with Google:{" "}
            </span>{" "}
            The platform offered a seamless login experience by allowing users
            to sign in with their Google accounts.
          </li>
          <li>
            <span className="text-text font-semibold">
              {" "}
              Course Selection from University{" "}
            </span>{" "}
            Users had the flexibility to choose courses from a wide array of
            universities available on the platform.
          </li>
          <li>
            <span className="text-text font-semibold"> Topic Creation: </span>{" "}
            One of the standout features was the ability for users to create
            discussion topics across various courses.
          </li>
          <li>
            <span className="text-text font-semibold">
              Participation in Course Chats:
            </span>{" "}
            The platform facilitated real-time interaction among students by
            integrating chat functionality into each course.
          </li>
          <li>
            <span className="text-text font-semibold">
              Question Creation with Topics and Courses:
            </span>{" "}
            Students could pose questions within specific courses and topics,
            enabling focused and organized discussions.
          </li>
          <li>
            <span className="text-text font-semibold">
              Filtering Questions by Topics and Courses:
            </span>{" "}
            To enhance accessibility and findability, the platform offered
            advanced filtering options. Users could sort questions by topics,
            courses, and other criteria,
          </li>
          <li>
            <span className="text-text font-semibold">
              Profile Availability:
            </span>{" "}
            Users had the option to set up and customize their profiles, making
            it easy for others to identify and connect with them.
          </li>
        </ol>
      </div>
      <div className="flex flex-col justify-center w-full max-w-3xl space-y-5 mt-[2rem] p-6 md:p-0 scroll-mt-40" id="conclusion-section">
        <p className="text-2xl leading-10 text-violet-50 font-semibold">
          Conclusion
        </p>
        <p className="font-medium text-lg leading-10 text-slate-400">
          In summary, the website garnered{" "}
          <span className="text-text font-semibold">1000+ users</span> after a
          year of development.  <span className="text-violet-50 font-semibold">Team collaboration was a crucial part of our
          journey, as we focused on delivering a production-ready product that
          prioritizes scalability and reliability.</span>
        </p>
        <p className="font-medium text-lg leading-10 text-slate-400">
        <span className="text-green-400 font-semibold"> This journey taught me valuable lessons, emphasizing the importance of
          testing ideas early, rapid deployment, user feedback loop, and
          holistic product development </span>. It underscored the significance of not
          only the technology stack but also aspects like  <span className="text-text font-semibold">UI/UX design, metrics,
          and a deep understanding of the problems we aim to solve.</span> These
          lessons have become guiding principles in my approach to future
          projects, ensuring a more comprehensive and user-centric development
          process.
        </p>
      </div>
    </div>
  );
}
