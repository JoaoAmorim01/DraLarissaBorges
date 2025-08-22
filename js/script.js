// =================================================================
// 1. HTML COMPONENTS (TEMPLATES)
// =================================================================

const widgetsHTML = `
    <a href="https://api.whatsapp.com/send?phone=5531991349750&text=Ol%C3%A1%2C%20quero%20iniciar%20a%20psicoterapia%20on-line" target="_blank" class="floating-whatsapp-btn" title="Fale comigo no WhatsApp">
        <span class="[&>svg]:h-10 [&>svg]:w-10 [&>svg]:fill-[#ffffff]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
        </span>                     
    </a>
    <div class="accessibility-container">
        <div id="accessibility-widget" class="accessibility-widget">
            <button id="font-decrease" class="access-btn" title="Diminuir Fonte">A-</button>
            <button id="font-increase" class="access-btn" title="Aumentar Fonte">A+</button>
            <button id="contrast-toggle" class="access-btn" title="Alto Contraste">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            </button>
            <button id="dark-mode-toggle" class="access-btn" title="Modo Noturno">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            </button>
        </div>
        <button id="accessibility-toggle-btn" class="accessibility-toggle-btn" title="Acessibilidade">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
        </button>
    </div>
`;

const headerHTML = `
    <header class="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40" style="background-color: rgba(253, 251, 248, 0.8);">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#" class="nav-link-logo flex items-center" data-page="home">
                <img src=".././img/SANKOFA LOGO.png" alt="Logo Sankofa" class="h-12 w-auto mr-3">
                <div>
                    <h1 class="text-xl md:text-2xl font-bold" style="color: var(--primary-color);">Dra. Larissa Borges</h1>
                    <p class="text-xs md:text-sm -mt-1" style="color: var(--text-color);">Psicóloga & Consultora</p>
                </div>
            </a>
            <nav class="hidden md:flex items-center space-x-8" id="desktop-nav">
                <a class="nav-link active" data-page="home">Início</a>
                <a class="nav-link" data-page="sobre">Sobre Mim</a>
                <a class="nav-link" data-page="servicos">Serviços</a>
                <a class="nav-link" data-page="contato">Contato</a>
            </nav>
            <div class="md:hidden">
                <button id="mobile-menu-button" class="focus:outline-none" style="color: var(--text-strong);">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </div>
        </div>
        <div id="mobile-menu" class="hidden md:hidden shadow-lg" style="background-color: var(--card-bg);">
            <a class="block py-3 px-6 nav-link" data-page="home">Início</a>
            <a class="block py-3 px-6 nav-link" data-page="sobre">Sobre Mim</a>
            <a class="block py-3 px-6 nav-link" data-page="servicos">Serviços</a>
            <a class="block py-3 px-6 nav-link" data-page="contato">Contato</a>
        </div>
    </header>
`;

