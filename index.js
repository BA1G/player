
var song2= new Audio("naat-2.mp3");
var song3= new Audio("naat-3.mp3");
var song4= new Audio("naat-4.mp3");
var song5= new Audio("naat-5.mp3");
var song6= new Audio("naat-6.mp3");
var song7= new Audio("naat-7.mp3");
var song8= new Audio("naat-8.mp3");
var song9= new Audio("naat-9.mp3");
var song10= new Audio("naat-10.mp3");

const songs= [song1,song2,song3,song4,song5,song6,song7,song8,song9,song10];
const songNames= ["Asma-ul-husna","Way of tears","Taweel-shaoq","Fatat-alkhair","Peace upon","Liyakun-yaom","Madina","ALLAH ALLAH","Ayat-ul-kursi","Hasbi-rabbi"];
const colours= ["#27a1ff","#001717","green","#fd1d1d","black","#fcb045","black","#94bbe9","black","red"];
let songIndex= 0;

$(".play-pause").on("click",function() 
{
    if (songs[songIndex].paused) 
    { 
        $(".name").html(songNames[songIndex]); 
        songs[songIndex].play();
        $(".play-pause").attr("src","pause.png");
        setInterval(Time, 1000);
        $("body"). css("background-color",colours[songIndex]);
       
        let aud= songs[songIndex];
          aud.onended = function() 
            {
                $(".next").click();
            };
    } 
    else 
    {
        songs[songIndex].pause();
        $(".play-pause").attr("src","play.png");
        setInterval(Time, 1000);
        $("body"). css("background-color",colours[songIndex]);
        
        let aud= songs[songIndex];
        aud.onended = function() 
          {
              $(".next").click();
          };
    }         
});

$(".previous").on("click",function() 
{
    songs[songIndex].pause();
    songIndex--;
    $(".name").html(songNames[songIndex]);
    if (songIndex<0)
     {
     songIndex= songs.length-1;   
     $(".name").html(songNames[songIndex]);
     var bgImg = "img"+songIndex+".jpg";
     $(".indicator-img").attr("src",bgImg);
    }

    if (songs[songIndex].paused) 
    { 
        $(".play-pause").attr("src","pause.png");
    } 
    else 
    {
        $(".play-pause").attr("src","play.png");
    }  
    var bgImg = "img"+songIndex+".jpg";
    $(".indicator-img").attr("src",bgImg);
    songs[songIndex].play();
    setInterval(Time, 1000);
    $("body"). css("background-color",colours[songIndex]);
    
    let aud= songs[songIndex];
    aud.onended = function() 
      {
          $(".next").click();
      };
});

$(".next").on("click",function () 
{  
    songs[songIndex].pause();
    songIndex++;  
    $(".name").html(songNames[songIndex]);
    if(songIndex>songs.length-1)
    {
      songIndex= 0;
      $(".name").html(songNames[songIndex]);
      var bgImg = "img"+songIndex+".jpg";
      $(".indicator-img").attr("src",bgImg);
   }

   if (songs[songIndex].paused) 
   { 
       $(".play-pause").attr("src","pause.png");
   } 
   else 
   {
       $(".play-pause").attr("src","play.png");
   }    
   var bgImg = "img"+songIndex+".jpg";
   $(".indicator-img").attr("src",bgImg);
   songs[songIndex].play();
   setInterval(Time, 1000);
   $("body").css("background-color",colours[songIndex]);

   let aud= songs[songIndex];
          aud.onended = function() 
            {
                $(".next").click();
            };
});

function Time() 
{
 // Calculate the time left and the total duration
 let currentMinutes = Math.floor(songs[songIndex].currentTime / 60);
 let currentSeconds = Math.floor(songs[songIndex].currentTime - currentMinutes * 60);
 let durationMinutes = Math.floor(songs[songIndex].duration / 60);
 let durationSeconds = Math.floor(songs[songIndex].duration - durationMinutes * 60);

 // Add a zero to the single digit time values
 if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
 if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
 if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
 if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

 // Display the updated duration
var curr_time = currentMinutes + ":" + currentSeconds;
var total_duration = durationMinutes + ":" + durationSeconds;

 $(".liveTime").html(curr_time);
 $(".durationTime").html(total_duration);

}