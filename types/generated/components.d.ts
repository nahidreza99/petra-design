import type { Schema, Struct } from '@strapi/strapi';

export interface AboutCreativity extends Struct.ComponentSchema {
  collectionName: 'components_about_creativities';
  info: {
    description: '';
    displayName: 'creativity';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'At Petra Design, our journey began with a simple yet profound vision: to transform architectural spaces through exceptional design and unparalleled craftsmanship.'>;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Creativity'>;
  };
}

export interface AboutHero extends Struct.ComponentSchema {
  collectionName: 'components_about_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    headline: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'At Petra Design, our journey began with a simple yet profound vision: to transform architectural spaces through exceptional design and unparalleled craftsmanship.'>;
  };
}

export interface AboutLegacy extends Struct.ComponentSchema {
  collectionName: 'components_about_legacies';
  info: {
    description: '';
    displayName: 'legacy';
  };
  attributes: {
    media: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    richtext: Schema.Attribute.Blocks;
  };
}

export interface AboutPassion extends Struct.ComponentSchema {
  collectionName: 'components_about_passions';
  info: {
    displayName: 'passion';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'At Petra Design, our journey began with a simple yet profound vision: to transform architectural spaces through exceptional design and unparalleled craftsmanship.'>;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Passion'>;
  };
}

export interface AboutPrecision extends Struct.ComponentSchema {
  collectionName: 'components_about_precisions';
  info: {
    displayName: 'precision';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'At Petra Design, our journey began with a simple yet profound vision: to transform architectural spaces through exceptional design and unparalleled craftsmanship.'>;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Precision'>;
  };
}

export interface FooterLinkGroup extends Struct.ComponentSchema {
  collectionName: 'components_footer_link_groups';
  info: {
    displayName: 'Link Group';
  };
  attributes: {
    group: Schema.Attribute.String;
    links: Schema.Attribute.Component<'reusable.link', true>;
  };
}

export interface FooterOrganization extends Struct.ComponentSchema {
  collectionName: 'components_footer_organizations';
  info: {
    description: '';
    displayName: 'organization';
  };
  attributes: {
    address_line_1: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'47 St Regis Crescent, Toronto, '>;
    address_line_2: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'ON M3J 1Y6'>;
    logo: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface ReusableDualToneText extends Struct.ComponentSchema {
  collectionName: 'components_reusable_dual_tone_texts';
  info: {
    displayName: 'dualToneText';
  };
  attributes: {
    highlightedText: Schema.Attribute.Text;
    remainingText: Schema.Attribute.Text;
  };
}

export interface ReusableLink extends Struct.ComponentSchema {
  collectionName: 'components_reusable_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.creativity': AboutCreativity;
      'about.hero': AboutHero;
      'about.legacy': AboutLegacy;
      'about.passion': AboutPassion;
      'about.precision': AboutPrecision;
      'footer.link-group': FooterLinkGroup;
      'footer.organization': FooterOrganization;
      'reusable.dual-tone-text': ReusableDualToneText;
      'reusable.link': ReusableLink;
    }
  }
}
