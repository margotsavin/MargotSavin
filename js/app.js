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
		this.currentGallery=100;
		this.currentProject=0;

		

		this.selectTab= function(setTab){ 
			this.tab=setTab;
		};

		this.isSelected= function(checkTab) {
			console.log(this.tab);
			return this.tab===checkTab;
		};

		this.selectProject = function(setTab) {
			this.currentProject = setTab; 
		};

		this.isSelectedProject = function(checkTab) {
			return this.currentProject === checkTab;
		};

		this.selectGallery= function(setTab){ 
			this.currentGallery=setTab;
		};

		this.isSelectedGallery= function(checkTab) {
			console.log(this.tab + "g");
			if (checkTab === 100) {
				return false;
			}
			return this.currentGallery===checkTab;
		};




		this.projekti=projekti;
		this.paintings= paintings;
		this.drawings= crtezi;
		this.illustrations=ilustracije;
		this.karakteri=karakteri;

		$scope.viewProjekti ="projekti.html";
		$scope.viewSlike= "paintings.html";
		$scope.viewCrtezi= "drawings.html";
		$scope.viewIlustracije = "illustrations.html";
		$scope.viewKarakteri = "character.html";
	});

 










//////////////////////// PORTFOLIO /////////////////////////////

var projekti = [
	{
		redBr:1,
		nazivProjekta:'Paintings',
		opisProjekta:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. N ',
		slika: 
		{
			naziv:'medved',
			jpg:'./img/portfolio/slike/polaCovek/a1.jpg'
		}
	},
	{
		redBr:2,
		nazivProjekta:'Drawings',
		opisProjekta:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id purus justo. ',
		slika: 
		{
			naziv:'medved',
			jpg:'./img/portfolio/crtezi/animals/a11.jpg'
		}
	},
	{
		redBr:3,
		nazivProjekta:'Illustrations',
		opisProjekta:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id purus justo.  ',
		slika: 
		{
			naziv:'medved',
			jpg:'./img/portfolio/2.jpg'
		}
	},
	{
		redBr:4,
		nazivProjekta:'Character Art',
		opisProjekta:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium enim at purus. ',
		slika: 
		{
			naziv:'medved',
			jpg:'./img/portfolio/2.jpg'
		}
	},

	];





///////////////////////////////// GRAFIKE ////////////////////////////////////////////////////


var crtezi = [
	{
		nazivProjekta:'Animals',
		opisProjekta:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. N ',
		slike: [
			{
				naziv:'medved',
				jpg:'./img/portfolio/crtezi/animals/a11.jpg'
			},
			{
				naziv:'medved',
				jpg:'./img/portfolio/crtezi/animals/a2.jpg'
			},
			{
				naziv:'medved',
				jpg:'./img/portfolio/crtezi/animals/a3.jpg'
			},
			{
				naziv:'medved',
				jpg:'./img/portfolio/crtezi/animals/a4.jpg'
			},
			{
				naziv:'medved',
				jpg:'./img/portfolio/crtezi/animals/a5.jpg'
			},
			{
				naziv:'medved',
				jpg:'./img/portfolio/crtezi/animals/a6.jpg'
			},
			{
				naziv:'medved',
				jpg:'./img/portfolio/crtezi/animals/a7.jpg'
			},
			{
				naziv:'medved',
				jpg:'./img/portfolio/crtezi/animals/a8.jpg'
			},
			{
				naziv:'medved',
				jpg:'./img/portfolio/crtezi/animals/a9.jpg'
			},
			{
				naziv:'medved',
				jpg:'./img/portfolio/crtezi/animals/a10.jpg'
			},
			{
				naziv:'medved',
				jpg:'./img/portfolio/crtezi/animals/a1.jpg'
			},
		]
	},
	{
		nazivProjekta:'Intervention',
		opisProjekta:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id purus justo. ',
		slike: [
			{
				naziv:'medved',
				jpg:'./img/portfolio/crtezi/intervention/a4.jpg'
			},
			{
				naziv:'medved',
				jpg:'./img/portfolio/crtezi/intervention/a2.jpg'
			},
			{
				naziv:'medved',
				jpg:'./img/portfolio/crtezi/intervention/a3.jpg'
			},
			{
				naziv:'medved',
				jpg:'./img/portfolio/crtezi/intervention/a1.jpg'
			},
			{
				naziv:'medved',
				jpg:'./img/portfolio/crtezi/intervention/a5.jpg'
			},
			{
				naziv:'medved',
				jpg:'./img/portfolio/crtezi/intervention/a6.jpg'
			},
			{
				naziv:'medved',
				jpg:'./img/portfolio/crtezi/intervention/a7.jpg'
			},
			{
				naziv:'medved',
				jpg:'./img/portfolio/crtezi/intervention/a8.jpg'
			},
		]
	},

	];



/////////////////////////////////////// SLIKE ///////////////////////////////////////////////

	var paintings = [
	{
		nazivProjekta:'Animals',
		opisProjekta:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. N ',
		slike: [
			{
				naziv:'wolf',
				jpg:'./img/portfolio/slike/polaCovek/a1.jpg'
			},
			{
				naziv:'rhino',
				jpg:'./img/portfolio/slike/polaCovek/a2.jpg'
			},
			{
				naziv:'camil',
				jpg:'./img/portfolio/slike/polaCovek/a3.jpg'
			},
			{
				naziv:'owl',
				jpg:'./img/portfolio/slike/polaCovek/a4.jpg'
			},
			{
				naziv:'elephant',
				jpg:'./img/portfolio/slike/polaCovek/a5.jpg'
			},
			{
				naziv:'shark',
				jpg:'./img/portfolio/slike/polaCovek/a6.jpg'
			},
			{
				naziv:'bear',
				jpg:'./img/portfolio/slike/polaCovek/a7.jpg'
			},
			{
				naziv:'aligator',
				jpg:'./img/portfolio/slike/polaCovek/a8.jpg'
			},
			{
				naziv:'dolphin',
				jpg:'./img/portfolio/slike/polaCovek/a9.jpg'
			},
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


///////////////////////////////////////ilustracije /////////////////////////////////////////////////
var ilustracije = [
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



///////////////////////////////////////// ANIMACIJE //////////////////////////////////////////////////////////
var karakteri = [
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
