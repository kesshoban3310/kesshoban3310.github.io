import React from 'react';

const Project: React.FC = () => {
    const projects = [
        { name: 'OOTD Frontend', url: 'https://github.com/Only-Juice/OOTD-frontend' },
        { name: 'OOPL 2024S', url: 'https://github.com/kesshoban3310/OOPL2024S' },
    ];

    return (
        <div style={{ padding: '20px' }}>
            <h1>My Projects</h1>
            <p>一些個人曾經參與的Project，皆為團體製作</p>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'blue', textDecoration: 'underline' }}
                        >
                            {project.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Project;
