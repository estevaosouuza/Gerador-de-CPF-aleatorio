var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://consulta-situacao-cpf-cnpj.p.rapidapi.com/consultaSituacaoCPF?cpf=01965827683",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "consulta-situacao-cpf-cnpj.p.rapidapi.com",
		"x-rapidapi-key": "41dec7d4edmshdae53f00af2c64ep1062b2jsn71684c9dab11"
	}
}

$.ajax(settings).done(function (response) {
    console.log(response);
    $('#cpf').innerHTML += response;
});