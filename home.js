import * as THREE from './node_modules/three/build/three.module.js';
			import Stats from './node_modules/three/examples/jsm/libs/stats.module.js';
			import { GUI } from './node_modules/three/examples/jsm/libs/dat.gui.module.js';
			import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls.js';
			import { SVGLoader } from './node_modules/three/examples/jsm/loaders/SVGLoader.js';
			var renderer, stats, scene, camera, gui, guiData;
			
			var container = document.getElementById( 'container' );

			scene = new THREE.Scene();
			scene.background = new THREE.Color( 0xb0b0b0 );

			camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.5, 1000);
			camera.position.z = 200;

			renderer = new THREE.WebGLRenderer();
			renderer.setPixelRatio( window.devicePixelRatio );
			renderer.setSize(window.innerWidth,window.innerHeight);

			container.appendChild(renderer.domElement);

			var controls = new OrbitControls( camera, renderer.domElement );
			controls.screenSpacePanning = true

			var loader = new SVGLoader();

			window.addEventListener( 'resize', onWindowResize, false );

			loader.load(
				// resource URL
				'res/meld.svg',
				// called when the resource is loaded
				function ( data ) {
			
					var paths = data.paths;
					var group = new THREE.Group();
					group.scale.multiplyScalar( 0.25 );
					group.position.x = - 70;
					group.position.y =80;
					group.scale.y *= - 1;

			
					for ( var i = 0; i < paths.length; i ++ ) {
			
						var path = paths[ i ];
			
						var material = new THREE.MeshBasicMaterial( {
							color: path.color,
							side: THREE.DoubleSide,
							depthWrite: false
						} );
			
						var shapes = path.toShapes( true );
			
						for ( var j = 0; j < shapes.length; j ++ ) {
			
							var shape = shapes[ j ];
							var geometry = new THREE.ShapeBufferGeometry( shape );
							var mesh = new THREE.Mesh( geometry, material );
							group.add( mesh );
			
						}
			
					}
			
					scene.add( group );
			
				});

				
			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}

			function animate() {
				requestAnimationFrame( animate );
				renderer.render( scene, camera );
			}
			animate();
			
			