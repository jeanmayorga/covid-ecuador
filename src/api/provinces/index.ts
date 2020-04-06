import { FirebaseTypes } from '../../firebase/firebase';
import { Province } from '../../interfaces';

export const getProvincesLive = (options: { firebase: FirebaseTypes }) => {
  const request = options.firebase.database.ref('/provinces');
  return request;
};

export const getProvinces = async (options: { firebase: FirebaseTypes }) => {
  const request = await options.firebase.database.ref('/provinces').once('value');
  const data = request.val();
  return (data ? Object.values(data) : []) as Province[];
};

export const getProvince = async (options: { provinceSlug: string; firebase: FirebaseTypes }) => {
  const request = await options.firebase.database.ref(`provinces/${options.provinceSlug}`).once('value');
  return request.val() as Province;
};

export const setProvince = async (options: { province: Province; firebase: FirebaseTypes }) => {
  const request = await options.firebase.database.ref(`provinces/${options.province.slug}`).set(options.province);
  return request;
};

export const removeProvince = async (options: { provinceSlug: string; firebase: FirebaseTypes }) => {
  const request = await options.firebase.database.ref(`provinces/${options.provinceSlug}`).remove();
  return request;
};
