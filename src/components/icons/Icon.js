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
  Bitbucket,
  Docker,
  Git,
  GraphQl,
  Gulp,
  Jest,
  Laravel,
  MaterialUi,
  MongoDb,
  MySql,
  Php,
  ReactIcon,
  Redis,
  Redux,
  Sass,
  SqlServer,
  Tailwind,
  TypeScript,
  Ubuntu,
  VsCode,
  Webpack,
  NodeJs,
} from '@components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'Bitbucket':
      return <Bitbucket />;
    case 'Docker':
      return <Docker />;
    case 'Git':
      return <Git />;
    case 'GraphQL':
    case 'GraphQl':
      return <GraphQl />;
    case 'Gulp':
      return <Gulp />;
    case 'JavaScript':
      return <JavaScript />;
    case 'Jest':
      return <Jest />;
    case 'Laravel':
      return <Laravel />;
    case 'MaterialUI':
    case 'MaterialUi':
      return <MaterialUi />;
    case 'MongoDB':
    case 'MongoDb':
      return <MongoDb />;
    case 'MySql':
      return <MySql />;
    case 'NodeJS':
    case 'NodeJs':
      return <NodeJs />;
    case 'Php':
      return <Php />;
    case 'React':
      return <ReactIcon />;
    case 'Redis':
      return <Redis />;
    case 'Redux':
      return <Redux />;
    case 'Sass':
      return <Sass />;
    case 'SQLServer':
    case 'SqlServer':
      return <SqlServer />;
    case 'Tailwind':
      return <Tailwind />;
    case 'TypeScript':
      return <TypeScript />;
    case 'Ubuntu':
      return <Ubuntu />;
    case 'VsCode':
      return <VsCode />;
    case 'Webpack':
      return <Webpack />;

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
