import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const BASE_URL = getBaseUrl();

export function getUsers(){
  return get('users');
}

function get(url) {
  return fetch(`${BASE_URL}${url}`).then(onSuccess, onError);
}

function onSuccess(res){
  return res.json();
}

function onError(error){
  console.log(error); //eslint-disable-line no-console
}
