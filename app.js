const LINKS = {
  getStarted: '#quick-start',
  docs: '#quick-start',
  source: 'https://github.com/nipscernlab',
  sapho: 'https://www.nipscern.com/projects/sapho',
  nipscern: 'https://www.nipscern.com/',
  license: 'https://opensource.org/license/mit'
};

const FUTURE = {
  en: {
    heading: 'Future direction,<br><em>kept explicit.</em>',
    introduction: 'Solar is being designed to grow beyond its current Linux command-line workflow without abandoning its native, explicit and Core-first architecture. The capabilities below are planned development directions, not part of the current release, and have no committed delivery dates.',
    closing: 'Every future interface and backend must preserve the same principle: tools, commands, artifacts and failures should remain visible to the developer.',
    source: 'Explore NIPSCERN on GitHub ↗',
    groups: [
      {
        label: 'PLATFORM',
        title: 'Native reach, same project model.',
        items: [{
          status: 'PLANNED',
          title: 'Native Windows Support',
          text: 'Extend the Solar Core and CLI beyond the current Linux/POSIX boundary with a native Windows implementation. The direction is to retain the same project model, commands and artifact structure while accounting for Windows process execution, paths, environment discovery and toolchain integration.',
          points: ['Native Core and CLI builds for Windows', 'Consistent solar.toml projects across Linux and Windows', 'Windows-aware processes, paths and installed-tool discovery', 'Equivalent artifact management and build reports', 'No WSL requirement as the primary execution environment']
        }, {
          status: 'PLANNED',
          title: 'Docker-Based Solar Environments',
          text: 'Run Solar inside reproducible Docker environments with preconfigured open-source EDA toolchains. This would simplify setup, isolate dependencies and make development, testing and CI workflows more consistent across machines.',
          points: ['Ready-to-use Solar development images', 'Optional images with selected EDA tools', 'Reproducible tool versions and simpler onboarding', 'Isolated project environments with local projects mounted as volumes', 'CI/CD integration and generated artifacts accessible outside the container'],
          note: 'Docker support would complement native installations, not replace them.'
        }]
      },
      {
        label: 'FPGA WORKFLOWS',
        title: 'Existing FPGA tools, made inspectable.',
        items: [{
          status: 'PLANNED',
          title: 'Intel Quartus Workflow Integration',
          text: 'A structured backend for driving an existing Intel Quartus Prime installation from the Linux terminal. Solar would validate the environment and expose common FPGA operations through the same project and reporting model used by its current backends.',
          points: ['Assisted detection and configuration of installed Quartus versions', 'Environment and required-executable diagnostics', 'Project generation or synchronization from Solar configuration', 'Analysis, synthesis, fitting, timing analysis and programming-file workflows', 'Structured logs, reports and explicit CLI invocation'],
          note: 'Solar will not redistribute Quartus. The planned integration focuses on detecting, configuring and orchestrating an existing installation through a consistent command-line workflow.'
        }, {
          status: 'PLANNED',
          title: 'OSS CAD Suite Integration',
          text: 'Comprehensive integration with OSS CAD Suite as a portable open-source hardware toolchain environment. Solar would discover compatible tools in the suite while keeping backend selection, artifacts and reports inside the Solar workflow model.',
          points: ['Assisted discovery and setup of an installed suite', 'Validation and version reporting for available tools', 'Selection between system tools and suite-provided tools', 'Compatible simulation, synthesis and FPGA workflow integration', 'Visible executable paths, arguments and generated artifacts'],
          note: 'OSS CAD Suite integration would give Solar access to a broad open-source EDA environment while keeping every selected tool and generated artifact visible.'
        }]
      },
      {
        label: 'INTERFACES AND VISUALIZATION',
        title: 'More ways to inspect a workflow, never hide it.',
        items: [{
          status: 'LONG-TERM DIRECTION',
          title: 'Solar Studio EDA',
          text: 'An optional graphical frontend over the same native Solar Core used by the CLI. It would make project configuration, source navigation, build execution, reports and generated artifacts easier to inspect without moving workflow logic into the interface.',
          points: ['Project setup, navigation, profiles and named simulations', 'Build execution, diagnostics, structured logs and artifact browsing', 'Report, waveform and SAPHO workflow access', 'Optional editor integration', 'CLI remains independent and projects remain terminal-usable'],
          note: 'Solar Studio is planned as an interface to the Core, not as a replacement for it. It is not a committed graphical product or a browser-required IDE.'
        }, {
          status: 'PLANNED',
          title: 'Surfer Waveform Integration',
          text: 'First-class integration with Surfer as another waveform visualization option. Validated simulation artifacts would be opened explicitly through Surfer while retaining the current separation between simulation and visualization.',
          points: ['Discovery of an installed Surfer executable', 'Compatible waveform-format validation', 'Explicit CLI opening and viewer selection', 'Solar Studio integration direction', 'No implicit simulation rerun when opening an existing waveform'],
          note: 'Surfer support would expand waveform visualization options without coupling simulation execution to a specific viewer.'
        }, {
          status: 'UNDER EVALUATION',
          title: 'PRISM Integration',
          text: 'Evaluate a future integration path for PRISM that keeps the Solar Core small and the workflow explicit. Any connection would need a clear boundary so tool execution, generated results and failures remain observable from Solar.',
          points: ['Discovery of relevant PRISM components', 'Explicit project and artifact handoff', 'Diagnostics for missing or incompatible components', 'No hidden interface dependency'],
          note: 'This is under evaluation. Solar does not currently integrate PRISM as a backend.'
        }]
      }
    ]
  },
  pt: {
    heading: 'Direção futura,<br><em>sem esconder o caminho.</em>',
    introduction: 'Solar foi pensado para ir além do fluxo atual de linha de comando em Linux, sem abrir mão do Core nativo, do comportamento explícito e de ferramentas visíveis. As capacidades abaixo são direções de desenvolvimento; não existem na versão atual e não têm data de entrega definida.',
    closing: 'Toda interface ou backend futuro deve manter o mesmo princípio: as ferramentas, os comandos, os artefatos e as falhas precisam continuar visíveis para quem desenvolve.',
    source: 'Explorar a NIPSCERN no GitHub ↗',
    groups: [
      {
        label: 'PLATAFORMA',
        title: 'Alcance nativo, mesmo modelo de projeto.',
        items: [{
          status: 'PLANEJADO',
          title: 'Suporte nativo a Windows',
          text: 'Levar o Core e a CLI do Solar além do limite atual de Linux/POSIX com uma implementação nativa para Windows. A direção é manter modelo de projeto, comandos e estrutura de artefatos, tratando corretamente processos, caminhos, ambiente e toolchains do Windows.',
          points: ['Builds nativos do Core e da CLI para Windows', 'Projetos solar.toml consistentes entre Linux e Windows', 'Processos, caminhos e descoberta de ferramentas adequados ao Windows', 'Mesma organização de artefatos e relatórios de build', 'Sem exigir WSL como ambiente principal de execução']
        }, {
          status: 'PLANEJADO',
          title: 'Ambientes Solar com Docker',
          text: 'Executar o Solar em ambientes Docker reproduzíveis, com toolchains abertas de EDA pré-configuradas. Isso pode simplificar a preparação, isolar dependências e deixar desenvolvimento, testes e CI mais consistentes entre máquinas.',
          points: ['Imagens prontas para desenvolvimento com Solar', 'Imagens opcionais com ferramentas EDA selecionadas', 'Versões de ferramentas reproduzíveis e entrada mais simples no projeto', 'Ambientes isolados, com projetos locais montados como volumes', 'Integração CI/CD e artefatos gerados acessíveis fora do container'],
          note: 'O suporte a Docker complementará instalações nativas; não as substituirá.'
        }]
      },
      {
        label: 'FLUXOS FPGA',
        title: 'Ferramentas FPGA existentes, com rastreabilidade.',
        items: [{
          status: 'PLANEJADO',
          title: 'Integração de fluxo Intel Quartus',
          text: 'Um backend estruturado para acionar uma instalação existente do Intel Quartus Prime pelo terminal Linux. Solar validaria o ambiente e apresentaria operações FPGA no mesmo modelo de projeto e relatório usado pelos backends atuais.',
          points: ['Detecção e configuração assistidas de versões já instaladas do Quartus', 'Diagnóstico de executáveis e ambiente necessários', 'Geração ou sincronização de projeto a partir da configuração Solar', 'Análise, síntese, fitting, timing e geração de arquivos de programação', 'Logs, relatórios e chamada explícita pela CLI'],
          note: 'Solar não redistribuirá o Quartus. A integração planejada se concentra em detectar, configurar e orquestrar uma instalação existente em um fluxo consistente de linha de comando.'
        }, {
          status: 'PLANEJADO',
          title: 'Integração com OSS CAD Suite',
          text: 'Uma integração abrangente com a OSS CAD Suite como ambiente portátil de ferramentas abertas para hardware. Solar encontraria ferramentas compatíveis na suíte, mantendo seleção de backend, artefatos e relatórios dentro do seu próprio modelo de fluxo.',
          points: ['Descoberta e configuração assistidas de uma suíte instalada', 'Validação e relatório de versões das ferramentas disponíveis', 'Escolha entre ferramentas do sistema e ferramentas fornecidas pela suíte', 'Integração com fluxos compatíveis de simulação, síntese e FPGA', 'Caminhos de executáveis, argumentos e artefatos sempre visíveis'],
          note: 'A integração com OSS CAD Suite daria acesso a um ambiente amplo de EDA aberto sem esconder as ferramentas escolhidas nem os artefatos gerados.'
        }]
      },
      {
        label: 'INTERFACES E VISUALIZAÇÃO',
        title: 'Mais formas de observar o fluxo, sem escondê-lo.',
        items: [{
          status: 'DIREÇÃO DE LONGO PRAZO',
          title: 'Solar Studio EDA',
          text: 'Uma interface gráfica opcional sobre o mesmo Core nativo usado pela CLI. Ela facilitaria inspecionar configuração, fontes, execução de builds, relatórios e artefatos gerados, sem transferir a lógica do fluxo para a interface.',
          points: ['Criação e navegação de projeto, perfis e simulações nomeadas', 'Execução de build, diagnósticos, logs estruturados e navegador de artefatos', 'Acesso a relatórios, formas de onda e fluxos SAPHO', 'Integração opcional com editor', 'CLI independente e projetos sempre utilizáveis pelo terminal'],
          note: 'Solar Studio é uma direção de interface para o Core, não um substituto para ele. Não é um produto gráfico confirmado nem uma IDE que exija navegador.'
        }, {
          status: 'PLANEJADO',
          title: 'Integração de ondas com Surfer',
          text: 'Uma integração de primeira classe com Surfer como mais uma opção para visualizar formas de onda. Artefatos de simulação validados seriam abertos explicitamente pelo Surfer, preservando a separação atual entre simular e visualizar.',
          points: ['Descoberta de um executável Surfer instalado', 'Validação de formatos de onda compatíveis', 'Abertura explícita pela CLI e escolha de visualizador', 'Direção de integração com Solar Studio', 'Sem rodar novamente uma simulação ao abrir uma onda existente'],
          note: 'O suporte ao Surfer ampliaria as opções de visualização sem acoplar a execução da simulação a um visualizador específico.'
        }, {
          status: 'EM AVALIAÇÃO',
          title: 'Integração com PRISM',
          text: 'Avaliar um caminho futuro de integração com PRISM, mantendo o Core do Solar pequeno e o fluxo explícito. Qualquer conexão precisará de um limite claro para que execução, resultados gerados e falhas continuem observáveis pelo Solar.',
          points: ['Descoberta de componentes relevantes do PRISM', 'Passagem explícita de projeto e artefatos', 'Diagnósticos para componentes ausentes ou incompatíveis', 'Sem dependência escondida de interface'],
          note: 'Este item está em avaliação. Solar não integra PRISM como backend hoje.'
        }]
      }
    ]
  }
};

