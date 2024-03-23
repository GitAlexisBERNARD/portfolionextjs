import type { Post, User } from '@prisma/client'
export default function UnPost({ title, content}: Post) {
    const contentObject = typeof content === 'string' ? JSON.parse(content) : content;
    return <div>
            <h2>{title}</h2>
            <p>{contentObject.introPost}</p>
            <p>{contentObject.technoPost}</p>
            <p>{contentObject.date}</p>
            <p>{contentObject.client}</p>
            <img src={contentObject.imageURL} alt={title} />
        </div>
}