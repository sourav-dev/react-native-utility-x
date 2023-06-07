import {Platform} from 'react-native';


class UtilityMethods {
  /**
   * @description Byte To KB MB GB TB Converter function
   */
  bytesToSize = bytes => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Byte';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
  };

  createFormData = photo => {
    const data = new FormData();
    data.append('file', {
      name: photo.fileName || 'User_Document',
      type: photo.type,
      uri:
        Platform.OS === 'android'
          ? photo.uri
          : photo.uri.replace('file://', ''),
    });
    return data;
  };

  calculateNumColumns = (minCols, width, itemWidth, itemMargin) => {
    const cols = width / itemWidth;
    const colsFloor = Math.floor(cols) > minCols ? Math.floor(cols) : minCols;
    const colsMinusMargin = cols - 2 * colsFloor * itemMargin;
    if (colsMinusMargin < colsFloor && colsFloor > minCols) {
      return colsFloor - 1;
    } else return colsFloor;
  };

  appendObjTo = (thatArray, newObj) => {
    const frozenObj = Object.freeze(newObj);
    return Object.freeze(thatArray.concat(frozenObj));
  };

  toTitleCase = str => {
    if (str) {
      return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    } else {
      return '';
    }
  };

  isValidEmail = (val) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(val) === false) {
      return false;
    }
    else {
      return true
    }
  }

  isValidPhone = (val) => {
    let reg = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
    if (reg.test(val) === false) {
      return false;
    }
    else {
      return true
    }
  }
}

export default new UtilityMethods();
