import React, { Component } from 'react';
import { ImageListFirst } from '../Components';
import data from '../api.json'

const styles = {
    wrapper: {
        
    }
}

class LandingPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
        search: ''
    }
  }

  render() {
    console.log(data)
    const {search} = this.state;
    return (
        <div class="container">
            <div class="row">
                <ImageListFirst
                    items={data.data1}
                />
            </div>
        </div>
    );
  }
}

  
 export default LandingPage;