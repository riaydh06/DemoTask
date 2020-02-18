import React, { Component } from 'react';
import { Header, ImageListFirst, ImageListSecond, ImageListThird, ImageListForth } from '../Components';
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
         <Header title="Resorts" subtitle="Treat yourself! your dream resort stayis just few clicks aways" />
            <div class="row">
                <h3>
                    Just Book
                </h3>
                <p>

                </p>
            </div>
            <div class="row" style={{marginBottom: '50px'}}>
                <ImageListFirst
                    items={data.data1}
                />
            </div>
            <div class="row">
                <h3>
                Just Book
                </h3>
            </div>
             <div class="row" style={{marginBottom: '50px'}}>
                <ImageListSecond
                    items={data.data2}
                />
            </div>
            <div class="row">
                <h3>
                    Places in London
                </h3>
            </div>
            <div class="row" style={{marginBottom: '50px'}}>
                <ImageListThird
                    items={data.data2}
                />
            </div>
            <div class="row" style={{marginBottom: '50px'}}>
                <ImageListForth
                    items={data.data2}
                />
            </div>
        </div>
    );
  }
}

  
 export default LandingPage;