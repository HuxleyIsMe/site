'use client'
import styles from './page.module.css'
import Image from '../../node_modules/next/image'
import { isMobile } from 'react-device-detect'
import { useWindowSize } from './components/menu/useWindowSize'
import { InteractiveDesktopView } from './components'

export default function Home() {
    const { width } = useWindowSize()

    if (!width) {
        return <></>
    }

    return (
        <>
            <section className={styles.wrapper}>
                {isMobile || width < 750 ? (
                    <>
                        <div className={styles['banner-mobile']}>
                            <h1>hi im huxley</h1>
                            <h2>A full-stack engineer</h2>
                            <Image
                                height={500}
                                width={400}
                                priority
                                alt="picture of animation on desktop site"
                                src="/images/me2.png"
                            />
                            <p>
                                Hey there, I am a full stack engineer with
                                experience in TypeScript, Node.js, React, AWS
                                and GQL technology. I have also introduced and
                                led team processes and projects.
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                        <InteractiveDesktopView />
                    </>
                )}
            </section>
        </>
    )
}