const COPY = {
  en: {
    title: 'Solar — Native workflow orchestration for open hardware',
    description: 'Solar is a native workflow orchestration layer for open hardware projects.',
    skip: 'Skip to content',
    nav: ['Workflow', 'SAPHO', 'Status', 'Future', 'Quick start'],
    sectionLabels: ['01 / START WITH THE WORKFLOW', '02 / THE WORKFLOW', '03 / OBSERVED CLI OUTPUT', '04 / INTEGRATED TOOLS', '05 / SAPHO INTEGRATION', '06 / REPORTS AND EVIDENCE', '07 / CORE-FIRST ARCHITECTURE', '08 / WHERE IT FITS', '09 / CURRENT STATUS', '10 / FUTURE IMPLEMENTATIONS', '11 / QUICK START'],
    intro: {
      eyebrow: 'SOLAR 0.3 DEVELOPMENT PREVIEW / LINUX / MIT',
      heading: 'Native workflow<br><em>orchestration for open hardware.</em>',
      paragraphs: [
        'Solar brings project configuration, RTL validation, simulation, synthesis and generated artifacts into one explicit workflow. It coordinates established tools through a small native Core, a predictable project model and traceable build results.',
        'It is not a simulator, synthesizer, IDE or waveform viewer. It makes established tools work together while keeping project behavior inspectable.',
        'HDL projects often distribute their intent across local commands, tool arguments, scripts, folders and conventions. Solar treats <code>solar.toml</code> as a project contract: the place to declare the language, backends, profiles, tests and explicit source overrides that Solar needs to run the workflow.',
        'It also discovers conventional Verilog and SystemVerilog sources below <code>rtl/</code> and <code>tb/</code> deterministically. That keeps the authored tree readable without forcing every source file into a hand-maintained list.'
      ],
      ctas: ['Get started <span>↓</span>', 'View source <span>↗</span>', 'Documentation <span>↗</span>']
    },
    workflow: {
      heading: 'One command.<br><em>Every stage.</em>',
      paragraphs: [
        '<code>solar build full --profile debug</code> loads and validates the project, elaborates RTL, runs declared simulations in manifest order, and synthesizes only if those simulations pass. The command shares one build context, so a generated SAPHO result can be reused rather than rebuilt for each stage.',
        'Private workspaces, logs and state stay under <code>.solar/</code>. Validated waveforms are published in <code>sim/</code>; Verilog netlists and reports are published in <code>synth/</code>. The source tree remains the source tree.'
      ],
      flow: ['LOAD', 'CHECK', 'RTL', 'SIM', 'SYNTH', 'REPORT'],
      tree: 'counter/\n├── solar.toml      project contract\n├── rtl/            authored RTL\n├── tb/             authored testbenches\n├── sim/            published VCD/FST artifacts\n├── synth/          published netlist and report\n└── .solar/         private workspace, logs and state'
    },
    terminal: {
      heading: 'Build results,<br><em>not guesswork.</em>',
      paragraphs: [
        'This is an excerpt captured from Solar 0.3.0 built in Debug and run against the repository\'s <code>examples/counter</code> project. It shows actual CLI grammar and output; external-tool versions, paths and timings are intentionally not presented as universal performance claims.',
        '<code>solar check</code> validates without executing a build. <code>solar build sim --list</code> lists configured simulations without executing a backend. <code>solar build full --dry-run</code> validates and plans the complete pipeline without executing external tools.'
      ]
    },
    tools: {
      descriptions: [
        'Compile-only RTL elaboration and standard Verilog simulation; named tests use isolated working directories and logs.',
        'Optional lint-only RTL elaboration and simulation backend; supports conventional testbenches and Python-driven cocotb tests.',
        'Receives a deterministic script built from authored RTL only; Solar verifies the netlist and report before publication.',
        'An optional external viewer. <code>solar view</code> opens a registered waveform and never triggers a build.',
        'The bundled compiler backend used by Solar for SAPHO CMM, C++ and Assembly project flows.'
      ],
      note: 'Solar builds structured argument vectors through typed backends; it does not turn project configuration into arbitrary shell command strings.'
    },
    sapho: {
      partner: 'SAPHO DEVELOPMENT',
      heading: 'Software source<br><em>to SAPHO hardware.</em>',
      paragraphs: [
        'SAPHO is a first-class Solar build flow. CMM, C++ and Assembly projects use the bundled YANC 5.2 toolchain through Solar\'s Compiler Service. Solar validates the compiler output, normalizes it into role-based artifacts, then passes exactly those artifacts to the simulation and synthesis services.',
        'Generated processor RTL, support HDL, MIF files, testbench and runtime sidecars are handled as structured outputs. Simulation gets the generated processor and required runtime files; synthesis gets generated hardware without testbench leakage. Public results are published in <code>hardware/</code> and <code>simulation/</code>.'
      ],
      cta: 'Explore the SAPHO project ↗',
      flow: ['CMM<br>C++<br>ASM', 'YANC<br>toolchain', 'SAPHO', 'RTL<br>MIF<br>support', 'SIM<br>SYNTH<br>REPORT']
    },
    evidence: {
      heading: 'Evidence survives<br><em>the terminal.</em>',
      paragraphs: [
        '<code>solar report</code> reads the persisted <code>.solar/state/last-report.txt</code> snapshot. It does not rerun a build. Depending on the executed flow, the report records the project configuration, selected profile, host operating system, CPU and memory snapshot, observed tool versions, pipeline stages, per-process timings, artifacts, logs and a bounded stderr tail on failure.',
        'The report\'s timings are wall-clock measurements for diagnosis, not a benchmark. Solar makes that scope explicit in the report itself.'
      ]
    },
    architecture: {
      layers: [
        'argument parsing, terminal output, exit codes',
        'project loading · configuration · discovery · build context · diagnostics',
        'RTL · test · compiler · synthesis · waveform · artifacts · report',
        'Icarus · Verilator · Yosys · YANC'
      ],
      note: 'The current CLI is an interface over the Core API. This boundary allows a future frontend to reuse workflow behavior without reimplementing project parsing or backend execution; it does not claim that a GUI exists today.'
    },
    useCases: [
      ['Education', 'Use named tests, explicit manifests and visible artifacts to make HDL and processor workflows inspectable in a lab or classroom.'],
      ['Research', 'Preserve logs, build reports, tool versions and generated outputs alongside a reproducible project contract.'],
      ['Open hardware projects', 'Keep existing Verilog tools while reducing local script drift and separating authored sources from generated work.'],
      ['SAPHO development', 'Compile CMM, C++ or Assembly through the bundled YANC flow and carry validated generated hardware into simulation and synthesis.']
    ],
    status: {
      headings: ['Available today', 'Current limitations'],
      lists: [
        ['Format-2 Verilog/SystemVerilog projects with deterministic discovery', 'Profiles, defines, include directories and named simulations', '<code>init</code>, <code>scan</code>, <code>check</code>, <code>doctor</code> and safe <code>clean</code>', 'RTL, simulation, synthesis and complete builds', 'Icarus/VVP, Verilator, cocotb 2.x, Yosys and GTKWave integration', 'Bundled YANC CMM, C++ and Assembly flows for SAPHO artifacts', 'Registered artifacts, project-local logs and persistent reports'],
        ['Linux/POSIX only', 'No FPGA place-and-route, board programming or ASIC implementation', 'No VHDL support, HDL editor, language server or graphical Solar frontend', 'Sequential simulations; no timeout, parallel build or incremental cache', 'Static backend registries; no dynamic plugins or arbitrary backend flags', 'One YANC source and processor per project in the current flow']
      ]
    },
    roadmap: [
      ['Near term', 'Maintain validated backend contracts, documentation and real-tool coverage as the current CLI matures.'],
      ['Medium term', 'Explore carefully scoped extensibility and additional workflow capabilities without weakening explicit project behavior.'],
      ['Long-term direction', 'Optional frontends and wider implementation flows may build on the Core boundary; they are not part of the current product surface.']
    ],
    quickStart: {
      heading: 'Start.<br><em>Build. Prove.</em>',
      paragraph: 'Build Solar with CMake, then create and validate a conventional Verilog project. The commands below are present in the current CLI and templates. Choose a YANC template only when working on a SAPHO project.',
      ctas: ['Read project documentation <span>↗</span>', 'Browse source <span>↗</span>']
    },
    footer: ['Solar 0.3 development preview · MIT licensed · Linux', 'GitHub / source ↗', 'Documentation ↗', 'SAPHO ↗', 'NIPSCERN ↗', 'MIT license ↗'],
    theme: { light: 'LIGHT', dark: 'DARK', toLight: 'Switch to light mode', toDark: 'Switch to dark mode' },
    language: { label: 'PT', aria: 'Switch site language to Portuguese' }
  },
  pt: {
    title: 'Solar — Fluxos claros para hardware aberto',
    description: 'Solar organiza validação, simulação, síntese e artefatos de projetos de hardware aberto em um fluxo nativo e rastreável.',
    skip: 'Ir para o conteúdo',
    nav: ['Fluxo', 'SAPHO', 'Status', 'Futuro', 'Início rápido'],
    sectionLabels: ['01 / COMECE PELO FLUXO', '02 / COMO O FLUXO ACONTECE', '03 / CLI EM USO', '04 / FERRAMENTAS QUE SE CONECTAM', '05 / SAPHO NO MESMO FLUXO', '06 / O QUE FICA REGISTRADO', '07 / CORE ANTES DA INTERFACE', '08 / ONDE O SOLAR AJUDA', '09 / O QUE JÁ EXISTE', '10 / IMPLEMENTAÇÕES FUTURAS', '11 / PRIMEIROS PASSOS'],
    intro: {
      eyebrow: 'SOLAR 0.3 / EM DESENVOLVIMENTO / LINUX / MIT',
      heading: 'Um fluxo nativo<br><em>para hardware aberto.</em>',
      paragraphs: [
        'Solar põe configuração, verificação de RTL, simulação, síntese e arquivos gerados no mesmo caminho de trabalho. Por baixo, um Core nativo pequeno coordena ferramentas que você já conhece e deixa cada resultado rastreável.',
        'Ele não tenta substituir simulador, sintetizador, editor ou visualizador de ondas. A proposta é mais simples: organizar essas peças para que o projeto se comporte de forma previsível e possa ser conferido depois.',
        'Em projetos HDL, é comum a intenção ficar espalhada entre scripts locais, argumentos de ferramenta, diretórios e convenções informais. No Solar, o <code>solar.toml</code> deixa claro o que o projeto precisa: linguagem, backends, perfis, testes e exceções de fontes.',
        'Para layouts convencionais, ele ainda encontra Verilog e SystemVerilog em <code>rtl/</code> e <code>tb/</code> numa ordem determinística. A árvore continua simples de ler, sem uma lista manual enorme de arquivos.'
      ],
      ctas: ['Começar <span>↓</span>', 'Ver código-fonte <span>↗</span>', 'Documentação <span>↗</span>']
    },
    workflow: {
      heading: 'Do projeto ao resultado.<br><em>Sem adivinhação.</em>',
      paragraphs: [
        '<code>solar build full --profile debug</code> lê o projeto, confere a configuração, elabora o RTL e executa as simulações na ordem definida no manifesto. A síntese só entra em cena quando elas passam. Um resultado SAPHO gerado percorre esse mesmo contexto de build, sem recompilação desnecessária a cada etapa.',
        'Arquivos temporários, logs e estado interno ficam em <code>.solar/</code>. Ondas validadas saem em <code>sim/</code>; netlists e relatórios Verilog vão para <code>synth/</code>. Nada de poluir a área onde o código foi escrito.'
      ],
      flow: ['CARREGAR', 'VALIDAR', 'RTL', 'SIM', 'SINT.', 'RELATÓRIO'],
      tree: 'counter/\n├── solar.toml      contrato do projeto\n├── rtl/            RTL autoral\n├── tb/             testbenches autorais\n├── sim/            artefatos VCD/FST publicados\n├── synth/          netlist e relatório publicados\n└── .solar/         workspace, logs e estado privados'
    },
    terminal: {
      heading: 'O que aconteceu,<br><em>sem maquiagem.</em>',
      paragraphs: [
        'Este trecho veio de uma execução do Solar 0.3.0 em Debug no projeto <code>examples/counter</code> do repositório. A sintaxe e as mensagens são reais. Caminhos, versões e tempos de ferramentas externas ficaram de fora porque não são uma métrica universal de desempenho.',
        '<code>solar check</code> confere o projeto sem rodar build. <code>solar build sim --list</code> mostra as simulações declaradas sem chamar backend. <code>solar build full --dry-run</code> valida e descreve o pipeline inteiro sem invocar ferramentas externas.'
      ]
    },
    tools: {
      descriptions: [
        'Faz a elaboração de RTL e a simulação Verilog padrão. Cada teste nomeado ganha diretório de trabalho e log próprios.',
        'Pode fazer a checagem RTL por lint e rodar simulações convencionais ou testes cocotb em Python.',
        'Recebe um script determinístico montado apenas com RTL autoral. Antes de publicar, Solar confere o netlist e o relatório.',
        'É um visualizador externo opcional. <code>solar view</code> abre uma onda que já foi registrada; nunca inicia um build escondido.',
        'É a toolchain incluída que compila CMM, C++ e Assembly para os fluxos SAPHO.'
      ],
      note: 'Solar monta argumentos estruturados em backends tipados. A configuração do projeto não vira uma string de shell improvisada.'
    },
    sapho: {
      partner: 'PARCERIA PARA O SAPHO',
      heading: 'Do código<br><em>ao processador SAPHO.</em>',
      paragraphs: [
        'No Solar, SAPHO não aparece como um anexo. Projetos em CMM, C++ e Assembly passam pela YANC 5.2 incluída e seguem pelo mesmo Serviço de Compilador. A saída é validada, organizada por finalidade e encaminhada de forma explícita para simulação e síntese.',
        'RTL do processador, HDL de apoio, arquivos MIF, testbench e arquivos de runtime entram como saídas conhecidas do compilador. A simulação recebe o que precisa para rodar; a síntese recebe apenas o hardware, sem carregar testbench junto. Os resultados publicados ficam em <code>hardware/</code> e <code>simulation/</code>.'
      ],
      cta: 'Conheça o projeto SAPHO ↗',
      flow: ['CMM<br>C++<br>ASM', 'YANC<br>toolchain', 'SAPHO', 'RTL<br>MIF<br>apoio', 'SIM<br>SÍNT.<br>RELATÓRIO']
    },
    evidence: {
      heading: 'O build termina.<br><em>O registro fica.</em>',
      paragraphs: [
        '<code>solar report</code> lê o último registro salvo em <code>.solar/state/last-report.txt</code>; ele não refaz o build. Conforme o fluxo executado, o relatório pode guardar configuração, perfil, sistema operacional, CPU, memória, versões encontradas de ferramentas, etapas, duração dos processos, artefatos, logs e o trecho final de stderr quando algo falha.',
        'Esses tempos servem para diagnosticar um build específico, não para vender benchmark. O próprio relatório deixa esse limite claro.'
      ]
    },
    architecture: {
      layers: [
        'argumentos, saída no terminal e códigos de retorno',
        'projeto · configuração · descoberta de fontes · contexto de build · diagnósticos',
        'RTL · testes · compilação · síntese · ondas · artefatos · relatórios',
        'Icarus · Verilator · Yosys · YANC'
      ],
      note: 'A CLI de hoje é só uma interface para a API do Core. Isso abre espaço para uma interface futura reaproveitar o fluxo sem reescrever como o projeto é lido ou como as ferramentas são chamadas. Não significa que exista GUI agora.'
    },
    useCases: [
      ['Educação', 'Deixe testes, manifesto e artefatos à vista para explicar um fluxo HDL ou de processador no laboratório e na sala de aula.'],
      ['Pesquisa', 'Guarde logs, relatórios, versões de ferramentas e saídas geradas ao lado de um projeto que outra pessoa consegue repetir.'],
      ['Hardware aberto', 'Continue usando suas ferramentas Verilog, reduza o acúmulo de scripts locais e separe código autoral de arquivos gerados.'],
      ['Desenvolvimento SAPHO', 'Compile CMM, C++ ou Assembly pela YANC incluída e leve o hardware gerado, já validado, até simulação e síntese.']
    ],
    status: {
      headings: ['Já disponível', 'Limites atuais'],
      lists: [
        ['Projetos Verilog/SystemVerilog no formato 2, com descoberta de fontes previsível', 'Perfis, defines, diretórios de include e simulações nomeadas', '<code>init</code>, <code>scan</code>, <code>check</code>, <code>doctor</code> e <code>clean</code> com proteção de arquivos', 'RTL, simulação, síntese e o fluxo completo de build', 'Integração com Icarus/VVP, Verilator, cocotb 2.x, Yosys e GTKWave', 'Fluxos YANC incluídos para CMM, C++ e Assembly, voltados aos artefatos SAPHO', 'Artefatos registrados, logs dentro do projeto e relatórios persistentes'],
        ['Funciona apenas em Linux/POSIX', 'Ainda não faz place-and-route FPGA, programação de placa ou implementação ASIC', 'Ainda não há VHDL, editor HDL, servidor de linguagem ou interface gráfica do Solar', 'As simulações são sequenciais; não há timeout, build paralelo nem cache incremental', 'Os backends são registrados estaticamente; não há plugins dinâmicos nem flags livres de backend', 'O fluxo atual aceita uma fonte YANC e um processador por projeto']
      ]
    },
    roadmap: [
      ['Agora', 'Fortalecer contratos de backend, documentação e testes com ferramentas reais enquanto a CLI atual amadurece.'],
      ['Depois', 'Investigar extensões e capacidades adicionais de fluxo sem perder a clareza de como o projeto se comporta.'],
      ['Mais à frente', 'Interfaces opcionais e fluxos de implementação maiores podem se apoiar no Core. Isso é direção de pesquisa, não parte do produto atual.']
    ],
    quickStart: {
      heading: 'Comece.<br><em>Construa. Comprove.</em>',
      paragraph: 'Compile o Solar com CMake e crie um projeto Verilog convencional. Os comandos abaixo existem na CLI e nos templates atuais. Use um template YANC somente quando o projeto for SAPHO.',
      ctas: ['Ler a documentação <span>↗</span>', 'Explorar o código <span>↗</span>']
    },
    footer: ['Solar 0.3 / em desenvolvimento · MIT · Linux', 'GitHub / código ↗', 'Documentação ↗', 'SAPHO ↗', 'NIPSCERN ↗', 'Licença MIT ↗'],
    theme: { light: 'CLARO', dark: 'ESCURO', toLight: 'Mudar para modo claro', toDark: 'Mudar para modo escuro' },
    language: { label: 'EN', aria: 'Mudar idioma do site para inglês' }
  }
};

