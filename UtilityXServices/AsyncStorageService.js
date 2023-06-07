import EncryptedStorage from 'react-native-encrypted-storage';
import _ from 'lodash';

class LocalStorageHelper {
  getItemFromStorage = key =>
    new Promise((resolve, reject) => {
      EncryptedStorage.getItem(key)
        .then(resp => {
          resolve(resp);
        })
        .catch(err => reject(err));
    });

  setItemInStorage = data =>
    new Promise((resolve, reject) => {
      EncryptedStorage.setItem(data.key, data.value)
        .then(resp => {
          resolve(resp);
        })
        .catch(err => reject(err));
    });

  removeItemFromStorage = key =>
    new Promise((resolve, reject) => {
      EncryptedStorage.removeItem(key)
        .then(resp => {
          resolve(resp);
        })
        .catch(err => reject(err));
    });

  clearStorage = () =>
    new Promise((resolve, reject) => {
      EncryptedStorage.clear()
        .then(resp => {
          resolve(resp);
        })
        .catch(err => reject(err));
    });
}

export default new LocalStorageHelper();
