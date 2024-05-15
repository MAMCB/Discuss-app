
const paths ={
    home:()=> '/',
    topicShow: (topicSlug: string) => `/topics/${topicSlug}`,
    createPost: (topicSlug: string) => `/topics/${topicSlug}/posts/new`,
    postShow: (topicSlug: string, postID: string) => `/topics/${topicSlug}/posts/${postID}`
    
}

export default paths;