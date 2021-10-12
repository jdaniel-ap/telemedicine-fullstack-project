export default function useLocalStorage(key) {
  let values;
  
  if(typeof key === 'object') {
    values = localStorage.setItem(key.task, JSON.stringify(key.data));
  } else {
    values = JSON.parse(localStorage.getItem(key));
  }

  return[values];
}