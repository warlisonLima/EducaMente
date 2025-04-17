// js/exportadorPDF.js
function initFormularioPDF() {
  // Botão "Gerar Relatório" (Preview)
  document.getElementById("btnGerarRelatorio")?.addEventListener("click", function() {
      const nome = document.getElementById("nome").value;
      const idade = document.getElementById("idade").value;
      const forcas = Array.from(document.querySelectorAll(".forca:checked")).map(el => el.value);
      const dificuldades = Array.from(document.querySelectorAll(".dificuldade:checked")).map(el => el.value);

      const relatorioHTML = `
          <h2>Relatório da Criança</h2>
          <p><strong>Nome:</strong> ${nome || "Não informado"}</p>
          <p><strong>Idade:</strong> ${idade || "Não informada"}</p>
          <h3>Pontos Fortes:</h3>
          <ul>${forcas.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>
          <h3>Dificuldades:</h3>
          <ul>${dificuldades.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>
      `;

      document.getElementById("relatorioGerado").innerHTML = relatorioHTML;
  });


  document.getElementById("btnGerarPDF")?.addEventListener("click", function() {
    if (typeof html2pdf === 'undefined') {
        alert("Erro: Biblioteca de PDF não carregada. Tente recarregar a página.");
        console.error("html2pdf não está definido.");
        return;
    }
    
    const element = document.getElementById("form-container");
    html2pdf().from(element).save("relatorio.pdf");
});

  // Botão "Gerar PDF"
  /*document.getElementById("btnGerarPDF")?.addEventListener("click", function() {
    const element = document.getElementById("form-container");
    
    if (typeof html2pdf !== 'undefined') {
        html2pdf().from(element).save("relatorio_autismo.pdf");
    } else {
        alert("Erro: Biblioteca html2pdf não carregada. Verifique sua conexão ou o caminho do arquivo.");
        console.error("html2pdf não definido. Verifique se o script foi carregado:", window.html2pdf);
    }
});
*/
}

// Exporta a função para ser chamada manualmente
window.initFormularioPDF = initFormularioPDF;