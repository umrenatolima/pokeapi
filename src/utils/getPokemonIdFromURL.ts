export default function getPokemonIdFromURL(url: string): number {
  const stringArray = url.split('/').filter(word => !!word);
  const id = Number(stringArray[stringArray.length - 1]);

  return id;
}
