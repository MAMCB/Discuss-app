'use server'

export async function createPost (post:any) {
    //should revalidate topicShow page
    return {
        type: 'CREATE_POST',
        payload: post
    }
};