const { NodeIO } = require('@gltf-transform/core');

async function inspect(file) {
  const io = new NodeIO();
  const document = await io.read(file);
  const root = document.getRoot();
  console.log(`\nInspecting ${file}:`);
  root.listMaterials().forEach((mat) => {
    const baseColorTexture = mat.getBaseColorTexture();
    const emissiveTexture = mat.getEmissiveTexture();
    console.log(`Material: ${mat.getName()}`);
    console.log(`  BaseColorTexture: ${baseColorTexture ? baseColorTexture.getName() || 'Yes' : 'No'}`);
    console.log(`  EmissiveTexture: ${emissiveTexture ? emissiveTexture.getName() || 'Yes' : 'No'}`);
  });
}

inspect('src/assets/glb/iphone17.glb').then(() => inspect('src/assets/glb/petclear_model.glb'));
