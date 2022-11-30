import {
  Engine,
  MeshBuilder,
  Scene,
  ShaderMaterial,
  Vector3,
} from '@babylonjs/core';
import './style.scss';

import vertShader from './shaders/sampleShader.vert?raw';
import fragShader from './shaders/sampleShader.frag?raw';

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

  const shaderMaterial = new ShaderMaterial(
    'sampleShader',
    scene,
    {
      vertexSource: vertShader,
      fragmentSource: fragShader,
    },
    {
      attributes: ['position'],
      uniforms: ['worldViewProjection'],
    }
  );

  let time = 0;
  scene.registerBeforeRender(() => {
    shaderMaterial.setFloat('time', time);
    time += 0.03;
  });

  const box = MeshBuilder.CreateBox('box', { size: 0.2 }, scene);
  box.position = new Vector3(0, 0.1, 0);
  box.material = shaderMaterial;

  engine.runRenderLoop(() => {
    scene.render();
  });
};

main();
