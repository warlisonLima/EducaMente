// js/exportadorPDF.js
function initFormularioPDF() {


    function gerarTitulo(secao) {
        return `<h2 style="padding:10px; margin:10px; margin-bottom:-5px; font-size:14px; font-weight:bold; background-color:var(--verde); color:var(--branco); border-radius:10px; text-align:center;">
          ${secao}
        </h2>`;
    }

    function gerarTituloResta(secao) {
        return `<h2 style="padding:10px; margin:10px; margin-bottom:-5px; font-size:14px; font-weight:bold; background-color:var(--roxo); color:var(--branco); border-radius:10px; text-align:center;">
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

    function gerarIntervencaoCompleta(form01, form02, form03, form04, form05, form06, form12, form13, form14, form15, form16, form17) {
        let texto = "";

        texto += gerarTituloResta("📚 Intervenções em Aprendizagem e Desenvolvimento Cognitivo");


        // Ordena as combinações mais complexas primeiro
        if (
            form01.includes("memória visual") &&
            form01.includes("atenção a detalhes") &&
            form01.includes("boa coordenação motora") &&
            form01.includes("facilidade com números")
        ) {
            texto += `<p><strong>Pontos Fortes:</strong> Memória visual, atenção a detalhes e boa coordenação motora e facilidades com os numeros</p>`;

        } else if (
            form01.includes("memória visual") &&
            form01.includes("atenção a detalhes") &&
            form01.includes("boa coordenação motora")
        ) {
            texto += `<p><strong>Pontos Fortes:</strong> Memória visual, atenção a detalhes e boa coordenação motora agora sim</p>`;

        } else if (
            form01.includes("memória visual") &&
            form01.includes("atenção a detalhes")

        ) {
            texto += `<p><strong>Pontos Fortes:</strong> Memória visual e atenção a detalhes</p>`;

        } else if (form01.includes("memória visual")) {
            texto += `<p><strong>Pontos Fortes:</strong> Memória visual.</p>`;

        } else if (form01.includes("atenção a detalhes")) {
            texto += `<p><strong>Pontos Fortes:</strong> Atenção a detalhes.</p>`;

        } else if (form01.includes("boa coordenação motora")) {
            texto += `<p><strong>Pontos Fortes:</strong> Boa coordenação motora.</p>`;

        } else if (form01.includes("facilidade com números")) {
            texto += `<p><strong>Pontos Fortes:</strong> Facilidade com números.</p>`;

        } else if (form01.includes("Ainda não foi identificado")) {
            texto += `<p><strong>Pontos Fortes:</strong> Ainda não foi identificado.</p>`;
        }


        if (form02.includes("matemática") && form03.includes("música")) {
            texto += `<p><strong>Matemática + Música:</strong> Use músicas que ensinem contagem, ritmo ou rimas com números. Reforce com gestos e palmas para internalização do ritmo.</p>`;
        }
        else if (
            form02.includes("matemática") &&
            form03.includes("estímulos visuais")) {
            texto += `<p><strong>Matemática + Estímulo Visual:</strong> Use vídeos animados, materiais coloridos e quadros numéricos ilustrados.</p>`;
        }
        else if (
            form02.includes("matemática") &&
            form03.includes("atividades práticas")) {
            texto += `<p><strong>Matemática + Atividades Práticas:</strong> Trabalhe com jogos de tabuleiro, blocos lógicos, dominós e brincadeiras com contagem.</p>`;
        }

        if (form02.includes("leitura") && form03.includes("estímulos visuais")) {
            texto += `<p><strong>Leitura + Estímulo Visual:</strong> Explore livros com ilustrações grandes, leitura compartilhada e apontamento de palavras-chave.</p>`;
        } else if (form02.includes("leitura") && form03.includes("música")) {
            texto += `<p><strong>Leitura + Música:</strong> Utilize músicas com rimas e aliteração. Estimule leitura rítmica e canções temáticas.</p>`;
        }

        if (form02.includes("escrita") && form03.includes("atividades práticas")) {
            texto += `<p><strong>Escrita + Atividades Práticas:</strong> Use massinha, letras em alto relevo, letras de madeira ou areia para reconhecimento tátil.</p>`;
        } else if (form02.includes("escrita") && form03.includes("estímulos visuais")) {
            texto += `<p><strong>Escrita + Estímulo Visual:</strong> Aplique traçados visuais, mapas mentais com setas e exercícios de caligrafia colorida.</p>`;
        }

        if (form02.includes("atenção e foco") && form03.includes("jogos e desafios")) {
            texto += `<p><strong>Atenção + Jogos:</strong> Use jogos rápidos com objetivos claros e recompensas visuais imediatas. Dê feedback positivo contínuo.</p>`;
        }

        if (form02.includes("organização de tarefas") && form03.includes("estímulos visuais")) {
            texto += `<p><strong>Organização + Estímulo Visual:</strong> Quadros de rotina, agendas visuais e cartões de etapas favorecem a execução de tarefas.</p>`;
        }

        if (
            form02.includes("compreensão de instruções") &&
            form03.includes("estímulos auditivos")) {
            texto += `<p><strong>Compreensão + Estímulo Auditivo:</strong> Histórias narradas com entonação clara e pausas facilitam a assimilação.</p>`;
        } else if (
            form02.includes("compreensão de instruções") &&
            form03.includes("apoio visual")) {
            texto += `<p><strong>Compreensão + Apoio Visual:</strong> Sequências visuais, imagens passo a passo e pictogramas devem ser incorporados às instruções.</p>`;
        }

        if (form05.includes("apoio constante")) {
            texto += `<p><strong>Apoio constante:</strong> Designar tutores ou pares-colaboradores pode promover a independência gradativa com segurança.</p>`;
        }
        if (form05.includes("adaptação do material")) {
            texto += `<p><strong>Adaptação do material:</strong> Utilize versões ampliadas, texturas diferenciadas e contrastes fortes para facilitar o acesso.</p>`;
        }


        if (
            form17.includes("Sons altos") &&
            form17.includes("Luzes fortes") &&
            form17.includes("Cheiros") &&
            form17.includes("Texturas de alimentos/roupas") &&
            form17.includes("Toques físicos")

        ) {
            texto += `<p><strong>Sensorial:</strong> Acolhimento sensorial completo: uso de cronograma visual, cantinho calmo, 
            fones, iluminação baixa, roupas e lanche adaptados, e comunicação sem toque.</p>`;

        } else if (
            form17.includes("Sons altos") &&
            form17.includes("Luzes fortes") &&
            // form17.includes("Cheiros") &&
            form17.includes("Texturas de alimentos/roupas") &&
            form17.includes("Toques físicos")

        ) {
            texto += `<p><strong>Sensorial:</strong> Criar rotina com pouco contato físico e controle ambiental; atividades individuais com materiais confortáveis.</p>`;

        } else if (

            form17.includes("Sons altos") &&
            // form17.includes("Luzes fortes") &&
            form17.includes("Cheiros") &&
            form17.includes("Texturas de alimentos/roupas") &&
            form17.includes("Toques físicos")

        ) {
            texto += `<p><strong>Sensorial:</strong> Adaptação alimentar e visual; uso de abafadores e roupas agradáveis; respeitar limites de toque sempre.</p>`;
        
        } else if (

            //form17.includes("Sons altos") &&
            form17.includes("Luzes fortes") &&
            form17.includes("Cheiros") &&
            form17.includes("Texturas de alimentos/roupas") &&
            form17.includes("Toques físicos")

        ) {
            texto += `<p><strong>Sensorial:</strong> Iluminação indireta, ventilação constante; permitir trocas de roupa e descanso sensorial em sala calma.</p>`;
        }  else if (

            form17.includes("Sons altos") &&
            form17.includes("Luzes fortes") &&
            //form17.includes("Cheiros") &&
            form17.includes("Texturas de alimentos/roupas") &&
            form17.includes("Toques físicos")

        ) {
            texto += `<p><strong>Sensorial:</strong> Ambiente com baixo estímulo; adaptar lanche e roupa; evitar eventos com som alto e luz piscando (como festas escolares).</p>`;
        } else if (

            form17.includes("Sons altos") &&
            form17.includes("Luzes fortes") &&
            form17.includes("Cheiros") &&
            //form17.includes("Texturas de alimentos/roupas") &&
            form17.includes("Toques físicos")

        ) {
            texto += `<p><strong>Sensorial:</strong> Ambiente sensorialmente regulado; atividades em grupos pequenos; permitir fone e iluminação adaptada; apoio visual constante.</p>`;
        }  else if (

            form17.includes("Sons altos") &&
            form17.includes("Luzes fortes") &&
            form17.includes("Cheiros") 
            //form17.includes("Texturas de alimentos/roupas") &&
            //form17.includes("Toques físicos")

        ) {
            texto += `<p><strong>Sensorial:</strong>Ambiente mais neutro possível: luz baixa, pouco cheiro e proteção sonora; usar atividades calmas e com apoio visual.</p>`;
        } else if (

            form17.includes("Sons altos") &&
            form17.includes("Luzes fortes") &&
            //form17.includes("Cheiros") 
            form17.includes("Texturas de alimentos/roupas")
            //form17.includes("Toques físicos")

        ) {
            texto += `<p><strong>Sensorial:</strong>AReduzir estímulos no ambiente; adaptar lanche com texturas toleradas; permitir tempo em espaço tranquilo com iluminação suave. </p>`;
        } 




        else if (
            form17.includes("Sons altos") &&
            form17.includes("Luzes fortes") &&
            form17.includes("Toques físicos")
        ) {
            texto += `<p><strong>Sensorial:</strong> Preparar a criança com aviso visual antes de qualquer mudança sensorial; permitir retirada para espaço sensorial controlado.</p>`;
        } else if (
            form17.includes("Sons altos") &&
            form17.includes("Cheiros") &&
            form17.includes("Texturas de alimentos/roupas")
        ) {
            texto += `<p><strong>Sensorial:</strong> Ambiente ventilado, com materiais sem cheiro; adaptação alimentar e uso de abafadores durante atividades com som (como vídeos).</p>`;
        } else if (
            form17.includes("Sons altos") &&
            form17.includes("Cheiros") &&
            form17.includes("Toques físicos")
        ) {
            texto += `<p><strong>Sensorial:</strong> Evitar locais com cheiro e barulho intenso; usar fones com música calma; respeitar espaço pessoal sempre.</p>`;
        } else if (
            form17.includes("Sons altos") &&
            form17.includes("Texturas de alimentos/roupas") &&
            form17.includes("Toques físicos")
        ) {
            texto += `<p><strong>Sensorial:</strong> Permitir fone de ouvido e roupas confortáveis; criar cantinho seguro; respeitar limites no toque.</p>`;
        } else if (
            form17.includes("Luzes fortes") &&
            form17.includes("Cheiros") &&
            form17.includes("Texturas de alimentos/roupas")
        ) {
            texto += `<p><strong>Sensorial:</strong> Evitar odores fortes e luz intensa; oferecer lanche com pouca mistura de texturas e cheiro neutro.</p>`;
        } else if (
            form17.includes("Luzes fortes") &&
            form17.includes("Cheiros") &&
            form17.includes("Toques físicos")
        ) {
            texto += `<p><strong>Sensorial:</strong> Sala com cortinas ou iluminação indireta; aromatizadores leves se a criança tolerar; uso de comunicação visual.</p>`;
        } else if (
            form17.includes("Luzes fortes") &&
            form17.includes("Texturas de alimentos/roupas") &&
            form17.includes("Toques físicos")
        ) {
            texto += `<p><strong>Sensorial:</strong> Ambiente com luz controlada e roupas escolhidas pela criança; usar guia visual para contato físico apenas quando necessário.</p>`;
        } else if (
            form17.includes("Cheiros") &&
            form17.includes("Texturas de alimentos/roupas") &&
            form17.includes("Toques físicos")
        ) {
            texto += `<p><strong>Sensorial:</strong> Evitar locais com odores marcantes e materiais ásperos; não tocar a criança sem consentimento; oferecer substitutos (como almofadas sensoriais).</p>`;
        } else if (
            form17.includes("Sons altos") &&
            form17.includes("Luzes fortes")
        ) {
            texto += `<p><strong>Sensorial:</strong> Criar cantinho sensorial com luz baixa e abafadores disponíveis; usar cronograma visual para avisar sobre momentos barulhentos e acender luz aos poucos.</p>`;
        } else if (
            form17.includes("Sons altos") &&
            form17.includes("Cheiros")
        ) {
            texto += `<p><strong>Sensorial:</strong> Evitar ambientes com muitos estímulos sensoriais (refeitório, eventos com som e comida); trabalhar com rotina tranquila e previsível; usar ventilação e abafadores.</p>`;
        } else if (
            form17.includes("Sons altos") &&
            form17.includes("Texturas de alimentos/roupas")
        ) {
            texto += `<p><strong>Sensorial:</strong> Permitir uso de abafadores e roupas escolhidas pela criança; usar sinal visual para evitar sobrecarga em horários de lanche e entrada/saída.</p>`;
        } else if (
            form17.includes("Sons altos") &&
            form17.includes("Toques físicos")
        ) {
            texto += `<p><strong>Sensorial:</strong> Não tocar a criança sem aviso; usar sinais com imagens para orientar; deixar a criança escolher onde sentar, longe de ruídos e com espaço.</p>`;
        } else if (
            form17.includes("Luzes fortes") &&
            form17.includes("Cheiros")
        ) {
            texto += `<p><strong>Sensorial:</strong> Manter ambiente arejado e com luz controlada; evitar produtos com cheiro forte; usar aromatizadores naturais apenas se a criança gostar.</p>`;
        } else if (
            form17.includes("Luzes fortes") &&
            form17.includes("Texturas de alimentos/roupas")
        ) {
            texto += `<p><strong>Sensorial:</strong> Permitir roupas confortáveis e oferecer local com luz suave; reduzir estímulos visuais muito intensos.</p>`;
        } else if (
            form17.includes("Luzes fortes") &&
            form17.includes("Toques físicos")
        ) {
            texto += `<p><strong>Sensorial:</strong> Ajustar iluminação com filtros e evitar luz direta; não forçar toques e usar pistas visuais ao invés de toque físico.</p>`;
        } else if (
            form17.includes("Cheiros") &&
            form17.includes("Texturas de alimentos/roupas")
        ) {
            texto += `<p><strong>Sensorial:</strong> Oferecer alimentos em porções pequenas e sem mistura de cheiros; permitir que a criança leve roupa extra ou objetos com cheiros familiares.</p>`;
        } else if (
            form17.includes("Cheiros") &&
            form17.includes("Toques físicos")
        ) {
            texto += `<p><strong>Sensorial:</strong> Evitar toque físico durante atividades com cheiros intensos (ex: culinária); usar cartões visuais para comunicação e escolha.</p>`;
        } else if (
            form17.includes("Texturas de alimentos/roupas") &&
            form17.includes("Toques físicos")
        ) {
            texto += `<p><strong>Sensorial:</strong> Oferecer escolha de roupa e lanche adaptado; respeitar o espaço corporal e sugerir cumprimentos alternativos sem toque.</p>`;
        } else if (
            form17.length === 0 || form17.includes("Não apresenta sensibilidades")
        ) {
            texto += `<p><strong>Sensorial:</strong> Não apresenta sensibilidades.</p>`;
        } else if (
            form17.includes("Sons altos")
        ) {
            texto += `<p><strong>Sensorial:</strong> Usar abafadores de ouvido durante momentos barulhentos (ex: intervalo); manter portas fechadas em sala; avisar antes de barulhos (ex: sino, música).</p>`;
        } else if (
            form17.includes("Luzes fortes")
        ) {
            texto += `<p><strong>Sensorial:</strong> Reduzir luz fluorescente com capas de filtro; preferir luz natural ou luminárias suaves; permitir o uso de bonés ou viseiras.</p>`;
        } else if (
            form17.includes("Cheiros")
        ) {
            texto += `<p><strong>Sensorial:</strong> Evitar uso de perfumes fortes no ambiente; manter sala bem ventilada; usar cheiros neutros em materiais escolares e de limpeza.</p>`;
        } else if (
            form17.includes("Texturas de alimentos/roupas")
        ) {
            texto += `<p><strong>Sensorial:</strong> Permitir roupas com tecidos confortáveis, sem etiquetas ou costuras incômodas; oferecer alimentos variados respeitando as texturas que a criança tolera.</p>`;
        } else if (
            form17.includes("Toques físicos")
        ) {
            texto += `<p><strong>Sensorial:</strong> Evitar toques inesperados; usar sinais visuais em vez de toques para chamar atenção; respeitar o espaço pessoal, oferecendo alternativa como “toque de cotovelo”.</p>`;
        }
        



        texto += gerarTituloResta("🧩 Abordagem Terapêutica Recomendada");
        texto += gerarIntervencao(form12, form06);

        return texto;
    }



    // Botão "Gerar Relatório" (Preview)
    document.getElementById("btnGerarRelatorio")?.addEventListener("click", function () {


        const nome = document.getElementById("nome").value;
        const idade = document.getElementById("idade").value;


        if (!document.getElementById('nome').value.trim() || !document.getElementById('idade').value.trim()) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
          }


        const gruposObrigatorios = [
            'form01', 'form02', 'form03', 'form04', 'form05',
            'form06', 'form07', 'form08', 'form09', 'form10',
            'form11', 'form12', 'form13', 'form14', 'form15',
            'form16', 'form17', 'form19', 'form20', 'form21',
            'form22', 'form23', 'form24', 'form25', 'form26',
            'form27'
          ];
      
          const grupoIncompleto = gruposObrigatorios.find(grupo =>
            document.querySelectorAll(`input.${grupo}:checked`).length === 0
          );
      
          if (grupoIncompleto) {
            alert("Por favor, selecione ao menos uma opção em todas as perguntas obrigatórias.");
            return;
          }





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


        const intervencaoCompleta = gerarIntervencaoCompleta(form01, form02, form03, form04, form05, form06, form12, form13, form14, form15, form16, form17);



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
        // Check if jsPDF is available
        if (typeof jsPDF !== 'undefined') {
            const doc = new jsPDF();
            const element = document.getElementById("relatorioGerado");

            // Add simple text content
            doc.text(element.innerText, 10, 10);
            doc.save('relatorio.pdf');
        } else {
            alert("Biblioteca de PDF não carregada. Recarregue a página.");
        }
    });

}

// Exporta a função para ser chamada manualmente
window.initFormularioPDF = initFormularioPDF;