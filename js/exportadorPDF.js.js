window.exportPDF = function() {
  const element = document.getElementById('form-container');
  if (!element) {
    alert('Elemento do formulário não encontrado!');
    return;
  }

  const opt = {
    margin: 0.5,
    filename: 'formulario_aprendizagem.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { 
      scale: 2,
      useCORS: true,
      allowTaint: true
    },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  // Verifica se está no ambiente Cordova
  if (window.cordova && cordova.plugins) {
    html2pdf().set(opt).from(element).outputPdf('blob').then(function(pdfBlob) {
      const folderPath = cordova.file.externalRootDirectory + 'Download/';
      const fileName = 'formulario_aprendizagem_' + new Date().getTime() + '.pdf';
      
      window.resolveLocalFileSystemURL(folderPath, function(dir) {
        dir.getFile(fileName, { create: true }, function(file) {
          file.createWriter(function(fileWriter) {
            fileWriter.onwriteend = function() {
              alert('PDF salvo com sucesso em: ' + folderPath + fileName);
              // Tenta abrir o arquivo
              cordova.plugins.fileOpener2.open(
                file.toURL(),
                'application/pdf',
                {
                  error: function(e) {
                    console.error('Erro ao abrir PDF:', e);
                  },
                  success: function() {
                    console.log('PDF aberto com sucesso');
                  }
                }
              );
            };
            fileWriter.onerror = function(e) {
              console.error('Erro ao salvar arquivo:', e);
              alert('Erro ao salvar PDF: ' + JSON.stringify(e));
            };
            fileWriter.write(pdfBlob);
          });
        }, function(error) {
          console.error('Erro ao criar arquivo:', error);
          alert('Erro ao criar arquivo PDF');
        });
      }, function(error) {
        console.error('Erro ao acessar pasta Downloads:', error);
        alert('Não foi possível acessar a pasta Downloads');
      });
    }).catch(function(error) {
      console.error('Erro ao gerar PDF:', error);
      alert('Erro ao gerar PDF: ' + error.message);
    });
  } else {
    // Modo navegador
    html2pdf().set(opt).from(element).save()
      .catch(function(error) {
        console.error('Erro ao gerar PDF:', error);
        alert('Erro ao gerar PDF: ' + error.message);
      });
  }
};