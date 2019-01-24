
/**
 * Generic fetch
 *
 * @return {object}         Promise object
 */

// Provide Basic Header Configurations
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

// options = {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     //"userName": 'debayan.sen@parmancs.com1',
//     "userName": username,
//     //"password": 'mystrio7',
//     "password": password,
//     "registrationProvider": "SBIS",
//     "roleName": "INDIVIDUAL"
//   }),
// }

// Main Fetch Function
function doFetch(url, options, dispatch, settings){
  return fetch(url, options)
  .then(response => response.json())
  .catch((error) => {
    console.log(error);
    console.log('From Utils',error);
  });
}

/*
 * Generic get for rest
 */
export function doGet(url, dispatch, settings = {}) {
  const options = {
    method: 'GET',
    headers: headers
  };
  return doFetch(url, options, dispatch, settings);
}

/*
 * Generic post for rest
 */
export function doPost(url, body, dispatch, settings = {}, isJson = true) {
  const options = {
    method: 'POST',
    headers: isJson ? headers : {
      Accept: 'application/json',
      Authorization: `X-AuthToken ${userStorage.getItem('token') || ''}`
    },
    body: isJson ? JSON.stringify(body) : body,
  };
  return doFetch(url, options, dispatch, settings);
}

/*
 * Generic put for rest
 */
export function doPut(url, body, dispatch, settings = {}, isJson = true) {
  const options = {
    method: 'PUT',
    headers: isJson ? headers : {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `X-AuthToken ${userStorage.getItem('token') || ''}`
    },
    body: isJson ? JSON.stringify(body) : body,
  };
  return doFetch(url, options, dispatch, settings);
}

/*
 * Generic delete for rest
 */
export function doDelete(url, dispatch, settings = {}) {
  const options = {
    method: 'DELETE',
    headers: headers(),
  };
  return doFetch(url, options, dispatch, settings);
}

/*
 * url helper
 * ('/users:id', {id:123}) gives '/users/123'
 */
export function getUrl(url = '', obj = {}) {
  const toPath = pathToRegexp.compile(url);
  return toPath(obj);
}
