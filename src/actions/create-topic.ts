'use server'

export async function createTopic (topic:string) {
    return {
        type: 'CREATE_TOPIC',
        payload: topic
    }
};