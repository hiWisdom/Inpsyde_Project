/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

import { registerBlockType } from '@wordpress/blocks';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('create-block/cpo-block', {
	
	
	//inbuilt attributes start
    title: 'Company Staff Overviews',
    
    icon: 'id-alt',
    
    category: 'widgets',
    
    description: "this custom widget add company-executives-overview showing their picture, position, description and social links ",
    //inbuilt attributes end
	
	
	
	
	attributes: {
  
    
		  name:{
			type:"string",
		  },

			position:{
				type:"string",
			},

			description:{
				type:"string",
			},

			fontColor: {
			  type: "string",
			  default: "black"
			},

			borderChange: {
				type: "string",
				default: "black"
			},

			// fontSizes: {
				
			// 	Small:{
			// 		name: __( 'Small' ),
			// 		slug: 'small',
			// 		size: 12,
			// 	},
				
			// 	Big: {
			// 		name: __( 'Big' ),
			// 		slug: 'big',
			// 		size: 26,
			// 	}
				
			// },

			backgroundImage: {
			  type: "string",
			  default: null
			},

			alignment: {
				type: 'string',
				default: 'none'
			},

			click: {
			  type: "string",
			  default: null
			},

			githublink: {
				type: "string",

			},
			
			linkedinlink: {
				type: "string",
	
			},
			
			xinglink: {
				type: "string",
		
			},
			
			facebooklink: {
				type: "string",
	
			},

			removeText: {
				type: "string",
			}

  },


//   state : {
// 	isVisibile:false,
// 	value: '',
// 	// facebookvalue: '',
// 	// linkedinvalue: '',
// 	// xingvalue: '',
// },




	/**
	 * @see ./edit.js
	 */
	edit,
	/**
	 * @see ./save.js
	 */
	save,
});
