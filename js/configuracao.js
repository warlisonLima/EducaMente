// configuracao.js - Versão modularizada

(function() {
    // Variáveis do módulo
    let selectedSex = '';
    let app = Framework7.instance; // Usa a instância existente
    let $$ = Dom7;
    
    // Inicializa quando o DOM estiver pronto
    document.addEventListener('DOMContentLoaded', function() {
      if (window.cordova) {
        document.addEventListener('deviceready', initConfigPage, false);
      } else {
        initConfigPage();
      }
    });
  
    function initConfigPage() {
      setupEvents();
      loadData();
      console.log("Módulo de configuração inicializado!");
    }
  
    function setupEvents() {
      // Seleção de sexo
      $$('.sex-option').on('click', function() {
        $$('.sex-option').removeClass('selected');
        $$(this).addClass('selected');
        selectedSex = $$(this).attr('data-sex');
      });
      
      // Botão salvar
      $$('#saveButton').on('click', saveFormData);
    }
    
    function loadData() {
      const savedData = localStorage.getItem('childData_v2');
      
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
            $$('[data-sex="' + data.sex + '"]').addClass('selected');
          }
        } catch (e) {
          console.error("Erro ao carregar dados:", e);
        }
      }
    }
    
    function saveFormData() {
      const childData = {
        sex: selectedSex,
        name: $$('#name').val(),
        nickname: $$('#nickname').val(),
        age: $$('#age').val(),
        favoriteColor: $$('#favoriteColor').val(),
        supportLevel: $$('#supportLevel').val(),
        grade: $$('#grade').val()
      };
      
      // Salva usando localStorage diretamente (mais confiável)
      localStorage.setItem('childData_v2', JSON.stringify(childData));
      
      // Feedback visual
      app.dialog.alert('Dados salvos com sucesso!', 'Sucesso');
      console.log("Dados salvos:", childData);
    }
    
    // Torna as funções disponíveis se necessário
    window.configModule = {
      saveFormData: saveFormData,
      loadData: loadData
    };
  })();