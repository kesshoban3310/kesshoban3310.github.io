import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Home: React.FC = () => {
    return (
        <>
            <div className="text-center">
                <h1> Welcome! </h1>
                <section style={{marginTop: "20px"}}>
                    <p> 我是五樓，目前就讀於北科大資工系，大四</p>
                    <p> 這是我的個人網站，目前只有放置個人經歷與製作過的 Projects</p>
                    <p> 你也可以點擊下方連結尋找我的個人社群</p>
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
