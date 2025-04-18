// Variáveis globais
let app;
let selectedSex = "";

// Inicialização do Framework7
document.addEventListener('DOMContentLoaded', function() {
    app = new Framework7();
    
    // Se estiver no Cordova, espere pelo deviceready
    if (window.cordova) {
        document.addEventListener('deviceready', initApp, false);
    } else {
        initApp();
    }
});

function initApp() {
    // Carrega os dados salvos
    loadData();
    
    // Configura os eventos usando o Framework7
    setupEvents();
}

function setupEvents() {
    // Seleção de sexo
    $$('#boy, #girl').on('click', function() {
        $$('#boy, #girl').removeClass('selected');
        $$(this).addClass('selected');
        selectedSex = $$(this).attr('data-id');
    });
    
    // Botão salvar
    $$('[data-id="saveButton"]').on('click', saveData);
}

function saveData() {
    const data = {
        sex: selectedSex,
        name: $$('[data-id="name"]').val(),
        nickname: $$('[data-id="nickname"]').val(),
        age: $$('[data-id="age"]').val(),
        favoriteColor: $$('[data-id="favoriteColor"]').val(),
        supportLevel: $$('[data-id="supportLevel"]').val(),
        grade: $$('[data-id="grade"]').val(),
    };
    
    // Usando o localStorage do Framework7
    app.data.set('iepSettings', data);
    
    // Mostra alerta do Framework7
    app.dialog.alert('Dados salvos com sucesso!', 'Sucesso');
}

function loadData() {
    const saved = app.data.get('iepSettings');
    
    if (saved) {
        // Preenche os campos
        $$('[data-id="name"]').val(saved.name || '');
        $$('[data-id="nickname"]').val(saved.nickname || '');
        $$('[data-id="age"]').val(saved.age || '');
        $$('[data-id="favoriteColor"]').val(saved.favoriteColor || '');
        $$('[data-id="supportLevel"]').val(saved.supportLevel || 'Médio');
        $$('[data-id="grade"]').val(saved.grade || 'Kindergarten');
        
        // Seleciona o sexo
        if (saved.sex === 'boy') {
            $$('#boy').addClass('selected');
            selectedSex = 'boy';
        } else if (saved.sex === 'girl') {
            $$('#girl').addClass('selected');
            selectedSex = 'girl';
        }
    }
}

// Expõe a função para ser chamada globalmente se necessário
window.saveData = saveData;