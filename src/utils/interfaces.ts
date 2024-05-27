export interface CreateTopicFormState {
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
  params:{
    slug:string;
  }
}