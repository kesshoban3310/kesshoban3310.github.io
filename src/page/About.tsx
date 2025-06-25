import React from 'react';

const About: React.FC = () => {
    return (
        <div style={{padding: '20px', textAlign: 'center'}}>
            <h1>About Me</h1>
            <p>關於我的一些資訊，包含自傳及經歷</p>

            <section style={{marginTop: '20px'}}>
                <h1 style={{textAlign: 'center'}}>自傳</h1> {/* 將自傳標題置中 */}

                <div style={{
                    maxWidth: '800px',
                    margin: '20px auto',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    backgroundColor: '#ffffff'
                }}>
                    <h2 style={{
                        textAlign: 'center',
                        color: '#333',
                        marginBottom: '20px'
                    }}>關於我</h2> {/* 內部小標題 */}

                    <p style={{lineHeight: '1.8', color: '#555', marginBottom: '15px'}}>
                        目前就讀於國立臺北科技大學資訊工程系，大四。
                    </p>

                    <p style={{lineHeight: '1.8', color: '#555', marginBottom: '20px'}}>
                        從高中時期參加資訊社開始，我便展開了在程式世界的旅程。透過參與高中的讀書會，讓我學習到許多程式設計能力，也啟發我對資訊領域的熱忱。
                        大學之後，我更專注在電腦科學的學習上，目前在北科大就讀。
                    </p>

                    <h3 style={{
                        color: '#333',
                        marginTop: '25px',
                        marginBottom: '15px',
                        borderBottom: '1px solid #eee',
                        paddingBottom: '5px'
                    }}>程式競賽成果</h3>
                    <ul style={{listStyle: 'none', padding: '0', margin: '0', lineHeight: '1.8', color: '#555'}}>
                        <li style={{marginBottom: '10px'}}>
                            我曾在 <strong><span style={{color: '#007bff'}}>ICPC 臺灣區域賽</span></strong> 中獲得兩面銅牌
                            🥉。
                        </li>
                        <li style={{marginBottom: '10px'}}>
                            此外，也連續三年於 <strong><span
                            style={{color: '#007bff'}}>全國大專校院電腦軟體設計競賽（NCPC）</span></strong> 中獲得佳作
                            🎖️。
                        </li>
                        <li style={{marginBottom: '10px'}}>
                            並於 <strong><span
                            style={{color: '#007bff'}}>全國科技大專校院程式競賽（TUPC）</span></strong> 中連續兩年獲得金獎
                            🏅。
                        </li>
                        <li style={{fontSize: '0.95em', color: '#666'}}>
                            這些成果展現了我的穩定表現與持續成長。
                        </li>
                    </ul>
                </div>
            </section>

            <section style={{marginTop: '20px', textAlign: 'center'}}>
                <h1>競賽經歷</h1>

                <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '20px auto',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '25px',
                    maxWidth: '950px',
                    textAlign: 'left'
                }}>
                    {/* ICPC 經歷卡片 (內容不變) */}
                    <li style={{
                        border: '1px solid #eee',
                        borderRadius: '8px',
                        padding: '20px',
                        backgroundColor: '#f9f9f9',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.08)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: 'auto'
                    }}>
                        <h3 style={{
                            margin: '0 0 10px 0',
                            fontSize: '18px',
                            display: 'flex',
                            alignItems: 'center',
                            minHeight: '22px'
                        }}>
                            <a
                                href="https://icpc.global/ICPCID/0RUGYG7WIB1W"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{textDecoration: 'none'}}
                            >
                                ICPC Regional Contests
                            </a>
                        </h3>
                        <p style={{fontSize: '0.9em', color: '#555', marginBottom: '15px'}}>
                            參與 ICPC 臺灣地區相關賽事，透過連結可查看參賽紀錄，從中磨練演算法與團隊合作能力。
                        </p>
                        <ul style={{listStyle: 'disc', listStylePosition: 'inside', paddingLeft: '0', margin: '0'}}>
                            <li><strong>2024:</strong> Asia Taichung Regional - Bronze Award</li>
                            <li><strong>2023:</strong> Asia Taoyuan Regional - Bronze Award</li>
                        </ul>
                    </li>

                    {/* NCPC 經歷卡片 */}
                    <li style={{
                        border: '1px solid #eee',
                        borderRadius: '8px',
                        padding: '20px',
                        backgroundColor: '#f9f9f9',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.08)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: 'auto'
                    }}>
                        <h3 style={{
                            margin: '0 0 10px 0',
                            fontSize: '18px',
                            display: 'flex',
                            alignItems: 'center',
                            minHeight: '22px'
                        }}>
                            NCPC
                        </h3>
                        <p style={{
                            fontSize: '0.9em',
                            color: '#555',
                            marginBottom: '10px'
                        }}> {/* Changed to 10px for consistency */}
                            NCPC 是由臺灣教育部指導，為國內大專院校學生舉辦的重要程式能力競賽，在全國程式領域中具有指標性地位。
                        </p>
                        <ul style={{listStyle: 'disc', listStylePosition: 'inside', paddingLeft: '0', margin: '0'}}>
                            <li><strong>2024:</strong> Honorable Mention</li>
                            <li><strong>2023:</strong> Honorable Mention</li>
                            <li><strong>2022:</strong> Honorable Mention</li>
                        </ul>
                    </li>

                    {/* TUPC 競賽經歷 */}
                    <li style={{
                        border: '1px solid #eee',
                        borderRadius: '8px',
                        padding: '20px',
                        backgroundColor: '#f9f9f9',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.08)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: 'auto'
                    }}>
                        <h3 style={{
                            margin: '0 0 10px 0',
                            fontSize: '18px',
                            display: 'flex',
                            alignItems: 'center',
                            minHeight: '22px'
                        }}>
                            TUPC
                        </h3>
                        <p style={{fontSize: '0.9em', color: '#555', marginBottom: '10px'}}> {/* Consistent 10px */}
                            TUPC 是專為臺灣科技大學院校學生舉辦的重要程式競賽，亦為晉級 ICPC 臺灣區域賽的主要管道之一。
                        </p>
                        <ul style={{listStyle: 'disc', listStylePosition: 'inside', paddingLeft: '0', margin: '0'}}>
                            <li><strong>2024:</strong> Gold Award (Rank 3)</li>
                            <li><strong>2023:</strong> Gold Award (Rank 1)</li>
                        </ul>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default About;
