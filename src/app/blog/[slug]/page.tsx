import styles from '../page.module.css'

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const { default: Post } = await import(`@/content/${slug}.mdx`)

    return (
        <div className={styles.BlogContainer}>
            <div className={styles.container}>
                <Post />
            </div>
        </div>
    )
}

export function generateStaticParams() {
    return [
        { slug: 'next-emojis' },
        { slug: 'lessons-from-canvas' },
        { slug: 'gpu-love' },
    ]
}

export const dynamicParams = false
