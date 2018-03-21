var game = new Phaser.Game(400, 500);

var mainState = {
	preload: function(){
		game.load.image("bird", 'bird.png'); //jak się będzie nazywał obrazek w naszym pliku
		// wrzucanie plików z obrazkami i zdjęciami audio

	},

	create:function(){// ustawianie na miejscu obiektów które mają się pojawić po starcie gry

		game.stage.backgroundColor = '#cef6ff';// ZMIANA KOLORU tła 
		game.physics.startSystem(Phaser.Physics.ARCADE); // włączamy fizykę Arkadową(góra,dół,przód,tył(2D)) 
		
		this.bird = game.add.sprite(100, 400, 'bird'); // gro dodaj sprite
		game.physics.arcade.enable(this.bird); // określamy że fizyka działa tylko na ptaka 

		this.bird.body.gravity.y = 1000; //grawitacja działa wokół osi y (pionowo)

		
		
	},

	upload:function(){
		//co ma się zmieniać w czasie 

	},
}; //koniec definiowania zmiennej mainState

game.state.add("main",mainState) // 
game.state.start("main");
