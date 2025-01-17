import React from 'react';

const About: React.FC = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>About Me</h1>
            <p>關於我的一些資訊，包含自傳及經歷：</p>

            <section style={{ marginTop: '20px' }}>
                <h2>自傳</h2>
                <p> 就讀於國立臺北科技大學資訊工程系，大三。</p>
                <p> 在高中時期因為加入學校的程式競賽讀書會，啟發了一些對程式的熱忱。</p>
                <p> 現在在北科大擔任小廢廢，跟著學校以及學長姊的腳步走在資工的道路上。</p>
            </section>

            <section style={{marginTop: '20px'}}>
                <h2>經歷</h2>
                <ul>
                    <li>
                        <strong>ICPC Regional Contests:</strong>
                        <ul>
                            <li>
                                <strong>2024:</strong> Asia Taichung Regional - Bronze Award
                            </li>
                            <li>
                                <strong>2023:</strong> Asia Taoyuan Regional - Bronze Award
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>NCPC:</strong>
                        <ul>
                            <li>
                                <strong>2024:</strong> Honorable Mention
                            </li>
                            <li>
                                <strong>2023:</strong> Honorable Mention
                            </li>
                            <li>
                                <strong>2022:</strong> Honorable Mention
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default About;
