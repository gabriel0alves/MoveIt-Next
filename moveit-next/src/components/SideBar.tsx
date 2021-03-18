import styles from '../styles/components/SideBar.module.css';
import { BiHomeAlt } from 'react-icons/bi';
import { FiArrowLeft } from 'react-icons/fi';
import { FiAward } from 'react-icons/fi';
import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { ThemeContext } from '../contexts/ThemeContext';
interface SideBarProps {
    name: 'home' | 'award' | 'arrowleft';
}

export function SideBar({ name }: SideBarProps) {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className={styles.BlockContainer}>
            <div className={theme === 'light' ? styles.SideBarContainer : `${styles.SideBarContainer} ${styles.SideBarContainerDark}`}>
                <img src="logoAside.svg" />

                <div>
                    <Link href="/Logged">
                        <a title="Logged" style={{ position: 'relative' }}>
                            <BiHomeAlt size={30} color={name === 'home' ? "#3173FB" : '#666666'} />
                            <div className={name === 'home' && styles.selected} />
                        </a>
                    </Link>


                    <Link href="/Award">
                        <a title="Award" style={{ position: 'relative' }}>
                            <FiAward size={30} color={name === 'award' ? "#3173FB" : '#3173FB'} />
                            <div className={name === 'award' && styles.selected} />
                        </a>
                    </Link>



                    <Link href="/">
                        <a title="index" style={{ position: 'absolute' }}>
                            <FiArrowLeft size={30} color={name === 'arrowleft' ? "#3173FB" : '#ee2557'} />
                            <div className={name === 'arrowleft' && styles.selected} />
                        </a>
                    </Link>
                </div>



            </div>
        </div>


    )
}