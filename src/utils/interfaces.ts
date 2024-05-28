import type { Post } from "@prisma/client";

export interface CreateFormState {
  errors: {
    name?: string[];
    description?: string[];
    _form?: string[];
  };
}

export interface FormButtonProps {
  children: React.ReactNode;
}

export interface TopicShowPageProps {
  params: {
    slug: string;
  };
}

export interface CreateFormProps {
  triggerText: string;
  ServerAction: (
    formState: CreateFormState,
    formData: FormData
  ) => Promise<CreateFormState>;
  inputPlaceholder?: string;
  textareaPlaceholder?: string;
  slug?: string;
}

export type PostForListDisplay = Post & {
  topic: { slug: string };
  user: { name: string | null };
  _count: { comments: number };
};

export interface PostListProps {
  fetchData: () => Promise<PostForListDisplay[]>;
}
