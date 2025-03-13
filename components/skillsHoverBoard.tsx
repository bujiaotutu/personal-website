import { FC } from 'react';

const SkillsHoverBoard: FC = () => {
  return (
    <div className="group fixed top-1/2 right-0 transform -translate-y-1/2 bg-blue-600 text-white rounded-l-lg transition-all duration-500 ease-in-out hover:w-48 w-16 flex items-center overflow-hidden">
      <h3 className="text-lg font-semibold cursor-default p-4 whitespace-nowrap">Skills</h3>
      <ul className="space-y-2 cursor-pointer p-4 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-screen group-hover:block hidden transition-all duration-500 ease-in-out">
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
      </ul>
    </div>
  );
};

export default SkillsHoverBoard;
