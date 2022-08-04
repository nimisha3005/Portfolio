// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import testimonials from './testimonials'
import abouts from './abouts'
import brands from './brands'
import contact from './contact'
import experiences from './experiences'
import skills from './skills'
import works from './works'
import workExperience from './workExperience'
import publications from './publications'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    testimonials,abouts,brands,contact,experiences,skills,workExperience,works,publications
  ]),
})
