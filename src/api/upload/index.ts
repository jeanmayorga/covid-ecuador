import { FirebaseTypes } from '../../firebase/firebase';

export const uploadImage = (options: { firebase: FirebaseTypes; imageName: string; file: any }) => {
  const ref = options.firebase.storage.ref();
  return ref.child(options.imageName).put(options.file);
};
