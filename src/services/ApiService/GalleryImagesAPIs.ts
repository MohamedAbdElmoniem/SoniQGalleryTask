import HttpClient from './HttpClient';
import URLS from './urls';

const getGalleryImages = async () => {
  const resp = await HttpClient.get(URLS.GALLERY_IMAGES);
  return resp.data;
};

export {getGalleryImages};