const themeToggle = document.querySelector('.theme-toggle');
const languageToggle = document.querySelector('.language-toggle');
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const requestedLanguage = new URLSearchParams(window.location.search).get('lang');
let currentLocale = requestedLanguage === 'pt' || (!requestedLanguage && localStorage.getItem('solar-language') === 'pt') ? 'pt' : 'en';

function applyLinks() {
  document.querySelectorAll('[data-link]').forEach((link) => {
    const key = link.dataset.link.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    const target = LINKS[key];
    if (!target) return;
    link.href = target;
    if (target.startsWith('http')) {
      link.target = '_blank';
      link.rel = 'noreferrer';
    }
  });
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function setHtml(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.innerHTML = value;
}

function setMany(selector, values, html = false) {
  document.querySelectorAll(selector).forEach((element, index) => {
    if (values[index] === undefined) return;
    if (html) element.innerHTML = values[index];
    else element.textContent = values[index];
  });
}

function setPairRows(selector, rows) {
  document.querySelectorAll(selector).forEach((row, index) => {
    if (!rows[index]) return;
    row.querySelector('b').textContent = rows[index][0];
    row.querySelector('span').innerHTML = rows[index][1];
  });
}

function renderFuture(locale) {
  const future = FUTURE[locale];
  const intro = document.querySelector('[data-future-intro]');
  const groups = document.querySelector('[data-future-groups]');
  const outro = document.querySelector('[data-future-outro]');
  intro.innerHTML = `<h2>${future.heading}</h2><p>${future.introduction}</p>`;
  groups.innerHTML = future.groups.map((group) => `
    <section class="future-group">
      <div class="future-group-title"><span>${group.label}</span><b>${group.title}</b></div>
      <div class="future-items">
        ${group.items.map((item) => `
          <article class="future-item">
            <span class="future-status" data-status="${item.status.toLowerCase().replaceAll(' ', '-')}">${item.status}</span>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
            <ul>${item.points.map((point) => `<li>${point}</li>`).join('')}</ul>
            ${item.note ? `<p class="future-note">${item.note}</p>` : ''}
          </article>`).join('')}
      </div>
    </section>`).join('');
  outro.innerHTML = `<p class="future-closing">${future.closing}</p><a class="inline-link future-link" href="${LINKS.source}" target="_blank" rel="noreferrer">${future.source}</a>`;
}

function applyLocale(locale) {
  const copy = COPY[locale];
  currentLocale = locale;
  document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en';
  document.title = copy.title;
  document.querySelector('meta[name="description"]').content = copy.description;
  document.querySelector('meta[property="og:title"]').content = copy.title;
  document.querySelector('meta[property="og:description"]').content = copy.description;
  setText('.skip-link', copy.skip);
  setMany('.site-nav a, .mobile-nav a', [...copy.nav, ...copy.nav]);
  document.querySelector('.site-nav').setAttribute('aria-label', locale === 'pt' ? 'Navegação principal' : 'Primary navigation');
  mobileNav.setAttribute('aria-label', locale === 'pt' ? 'Navegação móvel' : 'Mobile navigation');
  setMany('.section-label', copy.sectionLabels);
  renderFuture(locale);

  setText('.intro .eyebrow', copy.intro.eyebrow);
  setHtml('.intro h2', copy.intro.heading);
  setMany('.intro .copy p:not(.eyebrow)', copy.intro.paragraphs, true);
  setMany('.intro .cta-row a', copy.intro.ctas, true);

  setHtml('.workflow h2', copy.workflow.heading);
  setMany('.workflow .copy p', copy.workflow.paragraphs, true);
  setMany('.flow-diagram span', copy.workflow.flow);
  setText('.tree-panel code', copy.workflow.tree);

  setHtml('.terminal-section h2', copy.terminal.heading);
  setMany('.terminal-section .copy p', copy.terminal.paragraphs, true);

  setMany('.tool-list > div > span', copy.tools.descriptions, true);
  setHtml('.tools-note', copy.tools.note);

  setText('.partnership small', copy.sapho.partner);
  setHtml('.sapho h2', copy.sapho.heading);
  setMany('.sapho .copy p', copy.sapho.paragraphs, true);
  setText('.sapho .inline-link', copy.sapho.cta);
  const saphoFlow = document.querySelectorAll('.sapho-flow span, .sapho-flow strong');
  saphoFlow.forEach((element, index) => { element.innerHTML = copy.sapho.flow[index]; });

  setHtml('.evidence h2', copy.evidence.heading);
  setMany('.evidence .copy p', copy.evidence.paragraphs, true);

  setMany('.architecture-map div span', copy.architecture.layers);
  setText('.architecture-note', copy.architecture.note);
  setPairRows('.use-case-list > div', copy.useCases);

  setMany('.status h2', copy.status.headings);
  document.querySelectorAll('.status ul').forEach((list, index) => {
    list.innerHTML = copy.status.lists[index].map((item) => `<li>${item}</li>`).join('');
  });
  setPairRows('.roadmap-lines > div', copy.roadmap);

  setHtml('.quick-start h2', copy.quickStart.heading);
  setText('.quick-start .copy p', copy.quickStart.paragraph);
  setMany('.quick-start .cta-row a', copy.quickStart.ctas, true);

  setMany('.site-footer p, .site-footer nav a', copy.footer);
  document.querySelector('.site-footer nav').setAttribute('aria-label', locale === 'pt' ? 'Navegação do rodapé' : 'Footer navigation');
  languageToggle.textContent = copy.language.label;
  languageToggle.setAttribute('aria-label', copy.language.aria);
  setTheme(document.documentElement.dataset.theme || 'dark');
  localStorage.setItem('solar-language', locale);
}

function setTheme(theme) {
  const copy = COPY[currentLocale];
  document.documentElement.dataset.theme = theme;
  themeToggle.textContent = theme === 'dark' ? copy.theme.light : copy.theme.dark;
  themeToggle.setAttribute('aria-label', theme === 'dark' ? copy.theme.toLight : copy.theme.toDark);
  localStorage.setItem('solar-theme', theme);
}

function closeMenu() {
  mobileNav.hidden = true;
  menuToggle.setAttribute('aria-expanded', 'false');
}

function updateHeader() {
  document.body.classList.toggle('has-scrolled', window.scrollY > 28);
}

function setupReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.14 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}

