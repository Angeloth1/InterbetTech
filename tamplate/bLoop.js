var bannerStatus = 1; //img count 1=firstImg 2=secondImg...
        var bannerTimer= 4000; //xronos enalagis

        //gia na ksekinisi me to pou aniksw
        window.onload=function() {
            bannerLoop();
        }
        //gia na ginete i enalagi kathe 4s
        var startBannerLoop= setInterval(function() {
            bannerLoop();
        }, bannerTimer);

        function bannerLoop(){
            //tha exw tria if ena gia kathe image
            if(bannerStatus ===1){
              //gia na paei i 2 sta deksia xwris na fanei
              //dinw opacity 0
                document.getElementById("imgban2").style.opacity ="0";

                setTimeout(function(){
                  //i prwti foto einai sto kentro kai stin mesi
                    document.getElementById("imgban1").style.right ="0px";
                    document.getElementById("imgban1").style.zIndex ="1000";
                  //i deuteri sta deksia tis kai pio panw 
                  //gia na ginei to slide
                    document.getElementById("imgban2").style.right ="-1200px";
                    document.getElementById("imgban2").style.zIndex ="1500";
                  //i triti sta aristera kai pio katw
                    document.getElementById("imgban3").style.right ="1200px";
                    document.getElementById("imgban3").style.zIndex ="500";
                }, 500); 
                
                //dinw xrono prin to kathe komati tou if kai gia na
                //min krasari paleuwntas na ta treksi ola mazi kai 
                //gia logous estitikis
                
                setTimeout(function(){
                  //kai tin ksana emfanizw (img2)
                    document.getElementById("imgban2").style.opacity ="1";
                }, 1000);
                bannerStatus = 2;
            }
            else if(bannerStatus ===2){
                //kanw akrivws ta idia alla gia ta epomena imgs stin seira
                document.getElementById("imgban3").style.opacity ="0";

                setTimeout(function(){
                    document.getElementById("imgban2").style.right ="0px";
                    document.getElementById("imgban2").style.zIndex ="1000";
                    document.getElementById("imgban3").style.right ="-1200px";
                    document.getElementById("imgban3").style.zIndex ="1500";
                    document.getElementById("imgban1").style.right ="1200px";
                    document.getElementById("imgban1").style.zIndex ="500";
                }, 500);                 
                setTimeout(function(){
                    document.getElementById("imgban3").style.opacity ="1";
                }, 1000);
                bannerStatus = 3;
            }
            else if(bannerStatus ===3){
                document.getElementById("imgban1").style.opacity ="0";

                setTimeout(function(){
                    document.getElementById("imgban3").style.right ="0px";
                    document.getElementById("imgban3").style.zIndex ="1000";
                    document.getElementById("imgban1").style.right ="-1200px";
                    document.getElementById("imgban1").style.zIndex ="1500";
                    document.getElementById("imgban2").style.right ="1200px";
                    document.getElementById("imgban2").style.zIndex ="500";
                }, 500);                 
                setTimeout(function(){
                    document.getElementById("imgban1").style.opacity ="1";
                }, 1000);
                bannerStatus =1;
            }
        }