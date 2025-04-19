//INICIALIZAÇÃO DO F7 QUANDO DISPOSITIVO ESTÁ PRONTO
document.addEventListener('deviceready', onDeviceReady, false);
var app = new Framework7({
	// App root element
	el: '#app',
	// App Name
	name: 'My App',
	// App id
	id: 'com.myapp.test',
	// Enable swipe panel
	panel: {
		swipe: true,
	},
	dialog: {
		buttonOk: 'Sim',
		buttonCancel: 'Cancelar',
	},
	// Add default routes
	routes: [
		{
			path: '/index/',
			url: 'index.html',
			animate: false,
			on: {
				pageBeforeIn: function (event, page) {
					// fazer algo antes da página ser exibida
					$("#menuPrincipal").show("fast");
				},
				pageAfterIn: function (event, page) {
					// fazer algo depois da página ser exibida
				},
				pageInit: function (event, page) {
					// fazer algo quando a página for inicializada
				},
				pageBeforeRemove: function (event, page) {
					// fazer algo antes da página ser removida do DOM
				},
			}
		},
		{
			path: '/informacao/',
			url: 'informacao.html',

			options: {
				transition: 'f7-push',
			},
			on: {
				pageBeforeIn: function (event, page) {
					// fazer algo antes da página ser exibida
				},
				pageAfterIn: function (event, page) {
					// fazer algo depois da página ser exibida
				},
				pageInit: function (event, page) {
					// fazer algo quando a página for inicializada
				},
				pageBeforeRemove: function (event, page) {
					// fazer algo antes da página ser removida do DOM
				},
			}
		},
		{
			path: '/formulario/',
			url: 'formulario.html',
			options: {
				transition: 'f7-push',
			},
			on: {
				pageBeforeIn: function (event, page) {
					// fazer algo antes da página ser exibida
				},
				pageAfterIn: function (event, page) {
					// fazer algo depois da página ser exibida
				},
				pageInit: function (event, page) {
					// fazer algo quando a página for inicializada

					if (!window._scriptPDFCarregado) {
						$.getScript('js/exportadorPDF.js')
						  .done(function () {
							window._scriptPDFCarregado = true;
							initFormularioPDF();
							console.log("Script do formulário carregado!");
						  })
						  .fail(function () {
							console.error("Falha ao carregar exportadorPDF.js");
						  });
					  }
					  
				},
				pageBeforeRemove: function (event, page) {
					// fazer algo antes da página ser removida do DOM
				},
			}
		}
		,

		{
			path: '/configuracao/',
			url: 'configuracao.html',
			options: {
				transition: 'f7-push',
			},
			on: {
				pageBeforeIn: function (event, page) {
					// fazer algo antes da página ser exibida
				},
				pageAfterIn: function (event, page) {
					// fazer algo depois da página ser exibida
				},
				pageInit: function (event, page) {
					// fazer algo quando a página for inicializada

					// Carrega o script de configuração
					$.getScript('js/configuracao.js')
						.done(function () {
							initConfiguracao(); // Chama a função manualmente
							console.log("Script do formulário carregado!");
						})
						.fail(function () {
							console.error("Falha ao carregar exportadorPDF.js");
						});
				},
				pageBeforeRemove: function (event, page) {
					// fazer algo antes da página ser removida do DOM
				},
			}
		},

		{
			path: '/materiaisComplementares/',
			url: 'materiaisComplementares.html',
			options: {
				transition: 'f7-push',
			},
			on: {
				pageInit: function (event, page) {

					$("#menuPrincipal").hide("fast");


					function abrirLink(url) {
						const isHttp = url.startsWith('http');

						if (window.cordova && cordova.InAppBrowser) {
							// Ambiente nativo (app Android/iOS)
							if (isHttp) {
								cordova.InAppBrowser.open(url, '_system', 'location=yes');
							} else {
								const finalUrl = cordova.file.applicationDirectory + 'www/' + url;
								cordova.InAppBrowser.open(finalUrl, '_blank', 'location=yes');
							}
						} else {
							// Ambiente navegador (VS Code ou hospedagem)
							if (isHttp) {
								window.open(url, '_blank');
							} else {
								alert('Este conteúdo está disponível apenas no aplicativo instalado.');
							}
						}
					}

					function ativarLinksMateriais() {
						const container = page.el.querySelector('.page-content');
						const links = container.querySelectorAll('a[data-abrir-link]');

						links.forEach(function (el) {
							el.addEventListener('click', function (e) {
								e.preventDefault();
								const url = el.getAttribute('href');
								abrirLink(url);
							});
						});
					}

					if (window.cordova && window.cordova.InAppBrowser && window.cordova.file) {
						ativarLinksMateriais();
					} else {
						document.addEventListener("deviceready", ativarLinksMateriais, false);

						// Para navegador, também ativa direto
						if (!window.cordova) {
							ativarLinksMateriais();
						}
					}
				}
			}
		},

		{
			path: '/sobreAutismo/',
			url: 'sobreAutismo.html',
			options: {
				transition: 'f7-push',
			},
			on: {
				pageBeforeIn: function (event, page) {
					// fazer algo antes da página ser exibida
					$("#menuPrincipal").hide("fast");

				},
				pageAfterIn: function (event, page) {
					// fazer algo depois da página ser exibida
				},
				pageInit: function (event, page) {
					// fazer algo quando a página for inicializada
				},
				pageBeforeRemove: function (event, page) {
					// fazer algo antes da página ser removida do DOM
				},
			}
		},

		{
			path: '/hiperfocos/',
			url: 'hiperfocos.html',
			options: {
				transition: 'f7-push',
			},
			on: {
				pageBeforeIn: function (event, page) {
					// fazer algo antes da página ser exibida
					$("#menuPrincipal").hide("fast");

				},
				pageAfterIn: function (event, page) {
					// fazer algo depois da página ser exibida
				},
				pageInit: function (event, page) {
					// fazer algo quando a página for inicializada
				},
				pageBeforeRemove: function (event, page) {
					// fazer algo antes da página ser removida do DOM
				},
			}
		},

		{
			path: '/nivelAutismo/',
			url: 'nivelAutismo.html',
			options: {
				transition: 'f7-push',
			},
			on: {
				pageBeforeIn: function (event, page) {
					// fazer algo antes da página ser exibida
					$("#menuPrincipal").hide("fast");


				},
				pageAfterIn: function (event, page) {
					// fazer algo depois da página ser exibida
				},
				pageInit: function (event, page) {
					// fazer algo quando a página for inicializada
				},
				pageBeforeRemove: function (event, page) {
					// fazer algo antes da página ser removida do DOM
				},
			}
		},

		{
			path: '/dicasManejo/',
			url: 'dicasManejo.html',
			options: {
				transition: 'f7-push',
			},
			on: {
				pageBeforeIn: function (event, page) {
					// fazer algo antes da página ser exibida
					$("#menuPrincipal").hide("fast");


				},
				pageAfterIn: function (event, page) {
					// fazer algo depois da página ser exibida


				},
				pageInit: function (event, page) {
					// fazer algo quando a página for inicializada
				},
				pageBeforeRemove: function (event, page) {
					// fazer algo antes da página ser removida do DOM
				},
			}
		},


		{
			path: '/nivelAutismoGrau1/',
			url: 'nivelAutismoGrau1.html',
			options: {
				transition: 'f7-flip',
			},
			on: {
				pageBeforeIn: function (event, page) {
					// fazer algo antes da página ser exibida
					$("#menuPrincipal").hide("fast");


				},
				pageAfterIn: function (event, page) {
					// fazer algo depois da página ser exibida


				},
				pageInit: function (event, page) {
					// fazer algo quando a página for inicializada
				},
				pageBeforeRemove: function (event, page) {
					// fazer algo antes da página ser removida do DOM
				},
			}
		},
		{
			path: '/nivelAutismoGrau2/',
			url: 'nivelAutismoGrau2.html',

			options: {
				transition: 'f7-flip',
			},
			on: {
				pageBeforeIn: function (event, page) {
					// fazer algo antes da página ser exibida
					$("#menuPrincipal").hide("fast");


				},
				pageAfterIn: function (event, page) {
					// fazer algo depois da página ser exibida


				},
				pageInit: function (event, page) {
					// fazer algo quando a página for inicializada
				},
				pageBeforeRemove: function (event, page) {
					// fazer algo antes da página ser removida do DOM
				},
			}
		},
		{
			path: '/nivelAutismoGrau3/',
			url: 'nivelAutismoGrau3.html',
			options: {
				transition: 'f7-flip',
			},
			on: {
				pageBeforeIn: function (event, page) {
					// fazer algo antes da página ser exibida
					$("#menuPrincipal").hide("fast");


				},
				pageAfterIn: function (event, page) {
					// fazer algo depois da página ser exibida


				},
				pageInit: function (event, page) {
					// fazer algo quando a página for inicializada
				},
				pageBeforeRemove: function (event, page) {
					// fazer algo antes da página ser removida do DOM
				},
			}
		},


	],
	// ... other parameters
});

//Para testes direto no navegador
var mainView = app.views.create('.view-main', { url: '/index/' });

//EVENTO PARA SABER O ITEM DO MENU ATUAL
app.on('routeChange', function (route) {
	var currentRoute = route.url;
	console.log(currentRoute);
	document.querySelectorAll('.tab-link').forEach(function (el) {
		el.classList.remove('active');
	});
	var targetEl = document.querySelector('.tab-link[href="' + currentRoute + '"]');
	if (targetEl) {
		targetEl.classList.add('active');
	}
});


function onDeviceReady() {
	//Quando estiver rodando no celular
	var mainView = app.views.create('.view-main', { url: '/index/' });

	//COMANDO PARA "OUVIR" O BOTAO VOLTAR NATIVO DO ANDROID 	
	document.addEventListener("backbutton", function (e) {

		if (mainView.router.currentRoute.path === '/index/') {
			e.preventDefault();
			app.dialog.confirm('Deseja sair do aplicativo?', function () {
				navigator.app.exitApp();
			});
		} else {
			e.preventDefault();
			mainView.router.back({ force: true });
		}
	}, false);

}