const pagesHTML = {
    home: `
        <section id="home" class="page active">
            <div class="container mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-20">
                <div class="grid md:grid-cols-2 gap-8 items-center">
                    <div class="text-center md:text-left">
                        <span class="lead-in-text font-semibold block mb-2">Bem-vinde ao seu espaço de transformação</span>
                        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6 leading-tight" style="color: var(--text-headings);">Acolhimento, conexão e autoconhecimento para uma vida mais plena.</h2>
                        <p class="text-lg mb-8">Reconheço sua coragem de chegar até aqui. Vamos dar os primeiros passos para a mudança que você deseja em sua vida?</p>
                        <a href="https://api.whatsapp.com/send?phone=5531991349750&text=Ol%C3%A1%2C%20quero%20iniciar%20a%20psicoterapia%20on-line" target="_blank" class="btn-primary inline-block font-bold py-3 px-6 rounded-lg">Agende sua Conversa</a>
                    </div>
                    <div class="flex justify-center row-start-1 md:row-auto">
                        <img src="../img/FOTO HOME.png" alt="Foto da Dra. Larissa Borges sorrindo, com um turbante colorido e roupas amarelas." class="rounded-lg w-full max-w-sm md:w-4/5 lg:w-3/5 h-auto object-cover">
                    </div>
                </div>
            </div>
            <div style="background-color: var(--bg-soft);">
                <div id="quote-rotator" class="container mx-auto px-6 md:px-12 lg:px-20 py-16 text-center min-h-[220px] flex items-center justify-center">
                    <div class="quote-rotator-item active show">
                        <p class="text-xl md:text-2xl lg:text-3xl font-serif italic" style="color: var(--text-headings);">“Quando me atrevo a ser poderosa, a usar minha força a serviço da minha visão, o medo que sinto se torna cada vez menos importante.”</p>
                        <span class="block mt-4 font-semibold" style="color: var(--primary-color);">- Audre Lorde</span>
                    </div>
                    <div class="quote-rotator-item">
                        <p class="text-xl md:text-2xl lg:text-3xl font-serif italic" style="color: var(--text-headings);">“Cuidar de mim não é autoindulgência, é autopreservação, e isso é um ato de guerra política.”</p>
                        <span class="block mt-4 font-semibold" style="color: var(--primary-color);">- Audre Lorde</span>
                    </div>
                    <div class="quote-rotator-item">
                        <p class="text-xl md:text-2xl lg:text-3xl font-serif italic" style="color: var(--text-headings);">"Nossos sentimentos são nossos caminhos mais genuínos para o conhecimento.”</p>
                        <span class="block mt-4 font-semibold" style="color: var(--primary-color);">- Audre Lorde</span>
                    </div>
                    <div class="quote-rotator-item">
                        <p class="text-xl md:text-2xl lg:text-3xl font-serif italic" style="color: var(--text-headings);">“O preconceito é um fardo que confunde o passado, ameaça o futuro e torna o presente inacessível.”</p>
                        <span class="block mt-4 font-semibold" style="color: var(--primary-color);">- Maya Angelou</span>
                    </div>
                </div>
            </div>
            <div class="container mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="flex justify-center">
                        <img src="../img/DRA LARISSA SORRISO TABLET.png" alt="Dra. Larissa Borges sentada, sorrindo e interagindo com um tablet." class="rounded-lg w-3/4 md:w-full max-w-xs h-auto object-cover">
                    </div>
                    <div class="prose max-w-none lg:prose-lg text-center md:text-left">
                        <span class="lead-in-text font-semibold block mb-2">Cuidado e Acolhimento</span>
                        <h3 class="text-3xl font-bold mb-4">Atendimento Clínico</h3>
                        <p>A psicoterapia é um processo de cuidado e autoconhecimento focado em promover a sua saúde mental de forma integral. É um espaço seguro e confidencial para você reconhecer, compreender e transformar os desafios emocionais, comportamentais e relacionais que enfrenta.</p>
                        <button class="btn-primary mt-4 font-bold py-3 px-6 rounded-lg nav-link" data-page="servicos">Saiba mais sobre a terapia</button>
                    </div>
                </div>
            </div>
            <div style="background-color: var(--bg-soft);">
                <div class="container mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
                    <div class="grid md:grid-cols-2 gap-12 items-center">
                        <div class="prose max-w-none lg:prose-lg order-2 md:order-1 text-center md:text-left">
                            <span class="lead-in-text font-semibold block mb-2">Transformação e Impacto</span>
                            <h3 class="text-3xl font-bold mb-4">Palestras e Consultorias</h3>
                            <p>Levo para empresas, ONGs e instituições públicas discussões e práticas sobre saúde mental, diversidade, equidade, liderança e empoderamento. Crio pontes entre diferentes realidades para construir soluções e promover a igualdade racial e de gênero.</p>
                            <button class="btn-primary mt-4 font-bold py-3 px-6 rounded-lg nav-link" data-page="contato">Contrate uma palestra</button>
                        </div>
                        <div class="order-1 md:order-2 flex justify-center">
                            <img src=".././img/larissaCírculo.png" alt="Foto em close da Dra. Larissa Borges rindo, com as mãos juntas em frente ao corpo." class="rounded-lg w-full max-w-sm h-auto object-cover">
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
                <h2 class="section-title text-3xl md:text-4xl font-bold text-center mb-4">Livros Publicados</h2>
                <p class="section-subtitle text-lg text-center max-w-3xl mx-auto mb-12">Além da prática clínica e das consultorias, dedico-me à escrita como forma de compartilhar conhecimento e reflexões. Conheça meus livros:</p>
                <div class="space-y-16">
                    <div class="flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
                        <div class="w-48 flex-shrink-0">
                            <div class="bg-gray-300 h-64 rounded-lg shadow-lg flex items-center justify-center" style="background-color: var(--border-color); ;"><img src=".././img/CapaLivro1.jpg" alt="Capa do livro 'Periferias do Gênero', de Larissa Amorim." class="rounded-lg w-full h-full object-cover"></div>
                        </div>
                        <div class="prose">
                            <h4 class="text-xl font-bold mb-2">Periferias do Gênero</h4>
                            <p>"Periferias do Gênero" de Larissa Amorim Borges explora o protagonismo e a invisibilidade das mulheres negras nos universos do hip hop e do funk, analisando como elas negociam espaços, enfrentam o machismo e o racismo e constroem suas identidades e formas de resistência...</p>
                            <a href="https://www.amazon.com.br/Periferias-do-G%C3%AAnero-Larissa-Amorim/dp/6586750075" target="_blank" class="btn-primary inline-block font-bold py-3 px-6 rounded-lg mt-4 no-underline">Compre agora &rarr;</a>
                        </div>
                    </div>
                    <div class="flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
                        <div class="w-48 flex-shrink-0">
                            <div class="bg-gray-300 h-64 rounded-lg shadow-lg flex items-center justify-center" style="background-color: var(--border-color);"> <img src=".././img/CapaLivro2.jpg" alt="Capa do livro 'Metodologia de Pesquisa Afrocentrada e Periférica', de Larissa Amorim." class="rounded-lg w-full h-full object-cover">
                            </div>
                        </div>
                        <div class="prose">
                            <h4 class="text-xl font-bold mb-2">Metodologia de pesquisa afrocentrada e periférica</h4>
                            <p>Em "Metodologia de pesquisa afrocentrada e periférica", Larissa Amorim Borges propõe uma abordagem de pesquisa que rompe com os modelos acadêmicos tradicionais, defendendo um método que seja ao mesmo tempo afrocentrado, feminista e construído a partir da perspectiva da periferia...</p>
                            <a href="https://www.amazon.com.br/Metodologia-pesquisa-afrocentrada-perif%C3%A9rica-Larissa/dp/6586750067" target="_blank" class="btn-primary inline-block font-bold py-3 px-6 rounded-lg mt-4 no-underline">Compre agora &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    sobre: `
        <section id="sobre" class="page">
            <div class="container mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
                <h2 class="section-title text-3xl md:text-4xl font-bold text-center mb-4">Sobre Mim</h2>
                <p class="section-subtitle text-lg text-center max-w-3xl mx-auto mb-12">Conheça a trajetória que me trouxe até aqui.</p>
                <div class="grid md:grid-cols-5 gap-12 items-start text-center md:text-left">
                    <div class="md:col-span-2 flex justify-center">
                        <img src=".././img/LarrisaPensamento.png" alt="Retrato da Dra. Larissa Borges, com olhar pensativo e um turbante colorido." class="rounded-lg w-full max-w-xs h-auto object-cover md:sticky top-28">
                    </div>
                    <div class="md:col-span-3 prose max-w-none lg:prose-lg">
                        <p class="text-2xl font-serif italic" style="color: var(--primary-color); margin-top: 1.5rem;">"Descendente de indígenas, quilombolas e colonizadores, cresci pelas periferias e favelas de Belo Horizonte e conheci várias partes do mundo caminhando entre o sentir-pensar-fazer das lutas sociais, os movimentos culturais e do universo acadêmico."</p>
                        <p class="mt-6">Sou neta, sou filha, sou mãe, sou companheira. Sou lésbica negra de Axé. Gosto de ouvir música, movimentar o corpo, escreviver e experimentar novos sabores. Construo minha clínica com boas inquietações diárias e fundamento meu trabalho na ancestralidade, nos feminismos e na psicanálise.</p>
                        <h4 class="text-xl font-bold mb-2 mt-6">Breve Currículo</h4>
                        <ul class="list-disc list-inside space-y-2 mt-6 inline-block text-left">
                            <li>Doutora em Psicologia pela UFMG</li>
                            <li>Mestre em Psicologia pela UFMG</li>
                            <li>Graduada em Psicologia pela PUC Minas</li>
                            <li>Moderadora de Processos Grupais e Mediadora Empresarial</li>
                            <li>Experiência clínica desde 2010.</li>
                            <li>Atuação em gestão pública, ONGs, movimentos sociais e empresas.</li>
                            <li>Contribuiu na criação da disciplina de Psicologia Social do Racismo na UFMG.</li>
                            <li>Desenvolve competências para Lideranças Negras e Mulheres Líderes.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    `,
    servicos: `
        <section id="servicos" class="page" style="background-color: var(--bg-soft);">
            <div class="container mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
                <h2 class="section-title text-3xl md:text-4xl font-bold text-center mb-4">Como Posso te Ajudar?</h2>
                <p class="section-subtitle text-lg text-center max-w-3xl mx-auto mb-12">Meu trabalho se desdobra em diferentes frentes, sempre com o objetivo de promover saúde mental, equidade e empoderamento. Conheça as principais áreas de atuação:</p>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="card flex flex-col overflow-hidden">
                        <img src=".././img/DraLarissaTablet.jpg" alt="Dra. Larissa Borges enquanto usa um tablet, representando a terapia online." class="w-full h-48 object-cover">
                        <div class="p-6 flex flex-col flex-grow prose">
                            <h4 class="!mt-0 text-xl font-bold mb-2">Psicoterapia e Análise</h4>
                            <p class="mb-6 flex-grow">Um espaço seguro e confidencial, online ou presencial, para sua jornada de autoconhecimento e transformação.</p>
                            <a href="https://api.whatsapp.com/send?phone=5531991349750&text=Ol%C3%A1%2C%20quero%20iniciar%20a%20psicoterapia%20on-line" target="_blank" class="btn-primary text-center mt-auto no-underline font-bold py-3 px-6 rounded-lg">Agende uma Sessão</a>
                        </div>
                    </div>
                    <div class="card flex flex-col overflow-hidden">
                        <img src=".././img/larissaPalestra.jpg" alt="Dra. Larissa Borges sorrindo, em pose de palestrante." class="w-full h-48 object-cover">
                        <div class="p-6 flex flex-col flex-grow prose">
                            <h4 class="!mt-0 text-xl font-bold mb-2">Palestras e Treinamentos</h4>
                            <p class="mb-6 flex-grow">Diálogos e ações sobre saúde mental, diversidade e liderança para transformar a realidade da sua organização.</p>
                            <a href="https://api.whatsapp.com/send?phone=5531991349750&text=Ol%C3%A1%2C%20Dra.%20Larissa!%20Gostaria%20de%20saber%20mais%20sobre%20palestras." target="_blank" class="btn-primary text-center mt-auto no-underline font-bold py-3 px-6 rounded-lg">Solicite uma Proposta</a>
                        </div>
                    </div>
                    <div class="card flex flex-col overflow-hidden">
                        <img src=".././img/DraLarissaEmpoderada.jpg" alt="Dra. Larissa com o punho erguido, simbolizando empoderamento e consultoria." class="w-full h-48 object-cover">
                        <div class="p-6 flex flex-col flex-grow prose">
                            <h4 class="!mt-0 text-xl font-bold mb-2">Consultoria para Organizações</h4>
                            <p class="mb-6 flex-grow">Planejamento e mediações com perspectiva feminista negra e afrocentrada para empresas, ONGs e poder público.</p>
                            <a href="https://api.whatsapp.com/send?phone=5531991349750&text=Ol%C3%A1%2C%20Dra.%20Larissa!%20Gostaria%20de%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20consultoria%20para%20organiza%C3%A7%C3%B5es." target="_blank" class="btn-primary text-center mt-auto no-underline font-bold py-3 px-6 rounded-lg">Saiba Mais</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    contato: `
        <section id="contato" class="page">
            <div class="container mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
                <h2 class="section-title text-3xl md:text-4xl font-bold text-center mb-4">Contato e Perguntas Frequentes</h2>
                <p class="section-subtitle text-lg text-center max-w-3xl mx-auto mb-12">Tem alguma dúvida ou quer iniciar um projeto? Fale comigo.</p>
                <div class="grid lg:grid-cols-3 gap-12">
                    <div class="lg:col-span-1 p-8 rounded-lg shadow-xl" style="background-color: var(--primary-color); color: var(--primary-text);">
                        <h3 class="text-3xl font-bold mb-6" style="color: var(--primary-text);">Vamos conversar?</h3>
                        <p class="mb-6">Estou à disposição para tirar suas dúvidas e encontrar a melhor forma de te apoiar.</p>
                        <a href="https://api.whatsapp.com/send?phone=5531991349750&text=Ol%C3%A1%2C%20quero%20iniciar%20a%20psicoterapia%20on-line" target="_blank" class="btn-inverted w-full text-center inline-block font-bold py-3 px-6 rounded-lg mb-8">Iniciar Conversa no WhatsApp</a>
                        <div class="border-t pt-6 text-center justify-center" style="border-color: rgba(255,255,255,0.3);">
                            <h4 class="font-semibold mb-4 text-xl" style="color: var(--primary-text);">Siga nas redes</h4>
                            <div class="flex items-center space-x-4 text-center justify-center">
                                <a href="https://api.whatsapp.com/send?phone=5531991349750&text=Ol%C3%A1%2C%20quero%20iniciar%20a%20psicoterapia%20on-line" target="_blank" title="WhatsApp" class="opacity-80 hover:opacity-100 transition-opacity">
                                    <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#ffffff]">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
                                    </span>
                                </a>    
                                <a href="https://www.instagram.com/larissaamorimborges/" title="Instagram" class="hover:opacity-75 transition-opacity">
                                    <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#ffffff]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                                    </span>
                                </a>
                                <a href="https://www.linkedin.com/in/larissa-amorim-borges-3a61873b/?originalSubdomain=br" title="LinkedIn" class="hover:opacity-75 transition-opacity">
                                    <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#fff]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /></svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-span-2 space-y-6 prose max-w-none">
                        <div class="card p-6"><h4 class="!mt-0 text-xl font-bold mb-2">Qual o valor da sua sessão e formas de pagamento?</h4><p>Trabalho com um valor de primeira sessão fixo em R$ 380,00. O pagamento é antecipado via Pix ou Transferência Bancária.</p></div>
                        <div class="card p-6"><h4 class="!mt-0 text-xl font-bold mb-2">Você atende plano de saúde?</h4><p>Ofereço exclusivamente atendimentos particulares. Emito recibo/nota fiscal para que você possa solicitar reembolso ao seu plano de saúde.</p></div>
                        <div class="card p-6"><h4 class="!mt-0 text-xl font-bold mb-2">Como funciona o atendimento on-line?</h4><p>Utilizo o Google Meet. Recomendo um ambiente tranquilo, privado e com boa conexão de internet.</p></div>
                    </div>
                </div>
            </div>
        </section>
        `
};

