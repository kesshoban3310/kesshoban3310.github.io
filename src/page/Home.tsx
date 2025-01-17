import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Home: React.FC = () => {
    return (
        <>
            <div className="text-center">
                <h1> Welcome! </h1>
                {/*
                <section style={{marginTop: "20px"}}>
                    <h2>Chang Yi-Chang</h2>
                </section>
                    */
                }
                <section style={{marginTop: "20px"}}>
                    <p> 這裡可以放一些描述你的背景、成長經歷或其他有趣的故事。</p>
                    <p> 像是如果你想要學些才藝，像是圍棋、PSP、或是偷吃阿。</p>
                    <p> 你可能來不及了，因為你年紀太大了。</p>
                </section>


                <div style={{marginTop: "30px"}}>
                    <h2>Find Me Online</h2>
                    <div style={{display: "flex", justifyContent: "center", gap: "30px", marginTop: "20px"}}>
                        <a
                            href="https://github.com/kesshoban3310"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{color: "black"}}
                        >
                            <FontAwesomeIcon icon={faGithubSquare} style={{fontSize: "80px"}}/>
                        </a>

                        <a
                            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&autoplay=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{color: "black"}}
                        >
                            <FontAwesomeIcon icon={faYoutube} style={{fontSize: "80px"}}/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
