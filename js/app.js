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
		this.portfolio= projekti;
	});


	var projekti = [
	{
		nazivProjekta:'Proba',
		slike: [
			{
				naziv:'medved',
				jpg:'../img/portfolio/1.jpg'
			},
			{
				naziv:'vuk',
				jpg:'../img/portfolio/2.jpg'
			}
		]
	}

	];

})();