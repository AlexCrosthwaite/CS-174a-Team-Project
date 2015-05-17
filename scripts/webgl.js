/**
 * WebGL Setup Code
 */

function ready(meshes) {
    app.meshes = meshes;
    app.mode = GAMESTATE_LOADED;
    canvas = document.getElementById("gl-canvas");
    initGL(canvas);
    initAllShaders();
    initBuffers();
    initTextures();
    // Might as well do this now
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.enable(gl.DEPTH_TEST);
}



window.onload = function() {
    OBJ.downloadMeshes({
            'spaceship': 'assets/models/higher-poly-spaceship.obj',
            'skybox': 'assets/models/cube.obj',
            'planet': 'assets/models/sphere.obj',
        },
        ready);
}

/**
 * Animation Code
 */

function tick(timeNow) {
	app.animFrame = requestAnimFrame(tick);
	app.elapsed = timeNow - app.lastTime;
	app.lastTime = timeNow;
	app.drawScene();
}