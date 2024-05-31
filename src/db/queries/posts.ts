import { PostForListDisplay } from "@/utils/interfaces";
import { db } from "..";

export function fetchPostsByTopicSlug(
  slug: string
): Promise<PostForListDisplay[]> {
  return db.post.findMany({
    where: {
      topic: {
        slug,
      },
    },
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: {
        select: {
          comments: true,
        },
      },
    },
  });
}

export function fetchTopPosts():Promise<PostForListDisplay[]>{
  return db.post.findMany({
    orderBy:[
      {
        comments:{
          _count:"desc"
        }
      }
    ],
    include:{
      topic:{select:{slug:true}},
      user:{select:{name:true, image:true}},
      _count:{
        select:{
          comments:true
        }
      }
    },
    take:5
});
}