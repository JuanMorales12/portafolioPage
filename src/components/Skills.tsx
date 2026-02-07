import Skill from './Skill'
import htmlSticker from '@assets/image/html.png'
import cssSticker from '@assets/image/css-logo.png'
import jsSticker from '@assets/image/javascript-logo-svg-vector.svg'
import tsSticker from '@assets/image/typescript-programming-language.svg'
import reactSticker from '@assets/image/react-logo22.png'
import nextSticker from '@assets/image/next-js.svg'
import reduxSticker from '@assets/image/redux.svg'
import nodeSticker from '@assets/image/nodejs-icon-logo-svg-vector.svg'
import expressSticker from '@assets/image/express.png'
import nestSticker from '@assets/image/nestjs.svg'
import mongoSticker from '@assets/image/mongo.png'
import psqlSticker from '@assets/image/postgresql-icon.svg'
import sequelizeSticker from '@assets/image/sequelizejs-icon.svg'
import gitSticker from '@assets/image/git-logo2.png'
import figmaSticker from '@assets/image/figma-1-logo-svg-vector.svg'
import bootstrapSticker from '@assets/image/bootstrap-5-1.svg'
import sassSticker from '@assets/image/sass-1.svg'
import materialSticker from '@assets/image/material-ui-1.svg'
import vueSticker from '@assets/image/vue-js-1.svg'
import graphqlSticker from '@assets/image/graphql.svg'

const Skills = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6">
          <Skill skill="HTML" src={htmlSticker} title="HTML" alt="HTML logo" />
          <Skill skill="CSS" src={cssSticker} title="CSS" alt="CSS logo" />
          <Skill skill="JavaScript" src={jsSticker} title="JavaScript" alt="JavaScript logo" />
          <Skill skill="TypeScript" src={tsSticker} title="TypeScript" alt="TypeScript logo" />
          <Skill skill="React" src={reactSticker} title="React JS - React Native" alt="React logo" />
          <Skill skill="Next.js" src={nextSticker} title="Next JS" alt="Next.js logo" />
          <Skill skill="Redux" src={reduxSticker} title="Redux" alt="Redux logo" />
          <Skill skill="Vue" src={vueSticker} title="Vue JS" alt="Vue logo" />
          <Skill skill="Node.js" src={nodeSticker} title="Node JS" alt="Node.js logo" />
          <Skill skill="Express" src={expressSticker} title="Express JS" alt="Express logo" />
          <Skill skill="Nest.js" src={nestSticker} title="Nest JS" alt="Nest.js logo" />
          <Skill skill="MongoDB" src={mongoSticker} title="MongoDB" alt="MongoDB logo" />
          <Skill skill="PostgreSQL" src={psqlSticker} title="PostgreSQL" alt="PostgreSQL logo" />
          <Skill skill="Sequelize" src={sequelizeSticker} title="Sequelize" alt="Sequelize logo" />
          <Skill skill="GraphQL" src={graphqlSticker} title="GraphQL" alt="GraphQL logo" />
          <Skill skill="Bootstrap" src={bootstrapSticker} title="Bootstrap" alt="Bootstrap logo" />
          <Skill skill="Sass" src={sassSticker} title="Sass" alt="Sass logo" />
          <Skill skill="Material UI" src={materialSticker} title="Material-UI" alt="Material UI logo" />
          <Skill skill="Git" src={gitSticker} title="Git" alt="Git logo" />
          <Skill skill="Figma" src={figmaSticker} title="Figma" alt="Figma logo" />
      </div>
    </div>
  )
}

export default Skills
