'use server'

export async function createComment (comment:string) {
    return {
        type: 'CREATE_COMMENT',
        payload: comment
    }
};