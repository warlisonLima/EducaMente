// js/exportadorPDF.js
function initFormularioPDF() {


    function gerarTitulo(secao) {
        return `<h2 style="padding:10px;
         margin:10px; margin-bottom:-5px; 
         font-size:14px; font-weight:bold; 
         background-color:var(--roxo); 
         color:var(--branco); 
         border-radius:10px; 
         text-align:left;">
          ${secao}
        </h2>`;
    }

 



    function gerarPontosFortes(form01) {
        let texto = "";


        texto += `
        <div class="caixinha-intervencao">
            <h3>
                <img src="img/lampada-de-ideia.png" alt="Lâmpada">
                Sugestões Baseadas nos Pontos Fortes
            </h3>
    `;

        if (
            form01.includes("memória visual") &&
            form01.includes("atenção a detalhes") &&
            form01.includes("boa coordenação motora") &&
            form01.includes("facilidade com números")
        ) {
            texto += `<p><strong>Intervenção:</strong> Jogos de tabuleiro com regras visuais, peças para manipular,
             dados numéricos e tarefas com sequência lógica e detalhada.</p>`;

        } else if (
            form01.includes("memória visual") &&
            form01.includes("atenção a detalhes") &&
            form01.includes("boa coordenação motora")
        ) {
            texto += `<p><strong>Intervenção:</strong> Montagem de figuras com encaixe preciso, 
            sequência de imagens com manipulação e colagem detalhada.</p>`;

        } else if (
            form01.includes("memória visual") &&
            form01.includes("atenção a detalhes") &&
            form01.includes("facilidade com números")
        ) {
            texto += `<p><strong>Intervenção:</strong> Atividades de completar tabelas ilustradas com lógica visual, 
            jogos de tabuleiro com regras visuais.</p>`;

        } else if (
            form01.includes("memória visual") &&
            form01.includes("boa coordenação motora") &&
            form01.includes("facilidade com números")

        ) {
            texto += `<p><strong>Intervenção:</strong> Desenhar e montar operações com peças físicas, 
            atividades visuais com contas e manipulação.</p>`;

        } else if (
            form01.includes("atenção a detalhes") &&
            form01.includes("boa coordenação motora") &&
            form01.includes("facilidade com números")
        ) {
            texto += `<p><strong>Intervenção:</strong> Caça-números com pinça ou ponteira, 
            atividades de montar gráficos com peças coloridas.</p>`;

        } else if (
            form01.includes("memória visual") &&
            form01.includes("atenção a detalhes")
        ) {
            texto += `<p><strong>Intervenção:</strong> Sequências visuais de histórias para reorganizar, 
            quebra-cabeças e jogos de memória com detalhes sutis.</p>`;

        } else if (
            form01.includes("memória visual") &&
            form01.includes("boa coordenação motora")
        ) {
            texto += `<p><strong>Intervenção:</strong>
            Copiar padrões com blocos coloridos, montar imagens com peças, atividades com labirintos visuais.</p>`;

        } else if (
            form01.includes("memória visual") &&
            form01.includes("facilidade com números")
        ) {
            texto += `<p><strong>Intervenção:</strong> Resolver contas com uso de cartões ilustrativos, 
            histórias matemáticas com imagens sequenciais. </p>`;

        } else if (
            form01.includes("atenção a detalhes") &&
            form01.includes("boa coordenação motora")

        ) {
            texto += `<p><strong>Intervenção:</strong> Atividades de alinhavar formas, recorte de figuras com contorno e pintura por número.</p>`;

        } else if (
            form01.includes("atenção a detalhes") &&
            form01.includes("facilidade com números")

        ) {
            texto += `<p><strong>Intervenção:</strong> Caça-números em tabelas, atividades de 
            sequência numérica com padrões visuais, sudoku infantil.</p>`;

        } else if (
            form01.includes("boa coordenação motora") &&
            form01.includes("facilidade com números")

        ) {
            texto += `<p><strong>Intervenção:</strong> Jogos com dados grandes, blocos de contagem para
             montar torres numéricas, trilhas com números no chão.</p>`;

        } else if (
            form01.includes("memória visual")

        ) {
            texto += `<p><strong>Intervenção:</strong> Use cartões visuais com pictogramas; 
            crie rotinas com quadros visuais e histórias em sequência.</p>`;

        } else if (
            form01.includes("atenção a detalhes")
        ) {
            texto += `<p><strong>Intervenção:</strong> Atividades de "encontre o erro", 
            jogos de diferenças e tarefas de completar padrões.</p>`;

        } else if (
            form01.includes("boa coordenação motora")
        ) {
            texto += `<p><strong>Intervenção:</strong> Atividades com massinha, 
            recorte, pintura com pincel grosso e circuitos motores simples. </p>`;

        } else if (
            form01.includes("facilidade com números")
        ) {
            texto += `<p><strong>Intervenção:</strong> Jogos de matemática com material concreto,
             ábacos, e desafios de contagem com objetos do cotidiano.</p>`;
        }

        texto += `</div>`; // Fecha certinho o div da caixinha

        return texto;
    }


    function gerarTempoMedioAtividades(form04) {
        let texto = "";


        texto += `
        <div class="caixinha-intervencao">
            <h3>
                <img src="img/lampada-de-ideia.png" alt="Lâmpada">
                Sugestões Baseadas no tempo médio de atenção
            </h3>
    `;

        if (
            form04.includes("menos de 5 minutos")
        ) {
            texto += `<p><strong>Intervenção:</strong> Faça pausas frequentes ou tenha atividades em rodízio (revezamento de estações);
        Atividades de resposta imediata com início, meio e fim bem claros. Exemplo: Mostrar uma imagem e pedir “Aponte o que é azul”.</p>`;
        }
        else if (
            form04.includes("5 a 10 minutos")
        ) {
            texto += `<p><strong>Intervenção:</strong> Use um cronômetro visual (timer com areia, contagem regressiva) para mostrar a duração; Atividades com começo,
         meio e fim curtos, mas encadeadas. Exemplo: ouvir uma música e depois desenhar o que sentiu.</p>`;
        }
        else if (
            form04.includes("10 a 20 minutos")
        ) {
            texto += `<p><strong>Intervenção:</strong> Alternar momentos de foco com momentos de movimento leve 
        (pular, esticar); Montagem com objetivo final claro.
        Exemplo: montar um quebra-cabeça simples ou um mini projeto com massinha.</p>`;
        }
        else if (
            form04.includes("mais de 20 minutos")
        ) {
            texto += `<p><strong>Intervenção:</strong> Mesmo com mais tempo de atenção, é importante oferecer pausas curtas
         e reforços positivos; Jogos com regras mais estruturadas.
    Exemplo: tabuleiro com perguntas, jogos colaborativos ou desafios em equipe.</p>`;
        }


        texto += `</div>`; // Fecha certinho o div da caixinha

        return texto;
    }


    function gerarTipoComunicacaoPredominante(form06) {
        let texto = "";


        texto += `
        <div class="caixinha-intervencao">
            <h3>
                <img src="img/lampada-de-ideia.png" alt="Lâmpada">
                Sugestões Baseadas no tipo de comunicação predominante
            </h3>
    `;

        if (
            form06.includes("verbal com fluência")
        ) {
            texto += `<p><strong>Intervenção:</strong> Roda de perguntas abertas sobre temas diversos; dramatização de pequenas cenas.</p>`;
        }
        else if (
            form06.includes("verbal com dificuldades")
        ) {
            texto += `<p><strong>Intervenção:</strong> Sequência de frase modelada (“eu gosto” → “eu gosto de brincar”); 
        cartões fônicos com sílabas para replica ; leitura compartilhada com apoio multimodal..</p>`;
        }
        else if (
            form06.includes("não verbal")
        ) {
            texto += `<p><strong>Intervenção:</strong> Quadro de figuras para seleção de desejos/necessidades; 
        sequência de cartões visuais para rotina diária; jogo de combinação pictográfica..</p>`;
        }
        else if (
            form06.includes("comunicação alternativa")
        ) {
            texto += `<p><strong>Intervenção:</strong> Kit de símbolos em fichas para escolher atividade ou emoção;
         criação de cardápio visual semanal; painel diário de pedidos com pictogramas.</p>`;
        }


        texto += `</div>`; // Fecha certinho o div da caixinha

        return texto;
    }

    function geraExpressaNecessidades(form07) {
        let texto = "";


        texto += `
        <div class="caixinha-intervencao">
            <h3>
                <img src="img/lampada-de-ideia.png" alt="Lâmpada">
                Sugestões Baseadas como expressa necessidades
            </h3>
    `;


        if (
            form07.includes("fala diretamente")
        ) {
            texto += `<p><strong>Intervenção: </strong> o professor faz perguntas–relógio (30 s cada), grava e destaca 3 palavras-chave usadas.</p>`;
        }
        else if (
            form07.includes("aponta objetos")
        ) {
            texto += `<p><strong>Intervenção: </strong> disponha vários objetos na sala; o aluno aponta o que deseja seguindo pistas sensoriais.</p>`;
        }
        else if (
            form07.includes("gestos ou expressões faciais")
        ) {
            texto += `<p><strong>Intervenção:</strong> o professor mostra cartões de emoções; o aluno reproduz só com gestos/expressões, turma adivinha.</p>`;
        }

        texto += `</div>`; // Fecha certinho o div da caixinha

        return texto;
    }

    function geraCompreendeInstrucoes(form08) {
        let texto = "";


        texto += `
        <div class="caixinha-intervencao">
            <h3>
                <img src="img/lampada-de-ideia.png" alt="Lâmpada">
                Sugestões Baseadas como Compreende Instruções
            </h3>
    `;


        if (
            form08.includes("instruções simples e complexas")

        ) {
            texto += `<p><strong>Intervenção: </strong> Utilize comandos verbais claros e em sequência, 
        com linguagem natural; Exemplo: “Guarde o caderno, pegue o estojo e vá até a fila.</p>`;

        } else if (
            form08.includes("apenas instruções simples")
        ) {
            texto += `<p><strong>Intervenção: </strong> Evite instruções compostas ou com múltiplos passos de uma só vez; Dica: 
        Falar uma ação, esperar a realização e só depois dar a próxima.</p>`;
        } else if (
            form08.includes("com apoio visual")
        ) {
            texto += `<p><strong>Intervenção: </strong> Associe imagens, pictogramas ou gestos aos comandos verbais; 
        Exemplo: Ao dizer “Lave as mãos”, mostre um cartão com a imagem correspondente.</p>`;
        } else if (
            form08.includes("dificuldades frequentes")
        ) {
            texto += `<p><strong>Intervenção: </strong> Use instruções concretas, acompanhadas de demonstração física;
         Exemplo: Em vez de só dizer “Coloque na mochila”, mostre como fazer.</p>`;
        }


        texto += `</div>`; // Fecha certinho o div da caixinha

        return texto;
    }


    function geraRelacionamentoOutros(form10) {
        let texto = "";


        texto += `
        <div class="caixinha-intervencao">
            <h3>
                <img src="img/lampada-de-ideia.png" alt="Lâmpada">
                Sugestões Baseadas como se Relacionar com os Outros
            </h3>
        `;


        if (
            form10.includes("interage bem com adultos e crianças")

        ) {
            texto += `<p><strong>Intervenção: </strong> Estimule o protagonismo social com atividades em grupo. Exemplo:
         “Você pode ajudar a organizar a roda de conversa hoje? Escolha quem vai falar primeiro.”</p>`;

        } else if (
            form10.includes("interage melhor com adultos")
        ) {
            texto += `<p><strong>Intervenção: </strong> Promova pares sociais com apoio do adulto. Exemplo: “Vamos brincar com o Pedro?
         Eu começo a brincadeira com vocês dois, depois vocês continuam.”</p>`;
        } else if (
            form10.includes("interage melhor com crianças")
        ) {
            texto += `<p><strong>Intervenção: </strong> Crie oportunidades de cooperação com colegas, para fortalecimento dos laços. 
        Exemplo: “Vocês dois vão montar esse quebra-cabeça juntos. Um escolhe a peça, o outro encaixa.”.</p>`;
        } else if (
            form10.includes("evita interações sociais")
        ) {
            texto += `<p><strong>Intervenção: </strong> Ofereça interações curtas e previsíveis com mediação. Exemplo: 
        “Vamos só dizer oi para o João agora, e depois você pode voltar para o cantinho tranquilo.”</p>`;
        } else if (
            form10.includes("necessita de mediação")
        ) {
            texto += `<p><strong>Intervenção: </strong> Modele a interação e use roteiros visuais. Exemplo: “Olha esse cartão: Posso brincar com você?. Vamos usar ele com a Ana na hora do recreio.””</p>`;
        }

        texto += `</div>`; // Fecha certinho o div da caixinha

        return texto;
    }


    function geraPerfilSensorial(form17) {
        let texto = "";


        texto += `
        <div class="caixinha-intervencao">
            <h3>
                <img src="img/lampada-de-ideia.png" alt="Lâmpada">
                Sugestões Baseadas no Perfil Sensorial
            </h3>
    `;


        if (
            form17.includes("Sons altos") &&
            form17.includes("Luzes fortes") &&
            form17.includes("Cheiros") &&
            form17.includes("Texturas de alimentos/roupas") &&
            form17.includes("Toques físicos")

        ) {
            texto += `<p><strong>Intervenção:</strong> Acolhimento sensorial completo: uso de cronograma visual, cantinho calmo, 
        fones, iluminação baixa, roupas e lanche adaptados, e comunicação sem toque.</p>`;

        } else if (
            form17.includes("Sons altos") &&
            form17.includes("Luzes fortes") &&
            // form17.includes("Cheiros") &&
            form17.includes("Texturas de alimentos/roupas") &&
            form17.includes("Toques físicos")

        ) {
            texto += `<p><strong>Intervenção:</strong> Criar rotina com pouco contato físico e controle ambiental; atividades individuais com materiais confortáveis.</p>`;

        } else if (

            form17.includes("Sons altos") &&
            // form17.includes("Luzes fortes") &&
            form17.includes("Cheiros") &&
            form17.includes("Texturas de alimentos/roupas") &&
            form17.includes("Toques físicos")

        ) {
            texto += `<p><strong>Intervenção:</strong> Adaptação alimentar e visual; uso de abafadores e roupas agradáveis; respeitar limites de toque sempre.</p>`;

        } else if (

            //form17.includes("Sons altos") &&
            form17.includes("Luzes fortes") &&
            form17.includes("Cheiros") &&
            form17.includes("Texturas de alimentos/roupas") &&
            form17.includes("Toques físicos")

        ) {
            texto += `<p><strong>Intervenção:</strong> Iluminação indireta, ventilação constante; permitir trocas de roupa e descanso sensorial em sala calma.</p>`;
        } else if (

            form17.includes("Sons altos") &&
            form17.includes("Luzes fortes") &&
            //form17.includes("Cheiros") &&
            form17.includes("Texturas de alimentos/roupas") &&
            form17.includes("Toques físicos")

        ) {
            texto += `<p><strong>Intervenção:</strong> Ambiente com baixo estímulo; adaptar lanche e roupa; evitar eventos com som alto e luz piscando (como festas escolares).</p>`;
        } else if (

            form17.includes("Sons altos") &&
            form17.includes("Luzes fortes") &&
            form17.includes("Cheiros") &&
            //form17.includes("Texturas de alimentos/roupas") &&
            form17.includes("Toques físicos")

        ) {
            texto += `<p><strong>Intervenção:</strong> Ambiente sensorialmente regulado; atividades em grupos pequenos; permitir fone e iluminação adaptada; apoio visual constante.</p>`;
        } else if (

            form17.includes("Sons altos") &&
            form17.includes("Luzes fortes") &&
            form17.includes("Cheiros")
            //form17.includes("Texturas de alimentos/roupas") &&
            //form17.includes("Toques físicos")

        ) {
            texto += `<p><strong>Intervenção:</strong>Ambiente mais neutro possível: luz baixa, pouco cheiro e proteção sonora; usar atividades calmas e com apoio visual.</p>`;
        } else if (

            form17.includes("Sons altos") &&
            form17.includes("Luzes fortes") &&
            //form17.includes("Cheiros") 
            form17.includes("Texturas de alimentos/roupas")
            //form17.includes("Toques físicos")

        ) {
            texto += `<p><strong>Intervenção:</strong>AReduzir estímulos no ambiente; adaptar lanche com texturas toleradas; permitir tempo em espaço tranquilo com iluminação suave. </p>`;
        } else if (
            form17.includes("Sons altos") &&
            form17.includes("Luzes fortes") &&
            form17.includes("Toques físicos")
        ) {
            texto += `<p><strong>Intervenção:</strong> Preparar a criança com aviso visual antes de qualquer mudança sensorial; permitir retirada para espaço sensorial controlado.</p>`;
        } else if (
            form17.includes("Sons altos") &&
            form17.includes("Cheiros") &&
            form17.includes("Texturas de alimentos/roupas")
        ) {
            texto += `<p><strong>Intervenção:</strong> Ambiente ventilado, com materiais sem cheiro; adaptação alimentar e uso de abafadores durante atividades com som (como vídeos).</p>`;
        } else if (
            form17.includes("Sons altos") &&
            form17.includes("Cheiros") &&
            form17.includes("Toques físicos")
        ) {
            texto += `<p><strong>Intervenção:</strong> Evitar locais com cheiro e barulho intenso; usar fones com música calma; respeitar espaço pessoal sempre.</p>`;
        } else if (
            form17.includes("Sons altos") &&
            form17.includes("Texturas de alimentos/roupas") &&
            form17.includes("Toques físicos")
        ) {
            texto += `<p><strong>Intervenção:</strong> Permitir fone de ouvido e roupas confortáveis; criar cantinho seguro; respeitar limites no toque.</p>`;
        } else if (
            form17.includes("Luzes fortes") &&
            form17.includes("Cheiros") &&
            form17.includes("Texturas de alimentos/roupas")
        ) {
            texto += `<p><strong>Intervenção:</strong> Evitar odores fortes e luz intensa; oferecer lanche com pouca mistura de texturas e cheiro neutro.</p>`;
        } else if (
            form17.includes("Luzes fortes") &&
            form17.includes("Cheiros") &&
            form17.includes("Toques físicos")
        ) {
            texto += `<p><strong>Intervenção:</strong> Sala com cortinas ou iluminação indireta; aromatizadores leves se a criança tolerar; uso de comunicação visual.</p>`;
        } else if (
            form17.includes("Luzes fortes") &&
            form17.includes("Texturas de alimentos/roupas") &&
            form17.includes("Toques físicos")
        ) {
            texto += `<p><strong>Intervenção:</strong> Ambiente com luz controlada e roupas escolhidas pela criança; usar guia visual para contato físico apenas quando necessário.</p>`;
        } else if (
            form17.includes("Cheiros") &&
            form17.includes("Texturas de alimentos/roupas") &&
            form17.includes("Toques físicos")
        ) {
            texto += `<p><strong>Intervenção:</strong> Evitar locais com odores marcantes e materiais ásperos; não tocar a criança sem consentimento; oferecer substitutos (como almofadas sensoriais).</p>`;
        } else if (
            form17.includes("Sons altos") &&
            form17.includes("Luzes fortes")
        ) {
            texto += `<p><strong>Intervenção:</strong> Criar cantinho sensorial com luz baixa e abafadores disponíveis; usar cronograma visual para avisar sobre momentos barulhentos e acender luz aos poucos.</p>`;
        } else if (
            form17.includes("Sons altos") &&
            form17.includes("Cheiros")
        ) {
            texto += `<p><strong>Intervenção:</strong> Evitar ambientes com muitos estímulos sensoriais (refeitório, eventos com som e comida); trabalhar com rotina tranquila e previsível; usar ventilação e abafadores.</p>`;
        } else if (
            form17.includes("Sons altos") &&
            form17.includes("Texturas de alimentos/roupas")
        ) {
            texto += `<p><strong>Intervenção:</strong> Permitir uso de abafadores e roupas escolhidas pela criança; usar sinal visual para evitar sobrecarga em horários de lanche e entrada/saída.</p>`;
        } else if (
            form17.includes("Sons altos") &&
            form17.includes("Toques físicos")
        ) {
            texto += `<p><strong>Intervenção:</strong> Não tocar a criança sem aviso; usar sinais com imagens para orientar; deixar a criança escolher onde sentar, longe de ruídos e com espaço.</p>`;
        } else if (
            form17.includes("Luzes fortes") &&
            form17.includes("Cheiros")
        ) {
            texto += `<p><strong>Intervenção:</strong> Manter ambiente arejado e com luz controlada; evitar produtos com cheiro forte; usar aromatizadores naturais apenas se a criança gostar.</p>`;
        } else if (
            form17.includes("Luzes fortes") &&
            form17.includes("Texturas de alimentos/roupas")
        ) {
            texto += `<p><strong>Intervenção:</strong> Permitir roupas confortáveis e oferecer local com luz suave; reduzir estímulos visuais muito intensos.</p>`;
        } else if (
            form17.includes("Luzes fortes") &&
            form17.includes("Toques físicos")
        ) {
            texto += `<p><strong>Intervenção:</strong> Ajustar iluminação com filtros e evitar luz direta; não forçar toques e usar pistas visuais ao invés de toque físico.</p>`;
        } else if (
            form17.includes("Cheiros") &&
            form17.includes("Texturas de alimentos/roupas")
        ) {
            texto += `<p><strong>Intervenção:</strong> Oferecer alimentos em porções pequenas e sem mistura de cheiros; permitir que a criança leve roupa extra ou objetos com cheiros familiares.</p>`;
        } else if (
            form17.includes("Cheiros") &&
            form17.includes("Toques físicos")
        ) {
            texto += `<p><strong>Intervenção:</strong> Evitar toque físico durante atividades com cheiros intensos (ex: culinária); usar cartões visuais para comunicação e escolha.</p>`;
        } else if (
            form17.includes("Texturas de alimentos/roupas") &&
            form17.includes("Toques físicos")
        ) {
            texto += `<p><strong>Intervenção:</strong> Oferecer escolha de roupa e lanche adaptado; respeitar o espaço corporal e sugerir cumprimentos alternativos sem toque.</p>`;
        } else if (
            form17.includes("Não apresenta sensibilidades")
        ) {
            texto += `<p><strong>Intervenção:</strong> Não apresenta sensibilidades.</p>`;
        } else if (
            form17.includes("Sons altos")
        ) {
            texto += `<p><strong>Intervenção:</strong> Usar abafadores de ouvido durante momentos barulhentos (ex: intervalo); manter portas fechadas em sala; avisar antes de barulhos (ex: sino, música).</p>`;
        } else if (
            form17.includes("Luzes fortes")
        ) {
            texto += `<p><strong>Intervenção:</strong> Reduzir luz fluorescente com capas de filtro; preferir luz natural ou luminárias suaves; permitir o uso de bonés ou viseiras.</p>`;
        } else if (
            form17.includes("Cheiros")
        ) {
            texto += `<p><strong>Intervenção:</strong> Evitar uso de perfumes fortes no ambiente; manter sala bem ventilada; usar cheiros neutros em materiais escolares e de limpeza.</p>`;
        } else if (
            form17.includes("Texturas de alimentos/roupas")
        ) {
            texto += `<p><strong>Intervenção:</strong> Permitir roupas com tecidos confortáveis, sem etiquetas ou costuras incômodas; oferecer alimentos variados respeitando as texturas que a criança tolera.</p>`;
        } else if (
            form17.includes("Toques físicos")
        ) {
            texto += `<p><strong>Intervenção:</strong> Evitar toques inesperados; usar sinais visuais em vez de toques para chamar atenção; respeitar o espaço pessoal, oferecendo alternativa como “toque de cotovelo”.</p>`;
        }

        texto += `</div>`; // Fecha certinho o div da caixinha

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


       


        const relatorioHTML = `
          <h2>Relatório da Criança</h2>
          <p><strong>Nome:</strong> ${nome || "Não informado"}</p>
          <p><strong>Idade:</strong> ${idade || "Não informada"}</p>

          ${gerarTitulo("🧠 1. Aprendizagem e Desenvolvimento Cognitivo")}
          <h3> Quais são os pontos fortes da criança na aprendizagem:</h3>
          <ul class="lista-seta" >${form01.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>
          ${gerarPontosFortes(form01)}

          <h3> Quais áreas ela apresenta maior dificuldade:</h3>
          <ul class="lista-seta">${form02.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          <h3> Como ela prefere aprender:</h3>
          <ul class="lista-seta">${form03.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>


          <h3> Qual é o tempo médio de atenção em atividade:</h3>
          <ul class="lista-seta">${form04.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>
          ${gerarTempoMedioAtividades(form04)}

          <h3> Que tipo de suporte é necessário:</h3>
          <ul class="lista-seta">${form05.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>


        ${gerarTitulo("🗣️ 2. Comunicação")}
          <h3> Qual o tipo de comunicação predominante:</h3>
          <ul class="lista-seta">${form06.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>
          ${gerarTipoComunicacaoPredominante(form06)}



          <h3> Como expressa vontades e necessidades:</h3>
          <ul class="lista-seta">${form07.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>
           ${geraExpressaNecessidades(form07)}


          <h3> Compreende instruções:</h3>
          <ul class="lista-seta">${form08.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>
           ${geraCompreendeInstrucoes(form08)}

          <h3> Já são usadas estratégias de comunicação:</h3>
          <ul class="lista-seta">${form09.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          
          
          
          
         ${gerarTitulo("🧍 3. Comportamento e Interação Social")}
          <h3> Como a criança se relaciona com os outros:</h3>
          <ul class="lista-seta">${form10.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>
           ${geraRelacionamentoOutros(form10)}

          <h3> Participa de atividades em grupo:</h3>
          <ul class="lista-seta">${form11.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          <h3> Apresenta comportamentos desafiadores:</h3>
          <ul class="lista-seta">${form12.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

           <h3> Estratégias que funcionam para lidar com comportamentos:</h3>
          <ul class="lista-seta">${form13.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          
          
          ${gerarTitulo("🖐️ 4. Autonomia e Habilidades Motoras")}
          <h3> A criança é autônoma nas atividades diárias:</h3>
          <ul class="lista-seta">${form14.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

           <h3> Como está sua coordenação motora:</h3>
          <ul class="lista-seta">${form15.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

           <h3> Locomoção e orientação no ambiente escolar:</h3>
          <ul class="lista-seta">${form16.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

     
         

          ${gerarTitulo("🌈 5. Perfil Sensorial")}
          <h3> A criança apresenta sensibilidades sensoriais:</h3>
          <ul class="lista-seta">${form17.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>
           ${geraPerfilSensorial(form17)}
          
          <p><h3> Quais estímulos causam desconforto ou crise?:</h3> ${formEstimulo18 || "Não informado"}</p>

          <h3> Estratégias de regulação sensorial já utilizadas:</h3>
          <ul class="lista-seta">${form19.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>
 




          ${gerarTitulo("🌈 6. Adaptações Pedagógicas")}
           <h3> A criança acompanha o currículo:</h3>
          <ul class="lista-seta">${form20.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>
          
           <h3> Quais recursos funcionam melhor:</h3>
          <ul class="lista-seta">${form21.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>
          
           <h3> Como ela responde às avaliações:</h3>
          <ul class="lista-seta">${form22.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

           
          
          
          
          ${gerarTitulo("👨‍👩‍👧 7. Envolvimento da Família")}
          <h3> Família participa do processo escolar:</h3>
          <ul class="lista-seta">${form23.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

           <h3> Há comunicação frequente com a escola:</h3>
          <ul class="lista-seta">${form24.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          <h3> A criança faz acompanhamento com profissionais:</h3>
          <ul class="lista-seta">${form25.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          
          ${gerarTitulo("📌 8. Planejamento Futuro")}
          <h3> Metas para o semestre:</h3>
          <ul class="lista-seta">${form26.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

          <h3> Como será acompanhado o progresso:</h3>
          <ul class="lista-seta">${form27.map(item => `<li>${item}</li>`).join("") || "<li>Nenhum selecionado</li>"}</ul>

         
          <p><h2>👨‍👩‍👧 Responsáveis pelo acompanhamento:</h2> ${formEstimulo28 || "Não informado"}</p>
 

          

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