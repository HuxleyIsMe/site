'use client'
import React from 'react'
import { Graphic } from '../index'
import styles from './desktop.module.css'

export const InteractiveDesktopView = () => {
    const graphicRotation = React.useRef(190)

    return (
        <>
            <div
                id="graphic-container"
                className={styles.container}
                style={{ transform: `rotate(${graphicRotation.current}deg)` }}
            >
                <Graphic />
            </div>
            <div className={styles.banner}>
                <h1>hi im huxley</h1>
                <h2>A full-stack engineer</h2>
            </div>

            <p className={styles.aboutLine}>
                Hey there, I am a full stack engineer with experience in
                TypeScript, Node.js, React, AWS and GQL technology. I have also
                introduced and led team processes and projects.
            </p>
        </>
    )
}
