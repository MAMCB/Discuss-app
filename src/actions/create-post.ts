'use server'

export async function createPost (post:any) {
    return {
        type: 'CREATE_POST',
        payload: post
    }
};