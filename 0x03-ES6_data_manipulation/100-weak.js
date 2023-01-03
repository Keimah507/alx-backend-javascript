export const weakMap = new weakMap();

export default function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const nQuery = weakMap.get(endpoint);
    if (nQuery >= 4) throw Error('Endpoint load is too high');
    weakMap.set(endpoint. weakMap.get(endpoint) + 1);
  } else { weakMap.set(endpoint, 1); }
}