const footerHTML = `
    <footer style="background-color: var(--text-strong); color: var(--bg-color);">
        <div class="container mx-auto px-6 md:px-20 py-12">
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-y-8 gap-x-6 text-center md:text-left">
                
                <!-- Column 1: Info -->
                <div class="space-y-2">
                    <h3 class="text-lg font-bold mb-4">Dra. Larissa Borges</h3>
                    <p class="text-sm">Psicóloga | CRP: 04/33357</p>
                    <p class="text-sm mt-2">Atendimentos online e presencial em Belo Horizonte/MG.</p>
                    <div class="mt-4 space-y-2 text-sm">
                        <p><a href="mailto:amorimborgeslarissa@gmail.com" class="hover:opacity-100 transition-opacity">amorimborgeslarissa@gmail.com</a></p>
                        <p><a href="tel:+5531991349750" class="hover:opacity-100 transition-opacity">(31) 99134-9750</a></p>
                    </div>
                </div>
                
                <!-- Column 2: Site Map -->
                <div class="space-y-2">
                    <h3 class="text-lg font-bold mb-4">Mapa do Site</h3>
                    <ul class="space-y-2 text-sm">
                        <li><a href="#" class="nav-link inline-block" data-page="home">Início</a></li>
                        <li><a href="#" class="nav-link inline-block" data-page="sobre">Sobre Mim</a></li>
                        <li><a href="#" class="nav-link inline-block" data-page="servicos">Serviços</a></li>
                        <li><a href="#" class="nav-link inline-block" data-page="contato">Contato & FAQ</a></li>
                    </ul>
                </div>

                <!-- Column 3: Image (Desktop only) -->
                <div class="hidden lg:flex items-center justify-center">
                    <img src=".././img/larissaApontando.png" alt="Dra. Larissa Borges sorrindo e apontando, em pose de palestrante." class="rounded-lg w-4/5 h-auto object-cover mt-16">
                </div>
                
                <!-- Column 4: Social Media -->
                <div class="space-y-3">
                    <h3 class="text-lg font-bold mb-4">Redes Sociais</h3>
                    <p class="text-sm mb-3">Acompanhe de perto e faça parte da comunidade.</p>
                    <div class="flex items-center justify-center space-x-5">
                        <a href="https://api.whatsapp.com/send?phone=5531991349750&text=Ol%C3%A1%2C%20Dra.%20Larissa!%20Vi%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20psicoterapia." target="_blank" title="WhatsApp" class="social-icon social-whatsapp">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/larissaamorimborges/" title="Instagram" class="social-icon social-instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/larissa-amorim-borges-3a61873b/?originalSubdomain=br" title="LinkedIn" class="social-icon social-linkedin">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <!-- FIX: Increased max-width for better desktop appearance -->
            <div class="flex justify-center mt-12 mb-8">
                <a href="https://www.ubuntutech42.com.br" target="_blank">
                    <img src=".././img/DESENVOLVEDOR.png" alt="Logo do desenvolvedor Ubuntu Tech" class="w-full mx-auto">
                </a>
            </div>
            <div class="mt-12 border-t pt-6 text-center text-sm opacity-60" style="border-color: rgba(255,255,255,0.2);">
                <p>&copy; <span id="current-year"></span> Dra. Larissa Borges. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
`;

