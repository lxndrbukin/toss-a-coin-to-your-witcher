class Hero {
  constructor(hero) {
    this.hero = hero;
  }
  move(hero) {
    let currentTop = 0;
    let currentLeft = 0;
    const distance = 50;
    document.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'w':
          currentTop -= distance;
          hero.style.top = `${currentTop}px`;
          break;
        case 's':
          currentTop += distance;
          hero.style.top = `${currentTop}px`;
          break;
        case 'a':
          currentLeft -= distance;
          hero.style.left = `${currentLeft}px`;
          hero.style.transform = 'scaleX(-1)';
          break;
        case 'd':
          currentLeft += distance;
          hero.style.left = `${currentLeft}px`;
          hero.style.transform = 'scaleX(1)';
          break;
      }
    });
  }
  create(world) {
    const heroChar = document.createElement('div');
    heroChar.classList.add('hero');
    const heroProps = {
      height: '50px',
      width: '50px',
      backgroundImage: `url(${this.hero})`,
      backgroundSize: 'cover',
      position: 'absolute',
    };
    Object.keys(heroProps).map((propKey) => {
      heroChar.style[propKey] = heroProps[propKey];
    });
    this.move(heroChar);
    world.appendChild(heroChar);
  }
}
