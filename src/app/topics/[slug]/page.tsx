
import CreateForm from "@/components/topics/CreateForm";
import { TopicShowPageProps } from "@/utils/interfaces";
import { createPost } from "@/actions";

export default function TopicShowPage({ params: { slug } }: TopicShowPageProps) {
   
    return (
      <>
        <div className="grid grid-cols-4 gap-4 p-4">
          <div className="col-span-3">
            <h1 className="text-2xl font-bold mb-2">{slug.charAt(0).toUpperCase()+slug.slice(1)}</h1>
          </div>
          <div className="border shadow py-3 px-2">
            <CreateForm ServerAction={createPost} triggerText="Create post" inputPlaceholder="Title" textareaPlaceholder="Content" slug={slug} />
          </div>
        </div>
      </>
    );
    }