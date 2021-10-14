import React from 'react';
import { NavLink } from 'react-router-dom';

import MainSvg from './MainSvg';
import TasksSvg from './TasksSvg';
import StatisticSvg from './StatisticSvg';

import './Header.scss';

function Header() {
    return (
        <header className='navigation'>
            <nav className='nav'>
                <ul className='nav__links'>
                    <li>
                        <NavLink exact to='/' className='nav__link'>
                            <MainSvg />
                            Главная
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/tasks' className='nav__link'>
                            <TasksSvg />
                            Задачи
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/statistics' className='nav__link'>
                            <StatisticSvg />
                            Статистика
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;