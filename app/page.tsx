'use client';

import Image from "next/image";

// 左侧个人简介
const devType = ['Mobile', 'Portal', 'App', 'H5 Page', 'Management System']
const ProfileCard = () => (
  <div className="bg-white p-4 rounded-lg shadow-md bg-[linear-gradient(to_bottom,#CED0F8_25%,#ffffff_25%)]">
    <Image src="/profile.jpg" alt="Profile" className="w-32 h-32 rounded-[50%] mx-auto" width={100} height={100} />
    <h2 className="text-center mt-2 font-bold text-[#636AE8]">Zhou RuiYong</h2>
    <p className="text-center mt-1">Front End Developer</p>
    <div className="mt-4 text-gray-400">
      <p className="text-center">
        I am a front-end developer with a passion for creating beautiful and functional websites.
      </p>
    </div>
    <div className="mt-3 flex justify-center flex-wrap gap-2">
      {
        devType.map((item, index) => (
          <div key={index} className="px-2 py-1 bg-gray-200 text-center rounded-[20px]">
            <p>{item}</p>
          </div>
        ))
      }
    </div>
  </div>
);

// 右侧工作经历复用卡片
const ExperienceCard = ({ title, company, date, description }: { title: string; company: string; date: string; description: string }) => (
  <div className="bg-white p-4">
    <h3 className="font-bold">{title}</h3>
    <p className="text-gray-500">{company} - {date}</p>
    <p className="mt-2 text-sm">{description}</p>
  </div>
);

const Home = () => (
  <div className="bg-white flex gap-6 w-full md:px-[15%] px-[2.5%] py-[15px] min-h-[calc(100vh-200px)]">
    <div className="w-1/3">
      <ProfileCard />
    </div>
    <div className="w-2/3 flex-col gap-4">
      <section className="md:col-span-2 rounded-lg shadow-md p-4">
        <h2 className="text-xl font-bold mb-4">About</h2>
        
      </section>
      <section className="md:col-span-2 rounded-lg shadow-md p-4">
        <h2 className="text-xl font-bold mb-4">Working Experience</h2>
        <ExperienceCard title="Senior UX Designer" company="Google" date="2020 - Present" description="Designing UI/UX for Google products." />
        <ExperienceCard title="Junior UX Designer" company="Facebook" date="2018 - 2020" description="Worked on user interfaces and interactions." />
        <ExperienceCard title="Junior UX Designer" company="Facebook" date="2018 - 2020" description="Worked on user interfaces and interactions." />
      </section>
      <section className="md:col-span-2 rounded-lg shadow-md p-4">
        <h2 className="text-xl font-bold mb-4">Skills</h2>
        <ExperienceCard title="Senior UX Designer" company="Google" date="2020 - Present" description="Designing UI/UX for Google products." />
        <ExperienceCard title="Junior UX Designer" company="Facebook" date="2018 - 2020" description="Worked on user interfaces and interactions." />
      </section>
      <section className="md:col-span-2 rounded-lg shadow-md p-4">
        <h2 className="text-xl font-bold mb-4">Eduction</h2>
        <ExperienceCard title="Senior UX Designer" company="Google" date="2020 - Present" description="Designing UI/UX for Google products." />
        <ExperienceCard title="Junior UX Designer" company="Facebook" date="2018 - 2020" description="Worked on user interfaces and interactions." />
      </section>
    </div>
  </div>
);

export default Home;
