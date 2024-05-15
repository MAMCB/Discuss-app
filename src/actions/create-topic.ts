'use server'

export async function createTopic (topic:string) {
    //should revalidate home page
    return {
        type: 'CREATE_TOPIC',
        payload: topic
    }
};