import { FC } from 'react';

const Projects: FC = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-4">My Projects</h1>
            <ul className="space-y-4">
                <li className="border p-4 rounded">
                    <h2 className="text-2xl font-semibold">Project 1</h2>
                    <p>Project description here...</p>
                </li>
                <li className="border p-4 rounded">
                    <h2 className="text-2xl font-semibold">Project 2</h2>
                    <p>Project description here...</p>
                </li>
            </ul>
        </div>
    );
};

export default Projects;
