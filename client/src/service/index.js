import axios from 'axios';

export const convert = input => {
  return new Promise((onSuccess, onFail) => {
    axios
      .get('/api/stuff/convert', { params: { input } })
      .then((response, error) => {
        if (!response || error) {
          return onFail(`Response failure ${error}`);
        }
        onSuccess(response);
      })
      .catch(err => onFail(err));
  });
};
