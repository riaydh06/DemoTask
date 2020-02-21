import React, { Component } from 'react';
import { Header, ImageListFirst, ImageListSecond, ImageListThird, ImageListForth } from '../Components';
import data from '../api.json'
import { mb50 } from '../Styles/CommonStyle';

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
                <h3> What guests are saying about homes in the United Kingdom </h3>
                <p> United Kingdom homes were rated 4.7 out of 5 stars with 10,500,500+ reviews</p>
            </div>
            <div class="row" style={mb50}>
                <ImageListFirst
                    items={data.data1}
                />
            </div>
            <div class="row">
                <h3>
                Just Book
                </h3>
            </div>
             <div class="row" style={mb50}>
                <ImageListSecond
                    items={data.data2}
                />
            </div>
            <div class="row">
                <h3>
                    Places in London
                </h3>
            </div>
            <div class="row" style={mb50}>
                <ImageListThird
                    items={data.data2}
                />
            </div>
            <div class="row w-100" style={mb50}>
                <ImageListForth
                    items={data.data2}
                />
            </div>
        </div>
    );
  }
}

  
 export default LandingPage;