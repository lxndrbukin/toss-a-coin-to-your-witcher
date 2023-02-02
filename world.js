class World {
  constructor(ground) {
    this.ground = ground;
  }

  createWorld(game) {
    const world = document.createElement('div');
    world.classList.add('world');
    document.body.style.margin = '0';
    const worldProps = {
      height: '100vh',
      width: '100vw',
      backgroundImage: `url(${this.ground})`,
    };
    Object.keys(worldProps).map((propKey) => {
      world.style[propKey] = worldProps[propKey];
    });
    game.appendChild(world);
    return world;
  }
}
