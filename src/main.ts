import { Engine, MeshBuilder, Scene, Vector3 } from '@babylonjs/core';
import './style.scss';

const main = () => {
  const renderCanvas = document.getElementById(
    'renderCanvas'
  ) as HTMLCanvasElement;
  if (!renderCanvas) {
    return;
  }

  renderCanvas.width = window.innerWidth;
  renderCanvas.height = window.innerHeight;

  const engine = new Engine(renderCanvas, true);
  const scene = new Scene(engine);

  scene.createDefaultCameraOrLight(true, true, true);
  scene.createDefaultEnvironment();

  const box = MeshBuilder.CreateBox('box', { size: 0.1 }, scene);
  box.position = new Vector3(0, 0.05, 0);

  engine.runRenderLoop(() => {
    scene.render();
  });
};

main();
