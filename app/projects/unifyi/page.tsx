"use client";

import ExperienceCard from "@/app/(experience)/ExprienceCard";
import TechStackChart from "@/app/components/charts/TechStackChart";
import MainDiagram from "@/app/components/diagrams/MainDiagram";
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
      <span className="text-text">
       {text}
      </span>
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
          March 2021 - June 2022 / 10min read
        </p>
      </div>
      <div className="flex flex-row justify-start w-full max-w-3xl gap-4">
        <BadgeAnimatedGradientBorder text="Microservices" />
        <BadgeAnimatedGradientBorder text="Full-stack" />
        <BadgeAnimatedGradientBorder text="Teamwork" />
        <BadgeAnimatedGradientBorder text="Start-up" />
      </div>
      <div className="flex flex-col justify-center w-full max-w-3xl space-y-5 mt-[2rem] p-6 md:p-0">
        <p className="text-2xl leading-relaxed text-violet-50 font-semibold">
          Introduction
        </p>
        <p className="font-medium text-lg leading-10 text-slate-400">
          As a member of the development team, I led
          a project aimed at simplifying the student experience at Simon Fraser University.
          <span className="text-text font-medium">
            {" "}The mission was to create a unified platform, offering students an
            efficient way to seek answers to their academic and campus life
            queries ✨.
          </span>
          {" "} Taking charge of both
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
      <div className="flex flex-col justify-center w-full max-w-3xl space-y-5 mt-[2rem] p-6 md:p-0">
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
      <div className="flex flex-col justify-center w-full max-w-3xl space-y-5 mt-[1rem] p-6 md:p-0">
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
      </div>
      <div className="w-full max-w-3xl"></div>
      <div className="flex flex-col justify-center w-full max-w-3xl space-y-5 mt-[2rem] p-6 md:p-0">
        <p className="text-xl leading-relaxed text-violet-50 font-semibold">
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
            <TechStackChart />
          </div>
        </ExperienceCard>
      </div>
      <div className="flex flex-col justify-center w-full max-w-3xl space-y-5 mt-[2rem] p-6 md:p-0">
        <p className="text-xl leading-10 text-violet-50 font-semibold">
          Architecture and Design
        </p>
        <p className="font-medium text-lg leading-10 text-slate-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </div>
      <div className="flex flex-col justify-center w-full max-w-3xl space-y-5 mt-[2rem] p-6 md:p-0">
        <p className="text-xl leading-10 text-violet-50 font-semibold">
          Development Process
        </p>
        <p className="font-medium text-lg leading-10 text-slate-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been thestandard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </div>
      <div className="flex flex-col justify-center w-full max-w-3xl space-y-5 mt-[2rem] p-6 md:p-0">
        <p className="text-xl leading-10 text-violet-50 font-semibold">
          Key Features
        </p>
        <p className="font-medium text-lg leading-10 text-slate-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </div>
    </div>
  );
}
