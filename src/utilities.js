export const isServer = () => {
  return !((typeof window !== 'undefined' && window.document && window.document.createElement));
};


export const brickUrl = (data) => {
  const {farm_id, server, photo_id, secret } = data;
  return `https://farm${farm_id}.staticflickr.com/${server}/${photo_id}_${secret}.jpg`;
}
