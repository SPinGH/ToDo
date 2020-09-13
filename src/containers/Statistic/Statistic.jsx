import React from 'react';

import './Statistic.scss';

import Title from '../../components/Title/Title'

function Statistic() {
    return (
        <div className="week-statistic">
            <div className="week-statistic__header ws-header">
                <Title className="ws-title">Задачи</Title>
                <div className="ws-header__completed">Завершенные задачи</div>
                <div className="ws-header__number">26/55</div>
                <div className="ws-header__graph">
                    <svg width="98px" height="98px" viewBox="0 0 42 42">
                        <circle cx="21" cy="21" r="15.91549430918954" fill="#f3f3f3"></circle>
                        <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#ccc" strokeWidth="3">
                        </circle>
                        <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#4BD7C3"
                            strokeWidth="3" strokeDasharray="100" strokeDashoffset="80"></circle>
                    </svg>
                </div>
            </div>
            <div className="week-statistic__graph ws-graph">
                <Title className="ws-title">Прогресс</Title>
                <div className="ws-graph__graph">
                    <svg width="100%" height="100%" viewBox="0 0 430 110" xmlns="http://www.w3.org/2000/svg">

                        <line y2="105" x2="5" y1="5" x1="5" strokeWidth="2" stroke="#ccc" />
                        <line y2="105" x2="75" y1="5" x1="75" strokeWidth="2" stroke="#ccc" />
                        <line y2="105" x2="145" y1="5" x1="145" strokeWidth="2" stroke="#ccc" />
                        <line y2="105" x2="215" y1="5" x1="215" strokeWidth="2" stroke="#ccc" />
                        <line y2="105" x2="285" y1="5" x1="285" strokeWidth="2" stroke="#ccc" />
                        <line y2="105" x2="355" y1="5" x1="355" strokeWidth="2" stroke="#ccc" />
                        <line y2="105" x2="425" y1="5" x1="425" strokeWidth="2" stroke="#ccc" />
                        <line y2="105" x2="425" y1="105" x1="5" strokeWidth="2" stroke="#ccc" />

                        <linearGradient id="linear-gradient" x1="100%" y1="100%">
                            <stop offset="0%" stop-color="transparent" />
                            <stop offset="100%" stop-color="#8799ED99" />
                        </linearGradient>

                        <path id="svg_7" d="M 5,90 75,43 145,55 215,77 285,65 355,21 425,82 425,105 5,105"
                            fill="url(#linear-gradient)" />
                        <path id="svg_7" d="M 5,90 75,43 145,55 215,77 285,65 355,21 425,82" fill-opacity="null"
                            stroke-opacity="null" strokeWidth="2" stroke="#8799ED" fill="none" />

                        <ellipse stroke="#8799ED" ry="4" rx="4" cy="90" cx="5" fill="#fff" strokeWidth="2" />
                        <ellipse stroke="#8799ED" ry="4" rx="4" cy="43" cx="75" fill="#fff" strokeWidth="2" />
                        <ellipse stroke="#8799ED" ry="4" rx="4" cy="55" cx="145" fill="#fff" strokeWidth="2" />
                        <ellipse stroke="#8799ED" ry="4" rx="4" cy="77" cx="215" fill="#fff" strokeWidth="2" />
                        <ellipse stroke="#8799ED" ry="4" rx="4" cy="65" cx="285" fill="#fff" strokeWidth="2" />
                        <ellipse stroke="#8799ED" ry="4" rx="4" cy="21" cx="355" fill="#fff" strokeWidth="2" />
                        <ellipse stroke="#8799ED" ry="4" rx="4" cy="82" cx="425" fill="#fff" strokeWidth="2" />
                    </svg>
                </div>
                <div className="ws-graph__colnames">
                    <div className="ws-graph__colname">Пн</div>
                    <div className="ws-graph__colname">Вт</div>
                    <div className="ws-graph__colname">Ср</div>
                    <div className="ws-graph__colname">Чт</div>
                    <div className="ws-graph__colname">Пт</div>
                    <div className="ws-graph__colname">Сб</div>
                    <div className="ws-graph__colname">Вс</div>
                </div>
            </div>
            <div className="week-statistic__inline ws-inline">
                <Title className="ws-title">Недавно выполненные</Title>
                <div className="ws-inline__graph">
                    <div className="ws-inline__item item-wsi">
                        <div className="item-wsi__name">Понедельник</div>
                        <div className="item-wsi__content">
                            <div className="item-wsi__line"><span style={{ backgroundColor: "#C36EF4", width: "33%" }}></span></div>
                            <div className="item-wsi__value">Выполнено: 2</div>
                        </div>
                    </div>
                    <div className="ws-inline__item item-wsi">
                        <div className="item-wsi__name">Вторник</div>
                        <div className="item-wsi__content">
                            <div className="item-wsi__line"><span style={{ backgroundColor: "#6E85D5", width: "54%" }}></span></div>
                            <div className="item-wsi__value">Выполнено: 55</div>
                        </div>
                    </div>
                    <div className="ws-inline__item item-wsi">
                        <div className="item-wsi__name">Среда</div>
                        <div className="item-wsi__content">
                            <div className="item-wsi__line"><span style={{ backgroundColor: "#F9BB73", width: "21%" }}></span></div>
                            <div className="item-wsi__value">Выполнено: 55</div>
                        </div>
                    </div>
                    <div className="ws-inline__item item-wsi">
                        <div className="item-wsi__name">Четверг</div>
                        <div className="item-wsi__content">
                            <div className="item-wsi__line"><span style={{ backgroundColor: "#70BFEA", width: "43%" }}></span></div>
                            <div className="item-wsi__value">Выполнено: 55</div>
                        </div>
                    </div>
                    <div className="ws-inline__item item-wsi">
                        <div className="item-wsi__name">Пятница</div>
                        <div className="item-wsi__content">
                            <div className="item-wsi__line"><span style={{ backgroundColor: "#F97891", width: "73%" }}></span></div>
                            <div className="item-wsi__value">Выполнено: 55</div>
                        </div>
                    </div>
                    <div className="ws-inline__item item-wsi">
                        <div className="item-wsi__name">Суббота</div>
                        <div className="item-wsi__content">
                            <div className="item-wsi__line"><span style={{ backgroundColor: "#94ec6c", width: "7%" }}></span></div>
                            <div className="item-wsi__value">Выполнено: 55</div>
                        </div>
                    </div>
                    <div className="ws-inline__item item-wsi">
                        <div className="item-wsi__name">Воскресенье</div>
                        <div className="item-wsi__content">
                            <div className="item-wsi__line"><span style={{ backgroundColor: "#e4e26a", width: "69%" }}></span></div>
                            <div className="item-wsi__value">Выполнено: 55</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistic;