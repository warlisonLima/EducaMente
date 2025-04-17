// js/exportadorPDF.js
function initFormularioPDF() {

    function gerarTitulo(secao) {
        return `<h2 style="padding:10px; margin:10px; margin-bottom:-5px; font-size:14px; font-weight:bold; background-color:var(--verde); color:var(--branco); border-radius:10px; text-align:center;">
          ${secao}
        </h2>`;
      }



      function gerarIntervencaoCompleta(form01, form02, form03, form04, form05, form06, form12, form13, form14, form15, form16) {
        let texto = "";
  
        // 1. Aprendizagem e Desenvolvimento Cognitivo
        texto += gerarTitulo("📚 Intervenções em Aprendizagem e Desenvolvimento Cognitivo");
        texto += `
        <p><strong>Pontos fortes:</strong><br>
        Observa-se que a criança apresenta facilidades em aspectos como <em>${form01.join(", ") || "não identificados"}</em>. Tais habilidades cognitivas devem ser reconhecidas como potencializadores de aprendizagem e integradas às propostas pedagógicas e terapêuticas.</p>
  
        <p><strong>Dificuldades:</strong><br>
        São notadas dificuldades nas áreas de <em>${form02.join(", ") || "não identificadas"}</em>. Essas fragilidades interferem na autonomia escolar e devem ser alvo de estratégias de intervenção específicas e individualizadas.</p>
  
        <p><strong>Estilo de aprendizagem:</strong><br>
        Apresenta melhor desempenho quando envolvida em atividades que privilegiam <em>${form03.join(", ") || "não especificado"}</em>. Conhecer o estilo de aprendizagem permite construir abordagens mais eficazes e acolhedoras.</p>
  
        <p><strong>Tempo médio de atenção:</strong><br>
        O tempo de atenção sustentada gira em torno de <em>${form04.join(", ") || "não informado"}</em>, o que indica a importância da fragmentação das tarefas e do uso de estímulos que mantenham o interesse.</p>
  
        <p><strong>Suportes necessários:</strong><br>
        Durante as atividades, são observadas necessidades como <em>${form05.join(", ") || "não especificadas"}</em>, sendo fundamentais para garantir a permanência e o engajamento.</p>`;
  
        // 2. Comunicação
        texto += gerarTitulo("🗣️ Intervenções em Comunicação");
        texto += `
        <p><strong>Tipo de comunicação:</strong><br>
        A criança se comunica predominantemente de forma <em>${form06.join(", ") || "não especificada"}</em>, o que deve nortear as interações e abordagens pedagógicas e terapêuticas.</p>
  
        <p><strong>Expressão de vontades:</strong><br>
        Expressa suas vontades e necessidades por meio de <em>${form13.join(", ") || "não especificado"}</em>, o que exige escuta ativa e sensibilidade por parte da equipe para promover a comunicação funcional.</p>
  
        <p><strong>Compreensão de instruções:</strong><br>
        Compreende <em>${form14.join(", ") || "não especificado"}</em>, apontando para a necessidade de uso de recursos visuais, pistas verbais e apoio constante na mediação.</p>
  
        <p><strong>Uso de estratégias:</strong><br>
        Atualmente, as estratégias de comunicação utilizadas são <em>${form15.join(", ") || "não especificadas"}</em>. É importante promover práticas consistentes e alinhadas ao perfil da criança.</p>`;
  
        // 3. Comportamento e Interação Social
        texto += gerarTitulo("🤝 Intervenções em Comportamento e Interação Social");
        texto += `
        <p><strong>Relacionamento interpessoal:</strong><br>
        A criança <em>${form12.join(", ") || "não especificado"}</em>, sendo essencial a mediação terapêutica e pedagógica para fomentar habilidades socioemocionais.</p>
  
        <p><strong>Participação em grupo:</strong><br>
        Apresenta participação <em>${form16.join(", ") || "não especificada"}</em> em atividades coletivas. A inclusão em situações de grupo com mediação favorece o desenvolvimento da cooperação e da empatia.</p>`;
  
        // 4. Intervenção psicológica automática resumida
        texto += gerarTitulo("🧩 Abordagem Terapêutica Recomendada");
        texto += gerarIntervencao(form12, form06);
  
        return texto;
    }
  
    function gerarIntervencao(formComportamento, formComunicacao) {
        let intervencao = "<h3>🔧 Intervenção Psicológica Sugerida:</h3><ul>";
  
        if (formComportamento.length > 0) {
            intervencao += "<li><strong>Comportamento:</strong> Recomendação de estratégias de modulação emocional e técnicas de reforço positivo para incentivar comportamentos apropriados.</li>";
        }
  
        if (formComunicacao.length > 0) {
            intervencao += "<li><strong>Comunicação:</strong> Implementação de apoio comunicativo, como o uso de sistemas alternativos de comunicação (pictogramas, comunicação por gestos, etc.) e estratégias de promoção de interação social.</li>";
        }
  
        if (formComportamento.length > 0 && formComunicacao.length > 0) {
            intervencao += "<li><strong>Abordagem Integrada:</strong> Terapias comportamentais combinadas com estratégias de comunicação para melhorar a interação e reduzir a frustração.</li>";
        }
  
        intervencao += "</ul>";
        return intervencao;
    }


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


        const intervencaoCompleta = gerarIntervencaoCompleta(form01, form02, form03, form04, form05, form06, form12, form13, form14, form15, form16);



        const relatorioHTML = `
          <h2>Relatório da Criança</h2>
          <p><strong>Nome:</strong> ${nome || "Não informado"}</p>
          <p><strong>Idade:</strong> ${idade || "Não informada"}</p>

          ${gerarTitulo("🧠 1. Aprendizagem e Desenvolvimento Cognitivo")}
          <h3>⭐ Quais são os pontos fortes da criança na aprendizagem:</h3>
          <ul>${form01.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          <h3>📈 Quais áreas ela apresenta maior dificuldade:</h3>
          <ul>${form02.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          <h3>▶️ Como ela prefere aprender:</h3>
          <ul>${form03.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          <h3>⏱️ Qual é o tempo médio de atenção em atividade:</h3>
          <ul>${form04.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          <h3>🛑 Que tipo de suporte é necessário:</h3>
          <ul>${form05.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>



        ${gerarTitulo("🗣️ 2. Comunicação")}
          <h3>💬 Qual o tipo de comunicação predominante:</h3>
          <ul>${form06.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          <h3>🤔 Como expressa vontades e necessidades:</h3>
          <ul>${form07.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          <h3>🧑‍🏫 Compreende instruções:</h3>
          <ul>${form08.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          <h3>🏆 Já são usadas estratégias de comunicação:</h3>
          <ul>${form09.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          
          
          
          
         ${gerarTitulo("🧍 3. Comportamento e Interação Social")}
          <h3>🛠️ Como a criança se relaciona com os outros:</h3>
          <ul>${form10.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          <h3>👥 Participa de atividades em grupo:</h3>
          <ul>${form11.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          <h3>💻 Apresenta comportamentos desafiadores:</h3>
          <ul>${form12.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

           <h3>🧮 Estratégias que funcionam para lidar com comportamentos:</h3>
          <ul>${form13.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          
          
          ${gerarTitulo("🖐️ 4. Autonomia e Habilidades Motoras")}
          <h3>👫 A criança é autônoma nas atividades diárias:</h3>
          <ul>${form14.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

           <h3>✋ Como está sua coordenação motora:</h3>
          <ul>${form15.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

           <h3>👔 Locomoção e orientação no ambiente escolar:</h3>
          <ul>${form16.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

     
         

          ${gerarTitulo("🌈 5. Perfil Sensorial")}
          <h3>🧦 A criança apresenta sensibilidades sensoriais:</h3>
          <ul>${form17.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>
          
          <p><h3>✋ Quais estímulos causam desconforto ou crise?:</h3> ${formEstimulo18 || "Não informado"}</p>

          <h3>👀 Estratégias de regulação sensorial já utilizadas:</h3>
          <ul>${form19.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>
 




          ${gerarTitulo("🌈 6. Adaptações Pedagógicas")}
           <h3>📈 A criança acompanha o currículo:</h3>
          <ul>${form20.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>
          
           <h3>🔍 Quais recursos funcionam melhor:</h3>
          <ul>${form21.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>
          
           <h3>🙋‍♂️ Como ela responde às avaliações:</h3>
          <ul>${form22.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

           
          
          
          
          ${gerarTitulo("👨‍👩‍👧 7. Envolvimento da Família")}
          <h3>🧑‍🏫 Família participa do processo escolar:</h3>
          <ul>${form23.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

           <h3>⚠️ Há comunicação frequente com a escola:</h3>
          <ul>${form24.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          <h3>🏫 A criança faz acompanhamento com profissionais:</h3>
          <ul>${form25.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          
          ${gerarTitulo("📌 8. Planejamento Futuro")}
          <h3>🧒 Metas para o semestre:</h3>
          <ul>${form26.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          <h3>📝 Como será acompanhado o progresso:</h3>
          <ul>${form27.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

         
          <p><h2>👨‍👩‍👧 Responsáveis pelo acompanhamento:</h2> ${formEstimulo28 || "Não informado"}</p>
 
 
 
          ${intervencaoCompleta}
          

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