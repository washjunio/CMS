import type { Schema, Attribute } from '@strapi/strapi';

export interface FeaturesBlocks extends Schema.Component {
  collectionName: 'components_features_blocks';
  info: {
    displayName: 'blocks';
    icon: 'cube';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    fields: Attribute.Text;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'features.blocks': FeaturesBlocks;
      'shared.seo': SharedSeo;
    }
  }
}
