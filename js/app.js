(function() {

var app = angular.module('site', []);

	app.controller("PanelController", function() {
		this.tab=1;

		this.selectTab= function(setTab){ 
			this.tab=setTab;
		};

		this.isSelected= function(checkTab) {
			return this.tab===checkTab;
		}
	});

	app.controller('PortfolioController', function() {
		this.projekti= projekti;
	});


	var projekti = [
	{
		nazivProjekta:'Proba',
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