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
}
