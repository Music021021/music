	let musicas = [
		{titulo:'perdido na minha...',artista:'Dreko', src:'./audio/perdido.mp3', img:'./images/perdido.jpg'},
		{titulo:'Hold ON',artista:'Chord Overstreet', src:'./audio/HoldOn.mp3', img:'./images/HoldOn.jpg'},
		{titulo:'Runaway',artista:'Aurora', src:'./audio/aurora.mp3', img:'./images/aurora.jpg'}
	];
	
	var musica = document.querySelector('audio');
	var indexMusica = 0;
	
	var duracaoMusica = document.querySelector('.fim');
	var imagem = document.querySelector('img');
	var nomeMusica = document.querySelector('.descricao h2');
	var nomeArtista = document.querySelector('.descricao i');
	
	
	duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
	
	// Eventos
	document.querySelector('.botao-play').addEventListener('click', tocarMusica);
	
	document.querySelector('.botao-pause').addEventListener('click', pausarMusica);
	
	musica.addEventListener('timeupdate', atualizarBarra);
	
	document.querySelector('.anterior').addEventListener('click', () => {
		indexMusica--;
		if (indexMusica < 0) {
			indexMusica = 2;
		}
		renderizarMusica(indexMusica);
	});
	
	document.querySelector('.proxima').addEventListener('click', () => {
		indexMusica++;
		if (indexMusica > 2) {
			indexMusica = 0;
		}
		renderizarMusica(indexMusica);
	});
	
	// Funcao
	function renderizarMusica(index){
		musica.setAttribute('src', musicas[index].src);
		musica.addEventListener('loadeddata', () => {
			nomeMusica.textContent = musicas[index].titulo;
			nomeArtista.textContent = musicas[index].artista;
			imagem.src = musicas[index].img;
			duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
		});
	}
	
	function tocarMusica(){
	musica.play();
	document.querySelector('.botao-pause').style.display = 'block';
	document.querySelector('.botao-play').style.display = 'none';
	}
	
	function pausarMusica(){
	musica.pause();
	document.querySelector('.botao-pause').style.display = 'none';
	document.querySelector('.botao-play').style.display = 'block';
	}
	
	function atualizarBarra(){
	let barra = document.querySelector('progress');
	barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
	let tempoDecorrido = document.querySelector('.inicio');
	tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime))
	}
	
	function segundosParaMinutos(segundos){
	let campoMinutos = Math.floor(segundos / 60);
	let campoSegundos = segundos % 60;
	if (campoSegundos < 10){
		campoSegundos = '0' + campoSegundos;
	}
	return campoMinutos+':'+campoSegundos;
	}