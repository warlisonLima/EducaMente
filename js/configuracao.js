// configuracao.js - Versão Atualizada com Soluções para Roteamento

window.initConfiguracao = function () {
  // Verifica se estamos na página correta
  if (!document.querySelector('[data-name="configuracao"]')) {
    console.warn('Função initConfiguracao chamada fora da página de configuração');
    return;
  }

  // Obtém instâncias do Framework7 e Dom7
  const app = Framework7.instance || new Framework7();
  const $$ = Dom7;
  let selectedSex = '';

  // Adiciona logs para depuração
  console.log('Inicializando página de configuração...');
  console.log('LocalStorage disponível:', typeof localStorage !== 'undefined');

  // Configura eventos dos elementos
  function setupEvents() {
    const $sexOptions = $$('.sex-option');
    const $saveButton = $$('#saveButton');

    // Verificação robusta dos elementos
    if ($sexOptions.length === 0 || $saveButton.length === 0) {
      console.error('Elementos essenciais não encontrados:', {
        sexOptions: $sexOptions.length,
        saveButton: $saveButton.length
      });
      return;
    }

    // Eventos de seleção de sexo
    $sexOptions.off('click').on('click', function () {
      $sexOptions.removeClass('selected');
      $$(this).addClass('selected');
      selectedSex = $$(this).attr('data-sex');
      console.log('Sexo selecionado:', selectedSex);
    });

    // Evento de salvamento
    $saveButton.off('click').on('click', function () {
      console.log('Botão salvar clicado');
      saveData();
    });

    console.log('Eventos configurados com sucesso');
  }

  // Carrega dados salvos
  function loadData() {
    console.log('Carregando dados do localStorage...');
    const savedData = localStorage.getItem('educaMenteChildData');
    
    if (savedData) {
      try {
        const data = JSON.parse(savedData);
        console.log('Dados encontrados:', data);

        // Preenche os campos do formulário
        $$('#name').val(data.name || '');
        $$('#nickname').val(data.nickname || '');
        $$('#age').val(data.age || '');
        $$('#favoriteColor').val(data.favoriteColor || '');
        $$('#supportLevel').val(data.supportLevel || 'Médio');
        $$('#grade').val(data.grade || 'Kindergarten');

        // Seleciona o sexo salvo
        if (data.sex) {
          selectedSex = data.sex;
          $$(`.sex-option[data-sex="${data.sex}"]`).addClass('selected');
          console.log('Sexo carregado:', selectedSex);
        }
      } catch (error) {
        console.error('Erro ao analisar dados do localStorage:', error);
        app.dialog.alert('Erro ao carregar dados salvos');
      }
    } else {
      console.log('Nenhum dado salvo encontrado');
    }
  }

  // Salva os dados no localStorage
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

    console.log('Dados a serem salvos:', childData);

    // Validação básica
    if (!childData.name || !childData.age) {
      app.dialog.alert('Por favor, preencha pelo menos o nome e a idade');
      return;
    }

    try {
      localStorage.setItem('educaMenteChildData', JSON.stringify(childData));
      console.log('Dados salvos com sucesso no localStorage');

      // Feedback visual
      app.toast.create({
        text: 'Dados salvos com sucesso!',
        position: 'center',
        closeTimeout: 2000,
        cssClass: 'toast-success'
      }).open();

    } catch (error) {
      console.error('Erro ao salvar no localStorage:', error);
      app.dialog.alert('Erro ao salvar dados');
    }
  }

  // Inicialização imediata (não espera mais por eventos)
  try {
    setupEvents();
    loadData();
    console.log('Configuração inicializada com sucesso');
  } catch (error) {
    console.error('Erro durante a inicialização:', error);
    app.dialog.alert('Erro ao inicializar página de configuração');
  }
};

// Adiciona este log para verificar se o script foi carregado
console.log('configuracao.js carregado com sucesso');

