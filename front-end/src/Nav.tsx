import type { Component } from 'solid-js';
import styles from './Nav.module.css';

const Nav: Component = () => {
    

    return (
        <div id={styles.Nav}>
            {/*
            <div class={styles.Nav}>
                <div class={styles.center}></div>
                <div class={styles.point}></div>
                <div class={styles.point}></div>
                <div class={styles.point}></div>
                <div class={styles.point}></div>
            </div>
            */}
            <div id={styles['circle-orbit-container']}>

                <div id={styles["inner-orbit"]}>
                    <div class={styles.orbit_line}></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div class={styles["inner-orbit-cirlces"]}></div>
                </div>

                <div id={styles["middle-orbit"]}>
                    <div class={styles.orbit_line}></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div class={styles["middle-orbit-cirlces"]}></div>
                </div>

                <div id={styles["outer-orbit"]}>
                    <div class={styles.orbit_line}></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div class={styles["outer-orbit-cirlces"]}></div>
                </div>

            </div>
        </div>
    );
};

export default Nav;
