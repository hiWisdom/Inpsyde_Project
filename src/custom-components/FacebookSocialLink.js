import React, {Component} from 'react';
import { __ } from '@wordpress/i18n';
import { URLPopover } from '@wordpress/block-editor';
import { Button, ToggleControl } from '@wordpress/components';


export class FacebookSocialLink extends Component {

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
         <Button onClick={ this.openPopoverURL} className="john_doe_button john_doe_large john_doe_teal" title="Facebook"><svg width="24" height="24" viewBox="0 0 24 24" version="1.1" role="img" aria-hidden="true" focusable="false"><path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"></path></svg></Button>
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
  
  
  export default FacebookSocialLink  