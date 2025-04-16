document.addEventListener('DOMContentLoaded', async function () {
  // Carregar jsPDF da forma correta usando UMD
  const jsPDFModule = window.jspdf;
  const doc = new jsPDFModule.jsPDF();

  // Botões
  const btnGerarRelatorio = document.getElementById('btnGerarRelatorio');
  const btnGerarPDF = document.getElementById('btnGerarPDF');

  function gerarRelatorio() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const forcas = Array.from(document.querySelectorAll(".forca:checked")).map(el => el.value);
    const dificuldades = Array.from(document.querySelectorAll(".dificuldade:checked")).map(el => el.value);

    let textoRelatorio = `<h2>Relatório de Intervenção Pedagógica</h2>`;
    textoRelatorio += `<p><strong>Nome:</strong> ${nome || 'Não informado'}</p>`;
    textoRelatorio += `<p><strong>Idade:</strong> ${idade || 'Não informada'} anos</p>`;
    textoRelatorio += `<hr>`;

    if (forcas.length > 0) {
      textoRelatorio += `<h3>Pontos Fortes Identificados</h3>`;
      textoRelatorio += `<ul>`;
      forcas.forEach(forca => {
        textoRelatorio += `<li>${forca}</li>`;
      });
      textoRelatorio += `</ul>`;
      textoRelatorio += `<p>Estas habilidades devem ser valorizadas e utilizadas como base para o desenvolvimento de outras competências.</p>`;
    } else {
      textoRelatorio += `<p>Nenhum ponto forte específico foi identificado nesta avaliação.</p>`;
    }

    if (dificuldades.length > 0) {
      textoRelatorio += `<h3>Dificuldades Identificadas</h3>`;
      textoRelatorio += `<ul>`;
      dificuldades.forEach(dificuldade => {
        textoRelatorio += `<li>${dificuldade}</li>`;
      });
      textoRelatorio += `</ul>`;
      textoRelatorio += `<p>Sugestões de intervenção: utilizar estratégias adaptadas, recursos visuais, instruções claras e objetivas, e atividades em pequenos passos.</p>`;
    } else {
      textoRelatorio += `<p>Nenhuma dificuldade específica foi identificada nesta avaliação.</p>`;
    }

    document.getElementById("relatorioGerado").innerHTML = textoRelatorio;
  }

  function gerarPDF() {
    const relatorioContent = document.getElementById("relatorioGerado");

    if (!relatorioContent.innerHTML) {
      alert("Gere o relatório primeiro antes de exportar para PDF");
      return;
    }

    // Criar novo PDF para cada geração
    const pdf = new jsPDFModule.jsPDF();

    pdf.setFontSize(18);
    pdf.text("Relatório de Intervenção Pedagógica", 105, 15, { align: 'center' });

    pdf.setFontSize(12);
    const lines = relatorioContent.innerText.split('\n');
    let yPosition = 30;

    lines.forEach(line => {
      if (line.trim() !== '') {
        pdf.text(line, 15, yPosition);
        yPosition += 7;
      }
    });

    const nomeArquivo = document.getElementById("nome").value || 'intervencao';
    pdf.save(`relatorio_${nomeArquivo}.pdf`);
  }

  btnGerarRelatorio.addEventListener('click', gerarRelatorio);
  btnGerarPDF.addEventListener('click', gerarPDF);
});
