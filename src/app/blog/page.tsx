import BlogEntry from './blog_entry.mdx'

export default function MyPage({ children }: { children: any }) {
    return (
        <div
            style={{
                width: `80%`,
                transform: 'translateY(100px)',
                fontFamily:
                    "Consolas, 'Courier New', monospace, 'Segoe UI Emoji'",
            }}
        >
            <BlogEntry />
            {children}
        </div>
    )
}
