import React, {Component} from 'react';
import { __ } from '@wordpress/i18n';
import { URLPopover } from '@wordpress/block-editor';
import { Button, ToggleControl } from '@wordpress/components';


export class GithubSocialLink extends Component {

    constructor(props){
        super(props);
        this.onChangeURL = this.onChangeURL.bind(this);
        this.submitURL = this.submitURL.bind(this);
        this.openPopoverURL = this.openPopoverURL.bind(this);
        this.closePopoverURL = this.closePopoverURL.bind(this);
        this.setTarget = this.setTarget.bind(this);
        this.state = {
          isVisibile:false,
          value: '',
        };
      }
  
         onChangeURL(event) {
           this.setState({value: event.target.value});
         }
  
         submitURL(event) {
          if (this.state.value == '') {
              alert('Kindly input a Link');
              return event.preventDefault();
          }
          else {
            alert('Link Saved Successfully: ' + this.state.value);
              this.setState( {isVisible: false} );
              event.preventDefault();
          }
         }
  
         openPopoverURL() {
           this.setState( {isVisible: true} );
         }
  
        //  closePopoverURL() {
        //    this.setState( { isVisibe:false} );
        //  }

        closePopoverURL() {
          if(URLPopover === {isVisible:true}){
            this.setState( {isVisibile: false} );
          } 
          else {
            this.setState( {isVisibile: false} );
          }
        }


         setTarget() {}
       

         render() {

         const {openInNewWindow} = this.props;
         const {isVisible, value} = this.state;
        {/**a state value isEditing can be added. */}


        return (

         <>
         <Button onClick={ this.openPopoverURL} className="john_doe_button john_doe_large john_doe_teal" title="Github"><svg width="24" height="24" viewBox="0 0 24 24" version="1.1" role="img" aria-hidden="true" focusable="false"><path d="M12,2C6.477,2,2,6.477,2,12c0,4.419,2.865,8.166,6.839,9.489c0.5,0.09,0.682-0.218,0.682-0.484 c0-0.236-0.009-0.866-0.014-1.699c-2.782,0.602-3.369-1.34-3.369-1.34c-0.455-1.157-1.11-1.465-1.11-1.465 c-0.909-0.62,0.069-0.608,0.069-0.608c1.004,0.071,1.532,1.03,1.532,1.03c0.891,1.529,2.341,1.089,2.91,0.833 c0.091-0.647,0.349-1.086,0.635-1.337c-2.22-0.251-4.555-1.111-4.555-4.943c0-1.091,0.39-1.984,1.03-2.682 C6.546,8.54,6.202,7.524,6.746,6.148c0,0,0.84-0.269,2.75,1.025C10.295,6.95,11.15,6.84,12,6.836 c0.85,0.004,1.705,0.114,2.504,0.336c1.909-1.294,2.748-1.025,2.748-1.025c0.546,1.376,0.202,2.394,0.1,2.646 c0.64,0.699,1.026,1.591,1.026,2.682c0,3.841-2.337,4.687-4.565,4.935c0.359,0.307,0.679,0.917,0.679,1.852 c0,1.335-0.012,2.415-0.012,2.741c0,0.269,0.18,0.579,0.688,0.481C19.138,20.161,22,16.416,22,12C22,6.477,17.523,2,12,2z"></path></svg></Button>
         {
         isVisible && (
         <URLPopover onClose={this.closePopoverURL} renderSettings={ () => (
           <ToggleControl label={__('Open in new tab')} checked={openInNewWindow} onChange={this.setTarget} />
         )} >

           <form onSubmit={this.submitURL}>
             <input type="url" value={value} onChange={this.onChangeURL} />
             {/* <input type="submit" value="Save"/> */}
             <Button label={__('Apply')} type="submit">Save</Button>

           </form>

           {/* example, this is not important use gitignore to ignore`url(${backgroundImage})` */}

         </URLPopover>
         
         
         
         )
       }
</>

        );
    }



  }
  
  
  export default GithubSocialLink  