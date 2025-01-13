import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.svg';

const Header = ({ setTheme, currentTheme }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className='row'>
            <img
                src={logo}
                alt='Logo'
                className='logo'
            />
            <h1>My Grocery List Manager</h1>
            <div className='spacer'></div>
            <div
                className='theme-options'
                ref={dropdownRef}>
                <button
                    className='hamburger'
                    onClick={toggleDropdown}
                    aria-label='Toggle theme options'>
                    &#9776;
                </button>
                {dropdownOpen && (
                    <div className='dropdown'>
                        <button
                            className={
                                currentTheme === 'system' ? 'active' : ''
                            }
                            onClick={() => setTheme('system')}
                            aria-label='Use system theme'>
                            System
                        </button>
                        <button
                            className={currentTheme === 'light' ? 'active' : ''}
                            onClick={() => setTheme('light')}
                            aria-label='Use light theme'>
                            Light
                        </button>
                        <button
                            className={currentTheme === 'dark' ? 'active' : ''}
                            onClick={() => setTheme('dark')}
                            aria-label='Use dark theme'>
                            Dark
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
