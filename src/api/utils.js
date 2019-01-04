// TODO use grommet buildQuery for doGet
import {
  headers as jsonHeaders
} from 'grommet/utils/Rest';
import pathToRegexp from 'path-to-regexp';

import userStorage from '../utils/polyfill';
import {
  logout
} from '../actions/session';

export function headers(token) {
  return {
    Authorization: `X-AuthToken ${token || userStorage.getItem('token') || ''}`,
    ...jsonHeaders
  };
}

/**
 * Unauthorized call, reject if not logged in
 */
export function processUnauthorized(response) {
  if (response.status === 401) {
    return Promise.reject(response);
  }
  return response;
}


/**
 * processResponse - reject promise of response isn't ok
 *
 * @param  {Promise} response from fetch
 * @param  {Object} options  to fetch
 * @param  {Object} settings  to handle response
 * @return {Promise}         promise
 */
export function processResponse(response, options, settings) {
  if (response.ok) {
    if (settings.parseJSON) {
      return response.json();
    }
    return response.text();

    // return Promise.resolve({ error: false });
  }

  // if status is 500/403/409, retrive json
  if (([500, 403, 400, 409]).includes(response.status) && response.json) {
    return response.json()
      .then(data => Promise.reject(data));
  }

  return Promise.reject(response);
}


/**
 * Generic fetch
 *
 * @return {object}         Promise object
 */
function doFetch(url, options, dispatch, settings = {}) {
  settings = {
    logoutUnauthorized: true,
    parseJSON: true,
    ...settings
  };
  // console.log('doFetch', settings, url);

  return fetch(url, options)
    .then(processUnauthorized) // reject if not logged in
    .catch((response) => {
      if (settings.logoutUnauthorized && dispatch && response.message === 'Failed to fetch') {
        dispatch(logout());
      }
      return response;
    })
    .then(response => processResponse(response, options, settings));
}

/*
 * Generic get for rest
 */
export function doGet(url, dispatch, settings = {}) {
  const options = {
    method: 'GET',
    headers: headers(settings.token)
  };
  return doFetch(url, options, dispatch, settings);
}

/*
 * Generic post for rest
 */
export function doPost(url, body, dispatch, settings = {}, isJson = true) {
  const options = {
    method: 'POST',
    headers: isJson ? headers() : {
      Accept: 'application/json',
      Authorization: `X-AuthToken ${userStorage.getItem('token') || ''}`
    },
    body: isJson ? JSON.stringify(body) : body,
  };
  return doFetch(url, options, dispatch, settings);
  /* const resp = doFetch(url, options, dispatch, settings);
  if (resp.type && resp.type === 'error') {
    return Promise.reject(resp);
  }
  return resp; */
}

/*
 * Generic put for rest
 */
export function doPut(url, body, dispatch, settings = {}, isJson = true) {
  const options = {
    method: 'PUT',
    headers: isJson ? headers() : {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `X-AuthToken ${userStorage.getItem('token') || ''}`
    },
    body: isJson ? JSON.stringify(body) : body,
  };
  return doFetch(url, options, dispatch, settings);
  /* const resp = doFetch(url, options, dispatch, settings);
  if (resp.type && resp.type === 'error') {
    return Promise.reject(resp);
  }
  return resp; */
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
