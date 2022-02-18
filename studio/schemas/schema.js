// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import { type } from 'os'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
      name: 'users',
      title: 'Users',
      type: 'document',
      fields: [
        {
          name: 'username',
          title: 'User Name',
          type: 'strings',
        },
        {
          name: 'walletAddress',
          title: 'Wallet Address',
          type: 'string',
        },
        {
          name: 'profileImage',
          title: 'Profile Image',
          type: 'image',
        },
        {
          name: 'bannerImage',
          title: 'Banner Image',
          type: 'image',
        },
        {
          name: 'twitterHandle',
          title: 'Twitter Handle',
          type: 'strings',
        },
        {
          name: 'igHandle',
          title: 'Instagram Handle',
          type: 'strings',
        },
      ],
    },

    {
      name: 'marketItems',
      title: 'Market Items',
      type: 'document',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'contactAddress',
          title: 'Contact Address',
          type: 'string',
        },
        {
          name: 'discription',
          title: 'Discription',
          type: 'string',
        },
        {
          name: 'createdAt',
          title: 'Created At',
          type: 'reference',
          to: [{ type: 'users' }],
        },
        {
          name: 'volumeTraded',
          title: 'Volume Traded',
          type: 'number',
        },
        {
          name: 'floorPrice',
          title: 'Floor Price',
          type: 'number',
        },
        {
          name: 'owners',
          title: 'Owners',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'user' }] }],
        },
        {
          name: 'profileImage',
          title: 'Profile Image',
          type: 'image',
        },
        {
          name: 'bannerImage',
          title: 'Banner Image',
          type: 'image',
        },
      ],
    },
  ]),
})
