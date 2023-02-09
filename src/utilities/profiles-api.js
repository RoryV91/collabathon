import sendRequest from './send-request';
const BASE_URL = '/api/profiles'


export async function update(profileFormData) {
    return sendRequest(`${BASE_URL}/update`, 'PUT', profileFormData);
}

export async function getProfile() {
    return sendRequest(BASE_URL);
}