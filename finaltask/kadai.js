function main()

{

    var volume = new KVS.LobsterData();

    var screen = new KVS.THREEScreen();



    screen.init(volume, {

      width: window.innerWidth * 0.8,

      height: window.innerHeight,

      targetDom: document.getElementById('display'),

      enableAutoResize: false

    });



    setup_isovalue();

    screen.loop();



    function setup_isovalue()

    {

        var bounds=Bounds(volume)

        var color = new KVS.Vec3( 0, 0, 0 );

        var smin = volume.min_value;

        var smax = volume.max_value;

        var isovalue = KVS.Mix( smin, smax, 0.5 );

        screen.scene.add(bounds)

        var r = 1;

        var g = 1;

        var b = 1;

        var isosurface = Isosurfaces2(volume,isovalue,r,g,b,screen);


        document.getElementById('label').innerHTML = "Isovalue: " + Math.round( isovalue );

        document.getElementById('rlabel').innerHTML = "Red: " + Math.round( r );

        document.getElementById('glabel').innerHTML = "Green: " + Math.round( g );

        document.getElementById('blabel').innerHTML = "Blue: " + Math.round( b );





        screen.scene.add( isosurface );

        document.getElementById('isovalue')

            .addEventListener('mousemove', function() {

                var value = +document.getElementById('isovalue').value;

                var isovalue = KVS.Mix( smin, smax, value );

                document.getElementById('label').innerHTML = "Isovalue: " + Math.round( isovalue );

            });



        document.getElementById('redvalue')

            .addEventListener('mousemove', function() {

                r = document.getElementById('redvalue').value;

                document.getElementById('rlabel').innerHTML = "Red: " + Math.round( r );

            });



        document.getElementById('greenvalue')

            .addEventListener('mousemove', function() {

                g = document.getElementById('greenvalue').value;

                document.getElementById('glabel').innerHTML = "Green: " + Math.round( g );

            });

        document.getElementById('bluevalue')

            .addEventListener('mousemove', function() {

                b = document.getElementById('bluevalue').value;

                document.getElementById('blabel').innerHTML = "Blue: " + Math.round( b );

            });





          //  function SR(){





//            }



       // document.getElementById('change-button')

         //   .addEventListener('click', function() {

           //     var value = +document.getElementById('isovalue').value;

             //   screen.scene.remove( bounds );

               // screen.scene.remove( isosurface );

                //SR();

               // var isovalue = KVS.Mix( smin, smax, value );

                //isosurface = Isosurfaces2(volume,isovalue,r,g,b,screen)

               // bounds = Bounds(volume)

               // screen.scene.add(bounds);

               // screen.scene.add( isosurface );

            //});





         //document.getElementById('change-data-button')

          //  .addEventListener('click', function() {

            //    var value = +document.getElementById('isovalue').value;

              //  screen.scene.remove( bounds );

               // screen.scene.remove( isosurface );

               // volume = SD();

               // var isovalue = KVS.Mix( smin, smax, value );

               // isosurface = Isosurfaces2(volume,isovalue,r,g,b,screen)

               // bounds = Bounds(volume)

               // screen.scene.add(bounds);

               // screen.scene.add( isosurface );

           // });





        document.getElementById('change-isovalue-button')

            .addEventListener('click', function() {

                screen.scene.remove( isosurface );

                screen.scene.remove( bounds );



                var value = +document.getElementById('isovalue').value;

                var r = document.getElementById('redvalue').value;

                var g = document.getElementById('greenvalue').value;

                 var b = document.getElementById('bluevalue').value;

                var isovalue = KVS.Mix( smin, smax, value );

                isosurface = Isosurfaces2(volume,isovalue,r,g,b,screen);

                bounds = Bounds(volume)

                screen.scene.add( isosurface );

                screen.scene.add(bounds);

            });



        document.addEventListener( 'mousemove', function() {

            screen.light.position.copy( screen.camera.position );

        });



        window.addEventListener('resize', function() {

            screen.resize([

                window.innerWidth * 0.8,

                window.innerHeight

            ]);

        });



        //screen.draw();

    }

}

function changeIsovalue() {



}
