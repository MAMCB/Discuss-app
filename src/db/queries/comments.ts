import type { Comment } from "@prisma/client";
import { cache } from "react"; //to use cache memoization
import { db } from "@/db";

export type CommentWithAuthor = (Comment & {user:{name:string |null; image:string |null}});

export const fetchCommentsByPostId =cache((postId: string): Promise<CommentWithAuthor[]>=> {
    console.log("fetching comments for post id", postId);
    return db.comment.findMany({
        where: {
            postId,
        },
        include: {
            user: {
                select: {
                    name: true,
                    image: true,
                },
            },
        },
    });
});