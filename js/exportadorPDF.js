// js/exportadorPDF.js
function initFormularioPDF() {


    function gerarTitulo(secao) {
        return `<h2 style="padding:10px; margin:10px; margin-bottom:-5px; font-size:14px; font-weight:bold; background-color:var(--verde); color:var(--branco); border-radius:10px; text-align:center;">
          ${secao}
        </h2>`;
    }

    function gerarTituloResta(secao) {
        return `<h2 
        style="padding:10px; 
        margin:10px; 
        margin-bottom:-5px; 
        font-size:14px; 
        font-weight:bold; 
        background-color:var(--roxo); 
        color:var(--branco); 
        border-radius:10px;
         text-align:rigth;">
          ${secao}
        </h2>`;
    }


    function gerarIntervencao(formComportamento, formComunicacao) {
        let intervencao = "<h3>🔧 Intervenção Psicológica Sugerida:</h3><ul>";

        if (formComportamento.includes("autoagressão")) {
            intervencao += "<li><strong>Autoagressão:</strong> Crie rotina previsível, ofereça espaços de regulação e desenvolva atividades de relaxamento (como respiração guiada ou mindfulness).</li>";
        }
        if (formComportamento.includes("resistência a mudanças")) {
            intervencao += "<li><strong>Resistência à mudança:</strong> Antecipe mudanças com pictogramas e reforços positivos. Trabalhe com narrativas sociais para preparação emocional.</li>";
        }
        if (formComportamento.includes("crises de choro") || formComportamento.includes("crises de choro ou birra")) {
            intervencao += "<li><strong>Crises de choro:</strong> Ofereça fones abafadores, cantinho calmo e transições suaves. Utilize estratégias de co-regulação emocional.</li>";
        }
        if (formComportamento.includes("repetição de comportamentos") || formComportamento.includes("ecolalia")) {
            intervencao += "<li><strong>Repetição ou ecolalia:</strong> Use linguagem clara, pausada, e reforce expressões funcionais com apoio visual e gestual.</li>";
        }

        if (formComunicacao.includes("apenas instruções simples")) {
            intervencao += "<li><strong>Compreensão limitada:</strong> Use frases curtas, reforços visuais e rotina previsível. Introduza comandos com entonação expressiva.</li>";
        }
        if (formComunicacao.includes("dificuldades frequentes")) {
            intervencao += "<li><strong>Dificuldade frequente:</strong> Utilize PECS, pranchas de comunicação ou aplicativos visuais. Promova pares comunicativos no ambiente escolar.</li>";
        }
        if (formComunicacao.includes("não verbal")) {
            intervencao += "<li><strong>Não verbal:</strong> Reforce gestos com imagens e verbalização das ações. Estimule a comunicação funcional por meio de rotina e modelagem social.</li>";
        }

        intervencao += "</ul>";
        return intervencao;
    }

    function gerarIntervencaoCompleta(form01, form02, form03, form04, form05, form06, form7, form8, form10, form11, form12, form13, form14, form15, form16) {
        let texto = "";
        let texto2 = "";
        

        
        texto  += gerarTituloResta("🧠 1. Aprendizagem e Desenvolvimento Cognitivo");
        
        // Ordena as combinações mais complexas primeiro
        if (
            form01.includes("memória visual") &&
            form01.includes("atenção a detalhes") &&
            form01.includes("boa coordenação motora") &&
            form01.includes("facilidade com números")
        ) {
            texto += `<p><strong>Pontos Fortes:</strong> 1, 2, 3 e 4 Memória visual, atenção a detalhes e boa coordenação motora e facilidades com os numeros</p>`;

        } else if (
            form01.includes("memória visual") &&
            form01.includes("atenção a detalhes") &&
            form01.includes("boa coordenação motora")
        ) {
            texto += `<p><strong>Pontos Fortes:</strong> 1, 2 e 3 Memória visual, atenção a detalhes e boa coordenação motora agora sim</p>`;

        }else if (
            form01.includes("memória visual") &&
            form01.includes("atenção a detalhes") 
           
        ) {
            texto += `<p><strong>Pontos Fortes:</strong> 1 e 2 Memória visual e atenção a detalhes</p>`;

        } else if (form01.includes("memória visual")) {
            texto += `<p><strong>Pontos Fortes:</strong> 1 Memória visual.</p>`;

        } else if (form01.includes("atenção a detalhes")) {
            texto += `<p><strong>Pontos Fortes:</strong> 2 Atenção a detalhes.</p>`;

        } else if (form01.includes("boa coordenação motora")) {
            texto += `<p><strong>Pontos Fortes:</strong> 3 Boa coordenação motora.</p>`;

        } else if (form01.includes("facilidade com números")) {
            texto += `<p><strong>Pontos Fortes:</strong> 4 Facilidade com números.</p>`;

        } else if (form01.includes("Ainda não foi identificado")) {
            texto += `<p><strong>Pontos Fortes:</strong> Ainda não foi identificado.</p>`;
        }


        // COMUNICAO
        texto2  += gerarTituloResta("🗣️ 2. Comunicação");
        if (
            form02.includes("leitura") &&
            form02.includes("escrita") &&
            form02.includes("matemática") &&
            form02.includes("atenção e foco") &&
            form02.includes("organização detarefas")&&
            form02.includes("compreensão de instruções")
        ) {
            texto2 += `<p><strong>Dificuldades:</strong> 1, 2, 3, 4, 5 e 6 </p>`;

        } else if (
            form02.includes("leitura") &&
            form02.includes("escrita") &&
            form02.includes("matemática") &&
            form02.includes("atenção e foco") &&
            form02.includes("organização detarefas")
            
        ) {
            texto2 += `<p><strong>Dificuldades:</strong> 1, 2, 3, 4 e 5 </p>`;
        } else if (
            form02.includes("leitura") &&
            form02.includes("escrita") &&
            form02.includes("matemática") &&
            form02.includes("atenção e foco") 
            
        ) {
            texto2 += `<p><strong>Dificuldades:</strong> 1, 2, 3 e 4 </p>`;
        } else if (
            form02.includes("leitura") &&
            form02.includes("escrita") &&
            form02.includes("matemática") 
            
        ) {
            texto2 += `<p><strong>Dificuldades:</strong> 1, 2 e 3 </p>`;
        } else if (
            form02.includes("leitura") &&
            form02.includes("escrita") 
            
        ) {
            texto2 += `<p><strong>Dificuldades:</strong> 1, e 2 </p>`;
        }  else if (
            form02.includes("leitura") 
            
        ) {
            texto2 += `<p><strong>Dificuldades:</strong> 1 </p>`;
        } else if (
            form02.includes("escrita") 
            
        ) {
            texto2 += `<p><strong>Dificuldades:</strong> 1 </p>`;
        } else if (
            form02.includes("matemática") 
            
        ) {
            texto2 += `<p><strong>Dificuldades:</strong> 1 </p>`;
        } else if (
            form02.includes("atenção e foco") 
            
        ) {
            texto2 += `<p><strong>Dificuldades:</strong> 1 </p>`;
        } else if (
            form02.includes("organização detarefas") 
            
        ) {
            texto2 += `<p><strong>Dificuldades:</strong> 1 </p>`;
        } else if (
            form02.includes("compreensão de instruções") 
            
        ) {
            texto2 += `<p><strong>Dificuldades:</strong> 1 </p>`;
        }

      
        texto += gerarIntervencao(form01, form02, form03, form04, form05, form06, form7, form8, form10, form11, form12, form13, form14, form15, form16);
        texto2 += gerarIntervencao(form01, form02, form03, form04, form05, form06, form7, form8, form10, form11, form12, form13, form14, form15, form16);

        return texto + texto2;
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
        // Verifica se jsPDF está disponível via UMD
        if (window.jspdf && window.jspdf.jsPDF) {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            const element = document.getElementById("relatorioGerado");

            // Simplesmente adiciona o conteúdo de texto (sem formatação HTML)
            doc.text(element.textContent || "Sem conteúdo", 10, 10);
            doc.save('relatorio.pdf');
        } else {
            alert("Biblioteca de PDF não carregada. Recarregue a página.");
        }
    });

}

// Exporta a função para ser chamada manualmente
window.initFormularioPDF = initFormularioPDF;