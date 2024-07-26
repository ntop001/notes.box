function setupPlayerNC2_0() {
	var audios = []
	for (var i = 1; i <= 48; i++) {
   		audios.push(`https://online1.tingclass.net/lesson/shi0529/0000/44/${i}.mp3`);
	}
	setupAudioPlayer(audios)
}

function setupPlayerNC2_1() {
	var audios = []
	for (var i = 48; i <= 96; i++) {
   		audios.push(`https://online1.tingclass.net/lesson/shi0529/0000/44/${i}.mp3`);
	}
	setupAudioPlayer(audios)
}

function setupPlayerNC3() {
	var audios = NC3_Audios
	setupAudioPlayer(audios)
}

function setupPlayerNC4() {
	var audios = []
	for (var i = 1; i <= 48; i++) {
   		audios.push(`https://online1.tingclass.net/lesson/shi0529/0000/46/${i}.mp3`);
	}
	setupAudioPlayer(audios)
}

// setup audio player
function setupAudioPlayer(audios) {
	var x = 0;
    var player = document.getElementById("player");
    player.src = audios[0]

    // play next
    player.addEventListener('ended',function(){
      	player.pause();
 		player.src = audios[x++%audios.length]
 		player.load();
 		player.play();
    });

    // indicator player status
    var indicator = document.getElementById("indicator")
    player.addEventListener('pause',function(){
    	indicator.style.display = "none";
    })
    player.addEventListener('playing',function(){
    	indicator.style.display = "block";
    })

    // play
    var play = document.getElementById("play")
    play.addEventListener('click', function() {
    	player.load();
 		player.play();
    })

    // pause
    var pause = document.getElementById("pause")
    pause.addEventListener('click', function() {
    	player.pause()
    })

    // shuffle
    var shuffle = document.getElementById("shuffle")
    shuffle.addEventListener('click', function() {
    	shuffleArray(audios)
    	
    	// play next
    	player.pause();
 		player.src = audios[x++%audios.length]
 		player.load();
 		player.play();
    })
}

// shuffle array
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// nc3 audios
var NC3_Audios = [
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/01_499.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/02_226.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/03_122.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/04_182.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/05_131.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/06_344.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/07_038.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/08_535.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/09_609.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/10_289.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/11_509.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/12_459.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/13_310.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/14_813.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/15_747.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/16_317.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/17_129.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/18_733.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/19_571.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/20_959.mp3",

	"https://online2.tingclass.net/lesson/shi0529/0008/8426/21_042.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/22_147.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/23_495.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/24_015.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/25_133.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/26_549.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/27_369.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/28_070.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/29_404.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/30_343.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/31_715.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/32_767.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/33_515.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/34_218.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/35_076.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/36_573.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/37_381.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/38_807.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/39_657.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/40_526.mp3",

	"https://online2.tingclass.net/lesson/shi0529/0008/8426/41_561.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/42_586.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/43_681.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/44_412.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/45_128.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/46_483.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/47_073.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/48_857.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/49_339.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/50_600.mp3",

	"https://online2.tingclass.net/lesson/shi0529/0008/8426/51_563.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/52_513.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/53_727.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/54_697.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/55_867.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/56_544.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/57_865.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/58_721.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/59_476.mp3",
	"https://online2.tingclass.net/lesson/shi0529/0008/8426/60_579.mp3",
]

