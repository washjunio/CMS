export default ({ env }) => ({
  seo: {
    enabled: true,
  },

  documentation: {
    enabled: false,
  },

  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: env('SENDGRID_EMAIL'),
        defaultReplyTo: env('SENDGRID_EMAIL'),
      },
    },
  },

  upload: {
    config: {
      provider: "strapi-provider-upload-azure-storage",
      providerOptions: {
        account: env("STORAGE_ACCOUNT"),
        accountKey: env("STORAGE_ACCOUNT_KEY"),
        defaultPath: "/",
        containerName: env("STORAGE_CONTAINER_NAME"),
      },
    },
  },

  transformer: {
    enabled: true,
    config: {
      responseTransforms: {
        removeDataKey: true,
        removeAttributesKey: true,
      },
      requestTransforms : {
        wrapBodyWithDataKey: true
      },
    },
  },

  'duplicate-button': true,
  
  ckeditor5: {
    enabled: true,
    resolve: './src/plugins/ckeditor', // O caminho para o plugin
  },
})
