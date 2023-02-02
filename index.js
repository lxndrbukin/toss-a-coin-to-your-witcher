const game = document.querySelector('#game');

const world = new World(
  'https://upload.wikimedia.org/wikipedia/commons/7/77/Pixel_art_grass_image.png'
).createWorld(game);

const hero = new Hero(
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b44707b-f16f-4e32-bab6-f1ee007de39c/dblkn16-7d902ef3-60c1-4ec6-b9ef-c1fd1e2a9ee8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRiNDQ3MDdiLWYxNmYtNGUzMi1iYWI2LWYxZWUwMDdkZTM5Y1wvZGJsa24xNi03ZDkwMmVmMy02MGMxLTRlYzYtYjllZi1jMWZkMWUyYTllZTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.b4-40OmYlDu3Oo9xUIXsT736ngefqpfL_JXPu6urzRo'
);

hero.create(world);
