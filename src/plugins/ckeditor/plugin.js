// src/plugins/ckeditor/plugin.js
module.exports = {
    // Adicione os plugins e configurações personalizados aqui
    editor: {
      config: {
        plugins: [
          // Adicione os plugins necessários
          'PageBreak',
        ],
        toolbar: [
          // Adicione as ferramentas necessárias
          'pageBreak',
          // Outras ferramentas
        ],
        // Outras configurações personalizadas
      },
    },
  };
  