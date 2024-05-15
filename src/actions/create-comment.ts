'use server'

export async function createComment (comment:string) {
    //should revalidate post show page
    return {
        type: 'CREATE_COMMENT',
        payload: comment
    }
};