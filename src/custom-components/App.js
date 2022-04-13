import React, {Component} from 'react'






export class App extends Component {


  state={
    profileImg: '/public/logo192.png'
  }

   imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2){
        this.setState({profileImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  render() {


    const {profileImg} = this.state


    return(
  
        <div className="page">

              <div className="img-holder">

              <img src={profileImg}  id="img" className="img" />

              <div className="upload-section">

              <input type="file" name="image-upload" id="input" className="image-upload" accept="image/*" onChange={this.imageHandler}/> 
              
              <label htmlFor="input" className="image-upload">Upload Image</label>

              </div>

              </div>
        </div>
   )
  }
}


export default App