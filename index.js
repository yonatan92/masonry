let grid = document.querySelector('.container');
// let selected_box = grid.querySelectorAll('.box');
const GRID_COLUMNS = 10;
const NUMBER_OF_GRID_ITEMS = 20;

const fecthPhotos = async () => {
  let promiseArr = [];

  for (let index = 0; index < NUMBER_OF_GRID_ITEMS; index++) {
    const photo = fetch(`https://source.unsplash.com/random?sig=${index}`);
    promiseArr.push(photo);
  }
  return Promise.all(promiseArr);
};

const creatGridElements = (urls) => {
  let ans = '';
  urls.forEach((url, i) => {
    ans += `<div class="box box-${i}"><img src=${url} ></div>`;
  });
  grid.innerHTML = ans;
};

const extractURL = (promisArr) => {
  return promisArr.map((promise) => promise.url);
};

fecthPhotos().then(extractURL).then(creatGridElements).catch(console.log);

// console.log('here', selected_box);
