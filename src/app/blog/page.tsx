import BlogEntry from './blog_entry.mdx'

export default function MyPage() {
    return (
        <div
            style={{
                width: `60%`,
                transform: 'translateY(100px) translateX(100px)',
                fontFamily:
                    "Consolas, 'Courier New', monospace, 'Segoe UI Emoji'",
            }}
        >
            <BlogEntry />
        </div>
    )
}
