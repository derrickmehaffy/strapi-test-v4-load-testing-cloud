import type { Schema, Attribute } from '@strapi/strapi';

export interface TestDz extends Schema.Component {
  collectionName: 'components_test_dzs';
  info: {
    displayName: 'dz';
    icon: 'alien';
  };
  attributes: {
    string: Attribute.String;
  };
}

export interface TestCompo extends Schema.Component {
  collectionName: 'components_test_compos';
  info: {
    displayName: 'compo';
    icon: 'alien';
  };
  attributes: {
    string: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'test.dz': TestDz;
      'test.compo': TestCompo;
    }
  }
}
