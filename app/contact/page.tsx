
import { FC } from 'react';

const Contact: FC = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-4">Contact Me</h1>
            <p className="text-lg text-center">Feel free to reach out to me via email or follow me on GitHub!</p>
            <div className="text-center mt-4">
                <a href="mailto:your-email@example.com" className="text-blue-600">Email</a>
                <span className="mx-2">|</span>
                <a href="https://github.com/yourusername" className="text-blue-600">GitHub</a>
            </div>
        </div>
    );
};

export default Contact;