function setupAsciiOrbit() {
  const canvas = document.querySelector('.ascii-orbit');
  const context = canvas.getContext('2d');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const hero = canvas.closest('.hero');
  const glyphs = ['·', '*', '+', '×', '/', '\\', '<', '>', '[', ']', '='];
  const points = [];
  let frame = 0;
  let active = false;
  let visible = true;
  let rotation = 0;

  for (let latitude = -75; latitude <= 75; latitude += 15) {
    for (let longitude = 0; longitude < 360; longitude += 15) {
      points.push({ latitude, longitude, glyph: glyphs[(points.length * 7) % glyphs.length] });
    }
  }

  function resize() {
    const scale = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.floor(canvas.clientWidth * scale);
    canvas.height = Math.floor(canvas.clientHeight * scale);
    context.setTransform(scale, 0, 0, scale, 0, 0);
  }

  function draw() {
    if (!active || reduced.matches || document.hidden || !visible) return;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const radius = Math.min(width, height) * 0.31;
    context.clearRect(0, 0, width, height);
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    points.forEach((point) => {
      const longitude = (point.longitude + rotation) * Math.PI / 180;
      const latitude = point.latitude * Math.PI / 180;
      const x = Math.cos(latitude) * Math.sin(longitude);
      const depth = Math.cos(latitude) * Math.cos(longitude);
      if (depth < -0.06) return;
      const scale = (depth + 1) / 2;
      context.font = `${Math.max(7, 13 * scale)}px monospace`;
      context.fillStyle = `rgba(230,230,225,${0.12 + scale * 0.58})`;
      context.fillText(point.glyph, width / 2 + x * radius, height / 2 - Math.sin(latitude) * radius);
    });
    rotation += 0.12;
    frame = requestAnimationFrame(draw);
  }

  function refresh() {
    cancelAnimationFrame(frame);
    active = !reduced.matches && !document.hidden && visible;
    if (active) draw();
  }

  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; refresh(); }, { threshold: 0.01 }).observe(hero);
  document.addEventListener('visibilitychange', refresh);
  reduced.addEventListener('change', refresh);
  window.addEventListener('resize', () => { resize(); refresh(); }, { passive: true });
  resize();
  refresh();
}

applyLinks();
applyLocale(currentLocale);
themeToggle.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
languageToggle.addEventListener('click', () => applyLocale(currentLocale === 'en' ? 'pt' : 'en'));
menuToggle.addEventListener('click', () => {
  mobileNav.hidden = !mobileNav.hidden;
  menuToggle.setAttribute('aria-expanded', String(!mobileNav.hidden));
});
mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();
setupReveal();
setupAsciiOrbit();
