import {Howl, Howler} from 'howler';
Howler.volume(0.8);

const music = new Howl({
	src: [process.env.BASE_URL + 'audio/compressed_music_v3.m4a'],
	html5: true,
	loop: true,
	volume: 0,
	onloaderror: function(id, err) {
		console.log(err)
	},
	onplayerror: function(id, err) {
		console.log(err)
	},
});

export default {
	startMusic() {
		const starting_point = Math.round((music.duration() * (3 /4)) * Math.random())
		music.seek(starting_point)
		music.play();
		music.fade(0, 1, 6000);
	}
}