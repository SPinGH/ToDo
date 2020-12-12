import React from 'react';
import "./FirstTime.scss";

import HomeImg from "../../assets/pic/Home.png"

function FirstTime() {
    return (
        <div className="home">
            <h1 className="home__title">Добро пожаловать в ToDo</h1>
            <p className="home__subtitle">Добавь свою первую задачу</p>
            <img className="home__pic" src={HomeImg} alt="" />
        </div>
    );
}
export default FirstTime;