// =================================================================
// 2. APP INITIALIZATION
// =================================================================
document.addEventListener('DOMContentLoaded', function () {
    const app = document.getElementById('app');

    // --- Build the main structure ---
    function buildApp() {
        const mainContent = document.createElement('main');

        app.innerHTML += widgetsHTML;
        app.innerHTML += headerHTML;
        app.appendChild(mainContent);

        for (const pageKey in pagesHTML) {
            mainContent.innerHTML += pagesHTML[pageKey];
        }

        app.innerHTML += footerHTML;
    }

    // --- Initialize all functionalities ---
    function initializeScripts() {
        const htmlEl = document.documentElement;
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const allNavLinks = document.querySelectorAll('.nav-link');
        const pages = document.querySelectorAll('.page');

        const accessibilityWidget = document.getElementById('accessibility-widget');
        const accessibilityToggleButton = document.getElementById('accessibility-toggle-btn');
        const fontIncreaseBtn = document.getElementById('font-increase');
        const fontDecreaseBtn = document.getElementById('font-decrease');
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        const contrastToggle = document.getElementById('contrast-toggle');

        const quoteItems = document.querySelectorAll('.quote-rotator-item');
        let currentQuoteIndex = 0;

        function navigateTo(pageId) {
            pages.forEach(page => page.classList.remove('active'));
            const targetPage = document.getElementById(pageId);
            if (targetPage) targetPage.classList.add('active');

            allNavLinks.forEach(link => {
                link.classList.toggle('active', link.dataset.page === pageId);
            });

            if (mobileMenu) mobileMenu.classList.add('hidden');
            window.scrollTo(0, 0);
        }

        allNavLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                if (this.dataset.page) {
                    navigateTo(this.dataset.page);
                }
            });
        });

        if (mobileMenuButton) {
            mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
        }

        if (accessibilityToggleButton) {
            accessibilityToggleButton.addEventListener('click', () => {
                accessibilityWidget.classList.toggle('expanded');
            });
        }

        const FONT_STEP = 1;
        const MIN_FONT_SIZE = 12;
        const MAX_FONT_SIZE = 22;
        let currentFontSize = parseFloat(localStorage.getItem('fontSize')) || 16;

        function applyFontSize() {
            htmlEl.style.fontSize = currentFontSize + 'px';
        }

        if (fontIncreaseBtn) {
            fontIncreaseBtn.addEventListener('click', () => {
                if (currentFontSize < MAX_FONT_SIZE) {
                    currentFontSize += FONT_STEP;
                    applyFontSize();
                    localStorage.setItem('fontSize', currentFontSize);
                }
            });
        }

        if (fontDecreaseBtn) {
            fontDecreaseBtn.addEventListener('click', () => {
                if (currentFontSize > MIN_FONT_SIZE) {
                    currentFontSize -= FONT_STEP;
                    applyFontSize();
                    localStorage.setItem('fontSize', currentFontSize);
                }
            });
        }

        let currentTheme = localStorage.getItem('theme') || 'light';

        function applyTheme(theme) {
            htmlEl.classList.remove('dark', 'contrast');
            if (theme === 'dark' || theme === 'contrast') {
                htmlEl.classList.add(theme);
            }
            if (darkModeToggle) darkModeToggle.classList.toggle('active', theme === 'dark');
            if (contrastToggle) contrastToggle.classList.toggle('active', theme === 'contrast');
            localStorage.setItem('theme', theme);
            currentTheme = theme;
        }

        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', () => {
                applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
            });
        }

        if (contrastToggle) {
            contrastToggle.addEventListener('click', () => {
                applyTheme(currentTheme === 'contrast' ? 'light' : 'contrast');
            });
        }

        function rotateQuotes() {
            if (quoteItems.length === 0) return;
            const currentQuote = quoteItems[currentQuoteIndex];

            currentQuote.classList.remove('show');

            setTimeout(() => {
                currentQuote.classList.remove('active');
                currentQuoteIndex = (currentQuoteIndex + 1) % quoteItems.length;
                const nextQuote = quoteItems[currentQuoteIndex];
                nextQuote.classList.add('active');
                setTimeout(() => nextQuote.classList.add('show'), 50);
            }, 800);
        }

        if (quoteItems.length > 1) {
            setInterval(rotateQuotes, 8000);
        }

        applyFontSize();
        applyTheme(currentTheme);
        const yearEl = document.getElementById('current-year');
        if (yearEl) {
            yearEl.textContent = new Date().getFullYear();
        }
    }

    buildApp();
    initializeScripts();
});
