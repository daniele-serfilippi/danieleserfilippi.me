import React from 'react';
import PropTypes from 'prop-types';
import {
  External,
  Facebook,
  Fork,
  GitHub,
  Instagram,
  Linkedin,
  Star,
  Twitter,
  JavaScript,
} from '@components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'JavaScript':
      return <JavaScript />;

    case 'Facebook':
      return <Facebook />;
    case 'Instagram':
      return <Instagram />;
    case 'Linkedin':
      return <Linkedin />;
    case 'Twitter':
      return <Twitter />;

    case 'Fork':
      return <Fork />;
    case 'GitHub':
      return <GitHub />;
    case 'Star':
      return <Star />;

    case 'External':
      return <External />;

    default:
      return <External />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export { Icon };
