import CreateForm from "@/components/topics/CreateForm";
import TopicList from "@/components/topics/TopicList";
import { Divider } from "@nextui-org/react";
import { createTopic } from "@/actions";
import PostList from "@/components/posts/post-list";
import { fetchTopPosts } from "@/db/queries/posts";


export default  function Home() {
 
  //should revalidate every 30 seconds

  return <div className="grid grid-cols-4 gap-4 p-4">
    <div className="col-span-3">
      <h1 className="text-xl m-2">Top posts</h1>
      <PostList fetchData={fetchTopPosts} />
    </div>
    <div className="border shadow py-3 px-2">
      <CreateForm ServerAction={createTopic} triggerText="Create topic" />
      <Divider className="my-2" />
      <h3 className="text-lg">Topics</h3>
      <TopicList />
      

    </div>

  </div>;
}
