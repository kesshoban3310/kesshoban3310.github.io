import React from 'react';

const Project: React.FC = () => {
    const projects = [
        { name: 'OOTD Frontend',
            url: 'https://github.com/Only-Juice/OOTD-frontend',
            descript: '一個方便的線上購物商店，專為販售茶葉設計',
        },
        { name: 'OOPL 2024S',
            url: 'https://github.com/kesshoban3310/OOPL2024S',
            descript: '使用物件導向程式設計方法復刻的洛克人遊戲',
        },
        { name: 'MADD 2025S',
            url: 'https://github.com/kesshoban3310/NTUT-MADD-Final',
            descript: '基於 Android 平台所設計的簡易交友軟體，特色是操作簡單',
        }
    ];

    return (
        <div style={{padding: '20px'}}>
            <div style={{textAlign: 'center'}}>
                <h1>My Projects</h1>
                <p>一些個人曾經參與的Project，皆為團體製作</p>

            </div>
            <div>
                <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '20px auto',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '20px',
                    maxWidth: '1200px',
                    textAlign: 'left'
                }}>
                    {projects.map((project, index) => (
                        <li key={index} style={{
                            border: '1px solid #eee',
                            borderRadius: '8px',
                            padding: '15px',
                            backgroundColor: '#f9f9f9',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: 'auto'
                        }}>
                            <h3 style={{margin: '0 0 10px 0'}}>
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: '#007bff', textDecoration: 'none'}}
                                >
                                    {project.name}
                                </a>
                            </h3>
                            <p style={{fontSize: '0.9em', color: '#555'}}>
                                {project.descript}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Project;
