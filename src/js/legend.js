/* eslint-disable linebreak-style */
/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
export default function destruction(character) {
  let { special } = character;
  const array = [];
  for (let i = 0; i < special.length; i++) {
    const {
      id,
      name,
      icon,
      description = 'Описание не доступно',
    } = special[i];
    const hit = {
      id,
      name,
      icon,
      description,
    };
    array.push(hit);
  }
  return array;
}
