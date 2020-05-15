import {configApiPhotos} from '../Config/config';

export const getFetchData = async () => {
    const res = await fetch(`${configApiPhotos.url}?query=${configApiPhotos.query}&count=${configApiPhotos.count}&client_id=${configApiPhotos.api_key}`);
    const data = await res.json();
    return data;
}