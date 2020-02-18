import React, { Component } from 'react';
import { ImageListFirst, ImageListSecond, ImageListThird, ImageListForth, Details, DetailInfo } from '../Components';
import data from '../api.json'
import logo from '../logo.svg';

const styles = {
    boxWrapper: {
        border: '1px solid 	#E8E8E8', padding: '20px' , borderRadius: '5px'
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
                <h3 style={{fontWeight: 'bold', color: 'blue'}}>
                    Hotel Alborada ocean Club
                </h3>
            </div>
            <div class="row">
                <p>
                    Hotel Alborada ocean Club
                </p>
            </div>
            <div class="row" style={{marginBottom: '40px'}}>
                <img src="https://a0.muscache.com/4ea/air/v2/pictures/4973ce42-d15c-4f6d-9cc3-dd0d52b60261.jpg" style={{height: '500px', width:  '100%'}} class="rounded" alt="logo" />
            </div>
            <div class="row" style={{marginBottom: '40px'}}>
                <div class="col-8" style={{textAlign: 'left'}}>
                    <div class="row">
                        <h3 style={{fontWeight: 'bold'}}>
                            Hotel Alborada ocean Club
                        </h3>
                    </div>
                    <div class="row">
                        <p>
                            Greater London
                        </p>
                    </div>
                    <div class="row">
                        <Details 
                            title="Privet room in flat"
                            subtitle="2 guest 1 bedroom 1 bed 1 shared bathroom"
                            image={logo}
                        />
                    </div>
                    <div class="row">
                        <Details 
                            title="Self Check-in"
                            subtitle="Check yourself in with the lockbox"
                            image={logo}
                        />
                    </div>
                    <div class="row">
                        <Details 
                            title="Breakfast"
                            subtitle="this is one of the few places that has this feature"
                            image={logo}
                        />
                    </div>
                    <div class="row">
                        <Details 
                            title="Great communication"
                            subtitle="100% of recent guests rated shimmy 5-star in communication"
                            image={logo}
                        />
                    </div>
                </div>
                <div class="col-4">
                    <div class="row" style={styles.boxWrapper}>
                        <h4 style={{fontWeight: 'bold'}}>
                            E24 
                        </h4>
                        <p>
                            per night
                        </p>
                        <DetailInfo title="E24*i night" subtitle="E24"/>
                        <DetailInfo title="Cleaning fee" subtitle="E24"/>
                        <DetailInfo title="Service fee" subtitle="E24"/>
                        <DetailInfo title="Total" subtitle="E24" bold/>
                        <button type="button" class="btn btn-danger btn-block">Reserve</button>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

  
 export default LandingPage;