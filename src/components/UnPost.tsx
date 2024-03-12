import type { Post, User } from '@prisma/client'
export default function UnPost({ title, content}: Post) {
    return <div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
}