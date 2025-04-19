// Versão corrigida - configuracao.js

// Exporta a função para ser chamada manualmente
window.initConfiguracao = function() {
    // Usa a instância existente do Framework7
    const app = Framework7.instance;
    const $$ = Dom7;
    let selectedSex = '';
  
    // Configura os eventos
    function setupEvents() {
      // Remove event listeners antigos para evitar duplicação
      $$('.sex-option').off('click');
      $$('#saveButton').off('click');
  
      // Seleção de sexo
      $$('.sex-option').on('click', function() {
        $$('.sex-option').removeClass('selected');
        $$(this).addClass('selected');
        selectedSex = $$(this).attr('data-sex');
      });
  
      // Botão salvar
      $$('#saveButton').on('click', function() {
        saveData();
      });
    }
  
    // Carrega dados salvos
    function loadData() {
      const savedData = localStorage.getItem('educaMenteChildData');
      if (savedData) {
        try {
          const data = JSON.parse(savedData);
          
          // Preenche os campos
          $$('#name').val(data.name || '');
          $$('#nickname').val(data.nickname || '');
          $$('#age').val(data.age || '');
          $$('#favoriteColor').val(data.favoriteColor || '');
          $$('#supportLevel').val(data.supportLevel || 'Médio');
          $$('#grade').val(data.grade || 'Kindergarten');
          
          // Seleciona o sexo
          if (data.sex) {
            selectedSex = data.sex;
            $$(`[data-sex="${data.sex}"]`).addClass('selected');
          }
        } catch (error) {
          console.error('Erro ao carregar dados:', error);
        }
      }
    }
  
    // Função para salvar dados
    function saveData() {
      const childData = {
        sex: selectedSex,
        name: $$('#name').val(),
        nickname: $$('#nickname').val(),
        age: $$('#age').val(),
        favoriteColor: $$('#favoriteColor').val(),
        supportLevel: $$('#supportLevel').val(),
        grade: $$('#grade').val()
      };
  
      // Salva em localStorage
      localStorage.setItem('educaMenteChildData', JSON.stringify(childData));
  
      // Feedback visual melhorado
      app.toast.create({
        text: 'Dados salvos com sucesso!',
        position: 'center',
        closeTimeout: 2000,
        cssClass: 'toast-success'
      }).open();
      
      console.log('Dados salvos:', childData);
    }
  
    // Verifica se o Cordova está carregado
    if (typeof cordova !== 'undefined') {
      document.addEventListener('deviceready', function() {
        setupEvents();
        loadData();
      }, false);
    } else {
      // Executa imediatamente se não for Cordova
      setupEvents();
      loadData();
    }
  };