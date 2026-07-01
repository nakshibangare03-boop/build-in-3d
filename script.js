// Scene
const scene = new THREE.Scene();
scene.background = null;

// Camera
const camera = new THREE.PerspectiveCamera(
75,
600 / 600,
0.1,
1000
);

// Renderer
const renderer = new THREE.WebGLRenderer({
alpha: true,
antialias: true
});

renderer.setSize(600,600);
renderer.setPixelRatio(window.devicePixelRatio);

document.getElementById("canvas").appendChild(renderer.domElement);

// Geometry
const geometry = new THREE.TorusKnotGeometry(
1,
0.35,
200,
32
);

// Material
const material = new THREE.MeshPhysicalMaterial({
color:0x00e5ff,
metalness:1,
roughness:0,
clearcoat:1,
clearcoatRoughness:0
});

const knot = new THREE.Mesh(
geometry,
material
);

scene.add(knot);

// Lights
const ambient = new THREE.AmbientLight(
0xffffff,
1
);

scene.add(ambient);

const point = new THREE.PointLight(
0x00ffff,
3
);

point.position.set(5,5,5);

scene.add(point);

const point2 = new THREE.PointLight(
0xff00ff,
2
);

point2.position.set(-5,-5,5);

scene.add(point2);

// Camera Position
camera.position.z = 4;

// Orbit Controls
const controls = new THREE.OrbitControls(
camera,
renderer.domElement
);

controls.enableDamping = true;
controls.autoRotate = true;
controls.autoRotateSpeed = 2;

// Animation
function animate(){

requestAnimationFrame(animate);

knot.rotation.x += 0.003;
knot.rotation.y += 0.005;

controls.update();

renderer.render(scene,camera);

}
// ⭐ Star Field
const starGeometry = new THREE.BufferGeometry();
const starCount = 2000;

const positions = [];

for (let i = 0; i < starCount; i++) {
    positions.push((Math.random() - 0.5) * 100);
    positions.push((Math.random() - 0.5) * 100);
    positions.push((Math.random() - 0.5) * 100);
}

starGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
);

const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.08
});

const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);
animate (stars.rotation.y += 0.0005;
stars.rotation.x += 0.0002;);

// GSAP Animation
gsap.from(".content h1",{
y:-100,
opacity:0,
duration:1
});

gsap.from(".content p",{
y:50,
opacity:0,
duration:1,
delay:.4
});

gsap.from("button",{
scale:0,
duration:1,
delay:.8
});

// Responsive
window.addEventListener("resize",()=>{

camera.aspect=600/600;
camera.updateProjectionMatrix();

renderer.setSize(600,600);

});