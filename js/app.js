(function() {

var app = angular.module('site', []);

	app.controller("PanelController", function($scope) {
		this.tab=1;

		this.selectTab= function(setTab){ 
			this.tab=setTab;
		};

		this.isSelected= function(checkTab) {
			return this.tab===checkTab;
		};

		$scope.home = "home.html"
		$scope.about = "about.html";
		$scope.portfolio= "portfolio.html";
		$scope.contact = "contact.html";

	});

	app.controller('PortfolioController', function($scope) {
		this.tab=0;

		this.selectTab= function(setTab){ 
			this.tab=setTab;
		};

		this.isSelected= function(checkTab) {
			console.log(this.tab);
			return this.tab===checkTab;
		};

		this.projekti=projekti;
		this.slike= slike;
		this.grafike= grafike;

		$scope.viewSlike= "slike.html";
		$scope.viewGrafike= "grafike.html"
	});












//////////////////////// PORTFOLIO /////////////////////////////

var projekti = [
	{
		redBr:1,
		nazivProjekta:'Slike',
		opisProjekta:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. N ',
		slika: 
		{
			naziv:'medved',
			jpg:'./img/portfolio/1.jpg'
		}
	},
	{
		redBr:2,
		nazivProjekta:'Grafike',
		opisProjekta:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id purus justo. ',
		slika: 
		{
			naziv:'medved',
			jpg:'./img/portfolio/1.jpg'
		}
	},
	{
		redBr:3,
		nazivProjekta:'Ilustracije',
		opisProjekta:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id purus justo.  ',
		slika: 
		{
			naziv:'medved',
			jpg:'./img/portfolio/2.jpg'
		}
	},
	{
		redBr:4,
		nazivProjekta:'Animacije',
		opisProjekta:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium enim at purus. ',
		slika: 
		{
			naziv:'medved',
			jpg:'./img/portfolio/2.jpg'
		}
	},

	];





///////////////////////////////// GRAFIKE ////////////////////////////////////////////////////


var grafike = [
	{
		nazivProjekta:'Slike',
		opisProjekta:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. N ',
		slike: [
			{
				naziv:'medved',
				jpg:'./img/portfolio/1.jpg'
			},
			{
				naziv:'vuk',
				jpg:'./img/portfolio/2.jpg'
			}
		]
	},
	{
		nazivProjekta:'Proba2',
		opisProjekta:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id purus justo. ',
		slike: [
			{
				naziv:'medved',
				jpg:'./img/portfolio/2.jpg'
			},
			{
				naziv:'vuk',
				jpg:'./img/portfolio/1.jpg'
			}
		]
	},
	{
		nazivProjekta:'Proba3',
		opisProjekta:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id purus justo.  ',
		slike: [
			{
				naziv:'medved',
				jpg:'./img/portfolio/3.jpg'
			},
			{
				naziv:'vuk',
				jpg:'./img/portfolio/2.jpg'
			}
		]
	},
	{
		nazivProjekta:'Proba4',
		opisProjekta:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium enim at purus. ',
		slike: [
			{
				naziv:'medved',
				jpg:'./img/portfolio/1.jpg'
			},
			{
				naziv:'vuk',
				jpg:'./img/portfolio/2.jpg'
			}
		]
	},

	];



/////////////////////////////////////// SLIKE ///////////////////////////////////////////////

	var slike = [
	{
		nazivProjekta:'Slike',
		opisProjekta:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. N ',
		slike: [
			{
				naziv:'medved',
				jpg:'./img/portfolio/1.jpg'
			},
			{
				naziv:'vuk',
				jpg:'./img/portfolio/2.jpg'
			}
		]
	},
	{
		nazivProjekta:'Proba2',
		opisProjekta:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id purus justo. ',
		slike: [
			{
				naziv:'medved',
				jpg:'./img/portfolio/2.jpg'
			},
			{
				naziv:'vuk',
				jpg:'./img/portfolio/1.jpg'
			}
		]
	},
	{
		nazivProjekta:'Proba3',
		opisProjekta:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id purus justo.  ',
		slike: [
			{
				naziv:'medved',
				jpg:'./img/portfolio/3.jpg'
			},
			{
				naziv:'vuk',
				jpg:'./img/portfolio/2.jpg'
			}
		]
	},
	{
		nazivProjekta:'Proba4',
		opisProjekta:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium enim at purus. ',
		slike: [
			{
				naziv:'medved',
				jpg:'./img/portfolio/1.jpg'
			},
			{
				naziv:'vuk',
				jpg:'./img/portfolio/2.jpg'
			}
		]
	},

	];




})();