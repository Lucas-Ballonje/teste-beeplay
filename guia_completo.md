# Guia Completo do Site BeePlayTV

Olá! Este guia foi criado especialmente para você que não tem experiência com sites e deseja publicar e manter o site da BeePlayTV. Vamos explicar tudo passo a passo, desde o básico até os detalhes mais técnicos, de forma simples e clara.

## Índice

1. [Entendendo os Arquivos do Site](#1-entendendo-os-arquivos-do-site)
2. [Como Visualizar o Site Localmente](#2-como-visualizar-o-site-localmente)
3. [Escolhendo uma Hospedagem](#3-escolhendo-uma-hospedagem)
4. [Registrando um Domínio](#4-registrando-um-domínio)
5. [Publicando o Site](#5-publicando-o-site)
6. [Personalizando o Conteúdo](#6-personalizando-o-conteúdo)
7. [Atualizando Informações](#7-atualizando-informações)
8. [Manutenção e Suporte](#8-manutenção-e-suporte)
9. [Perguntas Frequentes](#9-perguntas-frequentes)

## 1. Entendendo os Arquivos do Site

Seu site BeePlayTV é composto por três arquivos principais:

- **index.html**: Este é o arquivo principal que contém toda a estrutura e conteúdo do site.
- **styles.css**: Este arquivo contém todos os estilos visuais (cores, tamanhos, fontes, etc.).
- **script.js**: Este arquivo contém todas as funcionalidades interativas (contadores, animações, etc.).
- **logo.png**: A imagem do logo da BeePlayTV.

Estes arquivos trabalham juntos para criar o site completo. Você não precisa entender o código dentro deles para publicar o site, mas é importante saber que todos são necessários.

## 2. Como Visualizar o Site Localmente

Antes de publicar o site, você pode visualizá-lo no seu próprio computador. Isso é útil para verificar se tudo está funcionando corretamente.

### Passos para visualizar o site localmente:

1. **Crie uma pasta** no seu computador chamada "BeePlayTV".
2. **Coloque todos os arquivos** (index.html, styles.css, script.js e logo.png) dentro desta pasta.
3. **Clique duas vezes** no arquivo "index.html".
4. O site abrirá no seu navegador padrão (Chrome, Firefox, Edge, etc.).

Pronto! Agora você pode navegar pelo site como se estivesse online.

## 3. Escolhendo uma Hospedagem

Para que outras pessoas possam acessar seu site, você precisa de uma hospedagem. A hospedagem é como um "aluguel" de espaço em servidores conectados à internet.

### Opções recomendadas para iniciantes:

1. **Hostinger**: Fácil de usar, bom suporte em português e preços acessíveis.
   - Site: [www.hostinger.com.br](https://www.hostinger.com.br)
   - Plano básico a partir de R$ 12,99/mês

2. **Hostgator**: Muito popular no Brasil, interface amigável.
   - Site: [www.hostgator.com.br](https://www.hostgator.com.br)
   - Plano básico a partir de R$ 9,95/mês

3. **Locaweb**: Empresa brasileira com bom suporte técnico.
   - Site: [www.locaweb.com.br](https://www.locaweb.com.br)
   - Plano básico a partir de R$ 19,90/mês

### O que procurar em uma hospedagem:

- **Espaço em disco**: 1GB é mais que suficiente para este site.
- **Tráfego mensal**: Pelo menos 10GB para começar.
- **Suporte a PHP**: Mesmo que não esteja usando agora, pode ser útil no futuro.
- **Certificado SSL gratuito**: Para que seu site seja seguro (https://).
- **Painel de controle cPanel**: Facilita muito a administração.

## 4. Registrando um Domínio

O domínio é o endereço do seu site na internet (exemplo: www.beeplaytv.com.br).

### Como registrar um domínio:

1. **Escolha um registrador**: Registro.br (para domínios .br) ou o próprio serviço de hospedagem.
2. **Verifique disponibilidade**: Digite o nome desejado e veja se está disponível.
3. **Escolha a extensão**: .com, .com.br, .tv, etc.
4. **Complete o registro**: Pague e forneça seus dados de contato.

### Dicas para escolher um bom domínio:

- **Mantenha curto e simples**: Mais fácil de lembrar.
- **Evite hífens e números**: Podem confundir os usuários.
- **Considere a extensão .tv**: Ideal para serviços de streaming como o seu.
- **Verifique se está disponível nas redes sociais**: Para manter consistência na sua marca.

## 5. Publicando o Site

Agora que você tem hospedagem e domínio, vamos publicar o site!

### Método 1: Usando o Painel de Controle (cPanel)

1. **Acesse o cPanel** da sua hospedagem usando os dados fornecidos após a contratação.
2. **Procure por "Gerenciador de Arquivos"** ou "File Manager".
3. **Navegue até a pasta "public_html"** ou "www".
4. **Clique em "Upload"** e selecione todos os arquivos do site.
5. **Aguarde o upload** completar.

### Método 2: Usando FTP (mais técnico, mas mais confiável)

1. **Baixe um cliente FTP** como o FileZilla (gratuito): [filezilla-project.org](https://filezilla-project.org/)
2. **Instale e abra o FileZilla**.
3. **Insira os dados de FTP** fornecidos pela hospedagem:
   - Host: geralmente ftp.seudominio.com.br
   - Nome de usuário: fornecido pela hospedagem
   - Senha: fornecida pela hospedagem
   - Porta: geralmente 21
4. **Clique em "Conexão Rápida"**.
5. **No painel direito**, navegue até a pasta "public_html" ou "www".
6. **No painel esquerdo**, navegue até a pasta onde estão os arquivos do site no seu computador.
7. **Selecione todos os arquivos** no painel esquerdo e arraste para o painel direito.
8. **Aguarde o upload** completar.

### Verificando se o site está online:

1. Abra seu navegador.
2. Digite seu domínio (exemplo: www.beeplaytv.com.br).
3. Se tudo estiver correto, seu site aparecerá!

## 6. Personalizando o Conteúdo

Você pode querer personalizar alguns elementos do site para atender às suas necessidades específicas.

### Alterando informações básicas:

#### Para alterar textos:

1. Abra o arquivo **index.html** em um editor de texto simples como o Bloco de Notas (Windows) ou TextEdit (Mac).
2. Procure pelo texto que deseja alterar.
3. Faça as alterações desejadas.
4. Salve o arquivo.
5. Faça upload do arquivo atualizado para a hospedagem.

#### Para alterar imagens:

1. Prepare a nova imagem com o mesmo nome da original (exemplo: logo.png).
2. Faça upload da nova imagem para a hospedagem, substituindo a anterior.

### Elementos que você pode querer personalizar:

- **Informações de contato**: WhatsApp, e-mail, etc.
- **Preços dos planos**: Se houver alterações nos valores.
- **Depoimentos**: Para adicionar depoimentos reais de clientes.
- **Perguntas frequentes**: Para adicionar novas perguntas comuns.

## 7. Atualizando Informações

É importante manter seu site atualizado com as informações mais recentes.

### Atualizações regulares recomendadas:

- **Preços**: Sempre que houver mudanças nos planos.
- **Promoções**: Adicionar ou remover ofertas especiais.
- **Depoimentos**: Adicionar novos depoimentos de clientes satisfeitos.
- **Informações de contato**: Se mudar número de telefone ou e-mail.

### Como fazer atualizações:

1. **Faça as alterações** nos arquivos locais primeiro.
2. **Teste localmente** abrindo o index.html no seu navegador.
3. **Faça backup** dos arquivos atuais na hospedagem (baixe uma cópia).
4. **Faça upload** dos novos arquivos para a hospedagem.
5. **Verifique** se as alterações apareceram corretamente no site online.

## 8. Manutenção e Suporte

Manter um site funcionando bem requer alguns cuidados periódicos.

### Tarefas de manutenção recomendadas:

- **Verificar links**: Mensalmente, clique em todos os links para garantir que funcionam.
- **Testar formulários**: Envie um teste para verificar se os formulários estão funcionando.
- **Verificar em dispositivos diferentes**: Teste o site em celulares, tablets e computadores.
- **Verificar velocidade**: Use [Google PageSpeed Insights](https://pagespeed.web.dev/) para verificar a performance.

### Obtendo suporte:

Se encontrar problemas técnicos que não consegue resolver:

1. **Suporte da hospedagem**: A maioria das hospedagens oferece suporte técnico gratuito.
2. **Fóruns online**: Sites como [Stack Overflow](https://stackoverflow.com/) ou [Fórum Hostinger](https://www.hostinger.com.br/forum/).
3. **Contratar um desenvolvedor**: Para problemas mais complexos, considere contratar um profissional por algumas horas.

## 9. Perguntas Frequentes

### O site não aparece depois de publicado. O que fazer?
Verifique se os arquivos foram enviados para a pasta correta (geralmente public_html). Também confirme se o domínio está apontando para a hospedagem corretamente (pode levar até 24 horas para propagar).

### Como adicionar um vídeo real no lugar do placeholder?
1. Faça upload do vídeo para o YouTube.
2. No YouTube, clique em "Compartilhar" e depois em "Incorporar".
3. Copie o código fornecido.
4. No arquivo index.html, procure pela seção "video-placeholder" e substitua pelo código copiado.

### Como alterar as cores do site?
As cores estão definidas no início do arquivo styles.css. Procure por ":root" e você encontrará todas as cores definidas como variáveis (--primary-color, --secondary-color, etc.). Altere os códigos de cor conforme desejado.

### Os formulários estão enviando as informações para onde?
Atualmente, os formulários são apenas demonstrativos. Para que funcionem de verdade, você precisará de um serviço de processamento de formulários ou conhecimentos em PHP. Consulte o suporte da sua hospedagem para orientações específicas.

### Como adicionar Google Analytics para acompanhar visitantes?
1. Crie uma conta no [Google Analytics](https://analytics.google.com/).
2. Siga as instruções para obter o código de acompanhamento.
3. Adicione o código fornecido pelo Google no arquivo index.html, logo antes do fechamento da tag `</head>`.

---

## Conclusão

Parabéns! Agora você tem todas as informações necessárias para publicar e manter o site da BeePlayTV. Lembre-se de que a prática leva à perfeição, então não tenha medo de experimentar e aprender com o processo.

Se precisar de ajuda adicional, não hesite em buscar suporte nos recursos mencionados na seção 8.

Boa sorte com seu novo site!
