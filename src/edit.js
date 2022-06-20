/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */



import {InspectorControls, ColorPalette, BlockControls, AlignmentToolbar, MediaUpload, URLPopover, InnerBlocks} from '@wordpress/block-editor';
import {PanelBody, Button, __experimentalBorderControl as BorderControl, FontSizePicker  } from '@wordpress/components';

const IMG_BLOCK = [
  ["core/image", {width: "100%", height: "100%", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", align: "none",  title: "Staff Image", href: "none"}]
]; 




/**
 * Gutenberg Block Editor allows developer to develop value APIs.
 * Place custom block components below created with HTML, CSS, JSX, JavaScript & React JS.
 *
 
 */


 

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



import './editor.scss';



/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */



export default function edit({ attributes, setAttributes}) {
	
	
  
    //define attributes storage in edit.js 

    const {fontColor, alignment, fontSizes, borderChange, backgroundImage, isVisiblelinkedin, isVisiblegithub, isVisibleXing, isVisibleFacebook,  githublink, linkedinlink, xinglink, facebooklink } = attributes;
    
    
   

    

      //fontsize change function
      function newFontSize(event){
        setAttributes({fontSizes: event});
      }

      //border change function
      function onChangeBorder(event){
        setAttributes({borderChange: event});
      }

      //color change function
      function onNameColorChange(event){
        setAttributes({fontColor: event});
      }

      //Company Staff Overview Image change function
      function onSelectImage(event){
        setAttributes({backgroundImage: event.sizes.full.url});
      }


      //staff name change function      
      function updateName(event){
        setAttributes({name: event.target.value});
      }

      //staff position change function
      function updatePosition(event){
        setAttributes({position: event.target.value});
      }

      //staff description change function
      function updateDescription(event){
        setAttributes({description: event.target.value});
      }

      //staff alignment change function
      function changeAlignment(event) {
        setAttributes({alignment: event === undefined ? 'none' : event})
      }

     
      //clickHandler function(testing functionality)
	    function clickHandler() {
        const print =  21 + 11;
        console.log(print);        
      }
     

      //Company Staff Github Social Media Link change function
         function onChangeGithubLinkURL(event) {
           setAttributes({githublink: event.target.value});
         }
  
         function submitGithubLinkURL(event) {
          if (githublink == '') {
              alert('Kindly input a Link');
              return event.preventDefault();
          }
          else {
            alert('Link Saved Successfully: ' + githublink);
            setAttributes( {isVisiblegithub: false} );
              event.preventDefault();
          }
         }

         function openGithubLinkPopoverURL() {
          setAttributes( {isVisiblegithub: true  } );
         }

        function closeGithubLinkPopoverURL() {
          if(URLPopover === {isVisiblegithub:true}){
            setAttributes( {isVisiblegithub: false} );
          } 
          else {
            setAttributes( {isVisiblegithub: false} );
          }
        }



      //Company Staff Linkedin Social Media Link change function
        function onChangeLinkedInLinkURL(event) {
          setAttributes({linkedinlink: event.target.value});
        }
 
        function submitLinkedInLinkURL(event) {
         if (linkedinlink == '') {
             alert('Kindly input a Link');
             return event.preventDefault();
         }
         else {
           alert('Link Saved Successfully: ' + linkedinlink);
           setAttributes( {isVisiblelinkedin: false} );
             event.preventDefault();
         }
        }
 
        function openLinkedInLinkPopoverURL() {
         setAttributes( {isVisiblelinkedin : true} );
        }

       function closeLinkedInLinkPopoverURL() {
         if(URLPopover === {isVisiblelinkedin:true}){
           setAttributes( {isVisiblelinkedin: false} );
         } 
         else {
           setAttributes( {isVisiblelinkedin: false} );
         }
       }
      


      //Company Staff Xing Social Media Link change function
       function onChangeXingLinkURL(event) {
        setAttributes({xinglink: event.target.value});
      }

      function submitXingLinkURL(event) {
       if (xinglink == '') {
           alert('Kindly input a Link');
           return event.preventDefault();
       }
       else {
         alert('Link Saved Successfully: ' + xinglink);
         setAttributes( {isVisibleXing: false} );
           event.preventDefault();
       }
      }

      function openXingLinkPopoverURL() {
       setAttributes( {isVisibleXing : true} );
      }

     function closeXingLinkPopoverURL() {
       if(URLPopover === {isVisibleXing:true}){
         setAttributes( {isVisibleXing: false} );
       } 
       else {
         setAttributes( {isVisibleXing: false} );
       }
     }
    


    //Company Staff Facebook Social Media Link change function
     function onChangeFacebookLinkURL(event) {
      setAttributes({facebooklink: event.target.value});
    }

    function submitFacebookLinkURL(event) {
     if (facebooklink == '') {
         alert('Kindly input a Link');
         return event.preventDefault();
     }
     else {
       alert('Link Saved Successfully: ' + facebooklink);
       setAttributes( {isVisibleFacebook: false} );
         event.preventDefault();
     }
    }

    function openFacebookLinkPopoverURL() {
     setAttributes( {isVisibleFacebook : true} );
    }

   function closeFacebookLinkPopoverURL() {
     if(URLPopover === {isVisibleFacebook:true}){
       setAttributes( {isVisibleFacebook: false} );
     } 
     else {
       setAttributes( {isVisibleFacebook: false} );
     }
   }


	return ([
	
	
          //inspector control section begins
	        <InspectorControls style={{marginBottom: '40px'}}>
          

              {/* ColorPalette */}
              <PanelBody title={'Font Color Settings'}>
              
                <p><strong>Select A Color</strong></p>
                <ColorPalette value={fontColor} onChange={onNameColorChange} />
                
              </PanelBody>


             {/* Media Upload */}
              {/* <PanelBody title={'Upload Image To Block'}>
             
              <p><strong>Upload an Image</strong></p>
              <MediaUpload onSelect={onSelectImage} type="image" value={backgroundImage} render={ ({open}) => { 
              return ( <Button onClick={open} icon="upload" className="editor-media-placeholder__button is-button is-default is-large"> 
              Select Staff Image 
              </Button> )
              } 
              }
              />
              
              </PanelBody> 

   */}
              <PanelBody title={'Border Settings'}> {/**Panel for border settings */}
                  <BorderControl
                      // colors={ colors }
                      label={ __( 'Border' ) }
                      onChange={ onChangeBorder }
                      value={ borderChange }
                  />
              </PanelBody>



              <PanelBody title={'Font size Settings'}> {/**Panel for Fontsize settings */}
                  <FontSizePicker
                      // fontSizes={ fontSizes }
                      value={ fontSizes }
                      // fallbackFontSize={ fallbackFontSize }
                      onChange={newFontSize}
                      // onChange={ ( newFontSize ) => {
                      // setFontSize( newFontSize );
                     
                  />
              </PanelBody>

          </InspectorControls>, //inspector control section end

     

 
    //block editor body begins

     <div onClick={clickHandler} className="john_doe_quarter">

                  {
                    <BlockControls>
                      <AlignmentToolbar value={alignment} onChange={changeAlignment}/>
                      {/* <URLInput value={attributes.url} className={className} onChange={editURL}/> */}
                    </BlockControls>
                  }

      {/* <div className="john_doe_circle john_doe_hover_opacity" title="Insert staff image here via the custom block setting" style={ {backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'} }> 
                
                { removeTextVisibility && (
                  <p onChange={removeText}>Insert image here</p>
                  )
                }

      </div> */}



      {/** THIS IS AN ALTERNATE INNER BLOCK I AM DEVELOPING USING WORDPRESS INNERBLOCKS BUT IT IS NOT WORKING AS PLAN*/}
       <div>

      <InnerBlocks template={IMG_BLOCK} templateLock="all"/>

      </div> 
	
 
      
      <table>

       
                <tr style={ {border: borderChange} }>
             
                  <td><input type="text" title="Input staff name here" placeholder="Input staff name here" value={attributes.name} onChange={updateName} style={ { color: fontColor, textAlign: alignment, border: borderChange} }/></td>

                {/* <td>    THE RICHTEXT IS A GOOD OPTION TO USE FOR INPUT TEXT EDIT
                 <RichText key="editable" tagName="p" placeholder="Input persons name here" value={attributes.name} onChange={updateName} style={ { color: fontColor, textAlign: alignment} }/></td> */}

                </tr>
  

                <tr style={ {border: borderChange} }>

                  <td><input type="text" title="Input staff position here" placeholder="Input staff position here" value={attributes.position} onChange={updatePosition} style={ { color: fontColor,  textAlign: alignment, border: borderChange} }/></td>
                    
                </tr>
        

                <tr style={ {border: borderChange} }>
                
                  <td><textarea cols="18" rows="3" title="Input staff description here" placeholder="Input staff description here" value={attributes.description} onChange={updateDescription} style={ { color: fontColor,  textAlign: alignment, border: borderChange} }></textarea></td>

                </tr>
         

                <tr style={ {border: borderChange} }>
                
                  <td>
  
                  <>
         <Button onClick={openGithubLinkPopoverURL} className="john_doe_button john_doe_large john_doe_teal" title="Github"><svg width="24" height="24" viewBox="0 0 24 24" version="1.1"><path d="M12,2C6.477,2,2,6.477,2,12c0,4.419,2.865,8.166,6.839,9.489c0.5,0.09,0.682-0.218,0.682-0.484 c0-0.236-0.009-0.866-0.014-1.699c-2.782,0.602-3.369-1.34-3.369-1.34c-0.455-1.157-1.11-1.465-1.11-1.465 c-0.909-0.62,0.069-0.608,0.069-0.608c1.004,0.071,1.532,1.03,1.532,1.03c0.891,1.529,2.341,1.089,2.91,0.833 c0.091-0.647,0.349-1.086,0.635-1.337c-2.22-0.251-4.555-1.111-4.555-4.943c0-1.091,0.39-1.984,1.03-2.682 C6.546,8.54,6.202,7.524,6.746,6.148c0,0,0.84-0.269,2.75,1.025C10.295,6.95,11.15,6.84,12,6.836 c0.85,0.004,1.705,0.114,2.504,0.336c1.909-1.294,2.748-1.025,2.748-1.025c0.546,1.376,0.202,2.394,0.1,2.646 c0.64,0.699,1.026,1.591,1.026,2.682c0,3.841-2.337,4.687-4.565,4.935c0.359,0.307,0.679,0.917,0.679,1.852 c0,1.335-0.012,2.415-0.012,2.741c0,0.269,0.18,0.579,0.688,0.481C19.138,20.161,22,16.416,22,12C22,6.477,17.523,2,12,2z"></path></svg></Button>
         {
         isVisiblegithub && (
         <URLPopover onClose={closeGithubLinkPopoverURL}>

           <form id="githubform" onSubmit={submitGithubLinkURL}>
             <input type="url" value={githublink} placeholder="Enter Github Link Profile" onChange={onChangeGithubLinkURL} />
        
             <Button type="submit">Save</Button>

            

           </form>

         </URLPopover>
         
         
         
         )
       }
</>






<>
         <Button onClick={openLinkedInLinkPopoverURL} className="john_doe_button john_doe_large john_doe_teal" title="LinkedIn"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"></path></svg></Button>
         {
         isVisiblelinkedin && (
         <URLPopover onClose={closeLinkedInLinkPopoverURL} >

           <form onSubmit={submitLinkedInLinkURL}>
             <input type="url" value={linkedinlink} placeholder="Enter Linkedin Link Profile" onChange={onChangeLinkedInLinkURL} />
        
             <Button type="submit">Save</Button>

           </form>

         </URLPopover>
         
         
         
         )
       }
</>





<>
         <Button onClick={openXingLinkPopoverURL} className="john_doe_button john_doe_large john_doe_teal" title="Xing"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="currentColor" d="M313.8 303.9L469 32H365L209.4 303.8a1.35 1.35 0 0 0 0 1.7l98.9 173.8c.4.7.8.7 1.6.7H413l-99.3-174.7a1.74 1.74 0 0 1 .1-1.4Zm-91.9-87.7L163 113a2 2 0 0 0-2-1H65l58.9 104.4a1.13 1.13 0 0 1 .1.8L43 352h96.8a1.54 1.54 0 0 0 1.6-.9l80.5-133.7a2.44 2.44 0 0 0 0-1.2Z"/></svg> </Button>
         {
         isVisibleXing && (
         <URLPopover onClose={closeXingLinkPopoverURL} >

           <form onSubmit={submitXingLinkURL}>
             <input type="url" value={xinglink} placeholder="Enter Xing Link Profile" onChange={onChangeXingLinkURL} />
        
             <Button type="submit">Save</Button>

           </form>

         </URLPopover>
         
         
         
         )
       }
</>




<>
         <Button onClick={openFacebookLinkPopoverURL} className="john_doe_button john_doe_large john_doe_teal" title="Facebook"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"></path></svg></Button>
         {
         isVisibleFacebook && (
         <URLPopover onClose={closeFacebookLinkPopoverURL} >

           <form onSubmit={submitFacebookLinkURL}>
             <input type="url" value={facebooklink} placeholder="Enter Facebook Link Profile" onChange={onChangeFacebookLinkURL} />
        
             <Button type="submit">Save</Button>

           </form>

         </URLPopover>
         
         
         
         )
       }
</>
                    
 
                  </td>

                </tr>
                
      </table>




  </div>
  //block editor body end

   ]);
} 
