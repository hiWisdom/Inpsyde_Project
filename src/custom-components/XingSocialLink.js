import React, {Component} from 'react';
import { __ } from '@wordpress/i18n';
import { URLPopover } from '@wordpress/block-editor';
import { Button, ToggleControl } from '@wordpress/components';


export class XingSocialLink extends Component {

    constructor(){
        super(...arguments);
        this.onChangeURL = this.onChangeURL.bind(this);
        this.submitURL = this.submitURL.bind(this);
        this.openPopoverURL = this.openPopoverURL.bind(this);
        this.closePopoverURL = this.closePopoverURL.bind(this);
        this.setTarget = this.setTarget.bind(this);
        this.state = {
          isVisibile:false,
        };
      }
  
         onChangeURL(url) {
           this.setState( url );
         }
  
         submitURL() {
           this.closePopoverURL();
         }
  
         openPopoverURL() {
           this.setState( {isVisible: true} );
         }
  
         closePopoverURL() {
           this.setState( { isVisibe:false} );
         }
         setTarget() {}
       

         render() {

         const {openInNewWindow} = this.props;
         const {url, isVisible, isEditing} = this.state;

        return (

         <>
         <Button onClick={ this.openPopoverURL} className="john_doe_button john_doe_large john_doe_teal" title="Xing"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-14.085 15l2.744-4.825-1.846-3.162h3.292l1.83 3.152-2.744 4.835h-3.276zm8.79-1.445l3.514 6.445h-3.252l-3.55-6.445 5.38-9.555h3.289l-5.381 9.555z"></path></svg></Button>
         {
         isVisible && (
         <URLPopover onClose={this.closePopoverURL} renderSettings={ () => (
           <ToggleControl label={__('Open in new tab')} checked={openInNewWindow} onChange={this.setTarget} />
         )} >

           <form onSubmit={this.submitURL}>
             
             <input type="url" value={url} onChange={this.onChangeURL} />
             <Button label={__('Apply')} type="submit">submit</Button>

           </form>



         </URLPopover>
         
         
         
         )
       }
</>

        );
    }



  }
  
  
  export default XingSocialLink  