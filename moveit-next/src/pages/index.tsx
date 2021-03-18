import Router from 'next/router';
import { GetServerSideProps } from 'next';
import styles from '../styles/pages/Home.module.css';
import axios from 'axios';

import { FaGithub } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useEffect, useState } from 'react';

export default function Home1() {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        sessionStorage.setItem('name', 'name');
        sessionStorage.setItem('avatar_url', 'avatar_url');
    }, []);

    async function handleNavigateToLogged() {
        if (!userName) {
            alert("Digite o Usuario");
        }
        else {


            const { name, avatar_url } = (await axios.get(`https://api.github.com/users/${userName}`)).data;

            if (name && avatar_url) {
                Router.push('/Logged');
                sessionStorage.setItem('name', name);
                sessionStorage.setItem('avatar_url', avatar_url);

            }

            else try {
                window.open('https://github.com/login/oauth/authorize', '_blank');

            } catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <div className={styles.container}>
            <div>
                <img src="icons/background2.svg" width="50%" className={styles.imageBackgroung} />
            </div>
            <section>
                <img src="move-it.svg" width="100%" />

                <span>Bem-vindo</span>
                <div className={styles.hintIcon}>
                    <FaGithub size={30} color="#ddd" />
                    <p>Faça login com seu GitHub para prosseguir</p>
                </div>

                <div className={styles.continue}>
                    <input
                        placeholder="Digite seu username"
                        value={userName} color="#f7d61d"
                        onChange={e => setUserName(e.target.value)}
                    />
                    <button
                        type="button"
                        onClick={handleNavigateToLogged}
                    >
                        <AiOutlineArrowRight size={25} color="#fff" />
                        <FaGithub size={30} color="#ddd" />
                        <span>Continuar com GitHub</span>
                    </button>
                </div>
            </section>

        </div>
    );
}