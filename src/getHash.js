export default function getHash(str) {
  let hash = 0;
  if (!str) hash = Math.random();
  else
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
  return hash;
}
