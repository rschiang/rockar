define(['threejs'], function(THREE) {
    // Create renderer
    var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor( 0x000000, 0 );

    // Append canvas to DOM
    var canvas = renderer.domElement;
    document.body.appendChild(canvas);

    return renderer;
});
