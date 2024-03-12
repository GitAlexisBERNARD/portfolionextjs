import prisma from '@/lib/prisma';

async function getPost() {
    const posts = await prisma.post.findMany({
        where: { published: true },
        include: {
            author: true
        }
    });
    return posts;
}

    export default async function afficheposts() {
        const posts = await getPost();
        console.log({ posts })
        return (
            <h1>Posts</h1>
        )
}