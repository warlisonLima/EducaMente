// js/exportadorPDF.js
function initFormularioPDF() {
    // Botão "Gerar Relatório" (Preview)
    document.getElementById("btnGerarRelatorio")?.addEventListener("click", function () {
        const nome = document.getElementById("nome").value;
        const idade = document.getElementById("idade").value;



        const form01 = Array.from(document.querySelectorAll(".form01:checked")).map(el => el.value);
        const form02 = Array.from(document.querySelectorAll(".form02:checked")).map(el => el.value);
        const form03 = Array.from(document.querySelectorAll(".form03:checked")).map(el => el.value);
        const form04 = Array.from(document.querySelectorAll(".form04:checked")).map(el => el.value);
        const form05 = Array.from(document.querySelectorAll(".form05:checked")).map(el => el.value);
        const form06 = Array.from(document.querySelectorAll(".form06:checked")).map(el => el.value);
        const form07 = Array.from(document.querySelectorAll(".form07:checked")).map(el => el.value);
        const form08 = Array.from(document.querySelectorAll(".form08:checked")).map(el => el.value);
        const form09 = Array.from(document.querySelectorAll(".form09:checked")).map(el => el.value);
        const form10 = Array.from(document.querySelectorAll(".form10:checked")).map(el => el.value);
        const form11 = Array.from(document.querySelectorAll(".form11:checked")).map(el => el.value);
        const form12 = Array.from(document.querySelectorAll(".form12:checked")).map(el => el.value);
        const form13 = Array.from(document.querySelectorAll(".form13:checked")).map(el => el.value);
        const form14 = Array.from(document.querySelectorAll(".form14:checked")).map(el => el.value);
        const form15 = Array.from(document.querySelectorAll(".form15:checked")).map(el => el.value);
        const form16 = Array.from(document.querySelectorAll(".form16:checked")).map(el => el.value);
        const form17 = Array.from(document.querySelectorAll(".form17:checked")).map(el => el.value);


       
        const formEstimulo18 = document.getElementById("formEstimulo18").value;

        const form19 = Array.from(document.querySelectorAll(".form19:checked")).map(el => el.value);
        const form20 = Array.from(document.querySelectorAll(".form20:checked")).map(el => el.value);
        const form21 = Array.from(document.querySelectorAll(".form21:checked")).map(el => el.value);
        const form22 = Array.from(document.querySelectorAll(".form22:checked")).map(el => el.value);
        const form23 = Array.from(document.querySelectorAll(".form23:checked")).map(el => el.value);
        const form24 = Array.from(document.querySelectorAll(".form24:checked")).map(el => el.value);
        const form25 = Array.from(document.querySelectorAll(".form25:checked")).map(el => el.value);
        const form26 = Array.from(document.querySelectorAll(".form26:checked")).map(el => el.value);
        const form27 = Array.from(document.querySelectorAll(".form27:checked")).map(el => el.value);
        const formEstimulo28 = document.getElementById("formEstimulo28").value;


        const relatorioHTML = `
          <h2>Relatório da Criança</h2>
          <p><strong>Nome:</strong> ${nome || "Não informado"}</p>
          <p><strong>Idade:</strong> ${idade || "Não informada"}</p>

          <h3>⭐ Pontos Fortes:</h3>
          <ul>${form01.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          <h3>📈 Dificuldades:</h3>
          <ul>${form02.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          <h3>▶️ Como ela prefere aprender:</h3>
          <ul>${form03.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          <h3>⏱️ Qual é o tempo médio de atenção em atividade:</h3>
          <ul>${form04.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          <h3>🛑 Que tipo de suporte é necessário:</h3>
          <ul>${form05.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          <h3>💬 Qual o tipo de comunicação predominante:</h3>
          <ul>${form06.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          <h3>🤔 Como expressa vontades e necessidades:</h3>
          <ul>${form07.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          <h3>🧑‍🏫 Compreende instruções:</h3>
          <ul>${form08.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          <h3>🏆 Já são usadas estratégias de comunicação:</h3>
          <ul>${form09.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          <h3>🛠️ Como a criança se relaciona com os outros:</h3>
          <ul>${form10.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          <h3>👥 Participa de atividades em grupo:</h3>
          <ul>${form11.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          <h3>💻 Apresenta comportamentos desafiadores:</h3>
          <ul>${form12.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

           <h3>🧮 Estratégias que funcionam para lidar com comportamentos:</h3>
          <ul>${form13.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

           <h3>👫 A criança é autônoma nas atividades diárias:</h3>
          <ul>${form14.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

           <h3>✋ Como está sua coordenação motora:</h3>
          <ul>${form15.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

           <h3>👔 Locomoção e orientação no ambiente escolar:</h3>
          <ul>${form16.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          <h3>👔 Locomoção e orientação no ambiente escolar:</h3>
          <ul>${form17.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

         
           <p><h3>✋ Quais estímulos causam desconforto ou crise?:</h3> ${formEstimulo18 || "Não informado"}</p>

           <h3>👀 Estratégias de regulação sensorial já utilizadas:</h3>
          <ul>${form19.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

           <h3>📈 A criança acompanha o currículo:</h3>
          <ul>${form20.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>
          
           <h3>🔍 Quais recursos funcionam melhor:</h3>
          <ul>${form21.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>
          
           <h3>🙋‍♂️ Como ela responde às avaliações:</h3>
          <ul>${form22.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

           <h3>🧑‍🏫 Família participa do processo escolar:</h3>
          <ul>${form23.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

           <h3>⚠️ Há comunicação frequente com a escola:</h3>
          <ul>${form24.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          <h3>🏫 A criança faz acompanhamento com profissionais:</h3>
          <ul>${form25.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          <h3>🧒 Metas para o semestre:</h3>
          <ul>${form26.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          <h3>📝 Como será acompanhado o progresso:</h3>
          <ul>${form27.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

         
          <p><h3>👨‍👩‍👧 Responsáveis pelo acompanhamento:</h3> ${formEstimulo28 || "Não informado"}</p>

      `;

        document.getElementById("relatorioGerado").innerHTML = relatorioHTML;
    });















    document.getElementById("btnGerarPDF")?.addEventListener("click", function () {
        const element = document.getElementById("form-container");

        if (typeof html2pdf !== 'undefined') {
            html2pdf().from(element).save("relatorio_autismo.pdf");
        } else {
            alert("Erro:  Biblioteca html2pdf não carregada. Verifique sua conexão ou o caminho do arquivo.");
            console.error("html2pdf não definido. Verifique se o script foi carregado:", window.html2pdf);
        }
    });

}

// Exporta a função para ser chamada manualmente
window.initFormularioPDF = initFormularioPDF;