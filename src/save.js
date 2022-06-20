/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import {InnerBlocks} from '@wordpress/block-editor';
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */

 
/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

 



 
export default function save({ attributes}) {
	 
	 const {fontColor, alignment, borderChange,  backgroundImage, githublink, linkedinlink, xinglink, facebooklink } = attributes;
	 


   return (


	
      // Save content Body Begins 
              


              <div className="john_doe_quarter">


           {/** THIS IS AN ALTERNATE CUSTOM IMAGE I AM MODIFYING*/}

              {/* <div className="john_doe_circle john_doe_hover_opacity" title="Insert staff image here via the custom block setting" style={ {backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'} }> 
              </div> */}


          {/** THIS IS AN ALTERNATE WORDPRESS BUILTIN INNER BLOCK I AM MODIFYING*/}
                <div>
                <InnerBlocks.Content />
                </div>



                {/*table created*/}
                <table>

                  {/*name row*/}
                    <tr>
                      <td title={"Staff Name"} style={ {color: fontColor,  textAlign: alignment} }>{attributes.name}</td>
                    </tr>


                  {/*position row*/}
                    <tr>
                      <td title={"Staff Position"} style={ {color: fontColor,  textAlign: alignment} }>{attributes.position}</td>
                    </tr>
              
 
                  {/*description row*/}
                    <tr>                     
                      <td title={"Staff Description"} style={ {color: fontColor,  textAlign: alignment} }>{attributes.description}</td>
                    </tr>



                  {/*Social links row*/} 
                    <tr>
                       
                        <td>


                        <a href={githublink} className="john_doe_button john_doe_large john_doe_teal" title="Github"><svg width="24" height="24" viewBox="0 0 24 24" version="1.1"><path fill="currentColor" d="M12,2C6.477,2,2,6.477,2,12c0,4.419,2.865,8.166,6.839,9.489c0.5,0.09,0.682-0.218,0.682-0.484 c0-0.236-0.009-0.866-0.014-1.699c-2.782,0.602-3.369-1.34-3.369-1.34c-0.455-1.157-1.11-1.465-1.11-1.465 c-0.909-0.62,0.069-0.608,0.069-0.608c1.004,0.071,1.532,1.03,1.532,1.03c0.891,1.529,2.341,1.089,2.91,0.833 c0.091-0.647,0.349-1.086,0.635-1.337c-2.22-0.251-4.555-1.111-4.555-4.943c0-1.091,0.39-1.984,1.03-2.682 C6.546,8.54,6.202,7.524,6.746,6.148c0,0,0.84-0.269,2.75,1.025C10.295,6.95,11.15,6.84,12,6.836 c0.85,0.004,1.705,0.114,2.504,0.336c1.909-1.294,2.748-1.025,2.748-1.025c0.546,1.376,0.202,2.394,0.1,2.646 c0.64,0.699,1.026,1.591,1.026,2.682c0,3.841-2.337,4.687-4.565,4.935c0.359,0.307,0.679,0.917,0.679,1.852 c0,1.335-0.012,2.415-0.012,2.741c0,0.269,0.18,0.579,0.688,0.481C19.138,20.161,22,16.416,22,12C22,6.477,17.523,2,12,2z"></path></svg></a>



                        <a href={linkedinlink} className="john_doe_button john_doe_large john_doe_teal" title="Linkedin"><svg width="24" height="24" viewBox="0 0 24 24" version="1.1"><path fill="currentColor" d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"></path></svg></a>


                        <a href={xinglink} className="john_doe_button john_doe_large john_doe_teal" title="Xing"><svg width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="currentColor" d="M313.8 303.9L469 32H365L209.4 303.8a1.35 1.35 0 0 0 0 1.7l98.9 173.8c.4.7.8.7 1.6.7H413l-99.3-174.7a1.74 1.74 0 0 1 .1-1.4Zm-91.9-87.7L163 113a2 2 0 0 0-2-1H65l58.9 104.4a1.13 1.13 0 0 1 .1.8L43 352h96.8a1.54 1.54 0 0 0 1.6-.9l80.5-133.7a2.44 2.44 0 0 0 0-1.2Z"/></svg> </a>


                        <a href={facebooklink} className="john_doe_button john_doe_large john_doe_teal" title="Facebook"><svg width="24" height="24" viewBox="0 0 24 24" version="1.1"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"></path></svg></a>


                        </td>
            
                    </tr>
      

                 </table>
                  {/*table created end*/}


          </div>





                    );

  
 }
 

  // Save content Body Ends 
