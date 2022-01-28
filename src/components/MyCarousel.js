import React,{Component} from 'react'
import {View,Image,Dimensions} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CardNewsImages from '../images/CardNewsImage';


 class MyCarousel extends Component {
    constructor(props){
        super(props);

        this.state = {
            activeSlide: 0,
            entries : [CardNewsImages[0],CardNewsImages[1],CardNewsImages[2],CardNewsImages[3]]
        }
     
     }
    _renderItem ({item, index}) {
        return <Image source={item} style={{width:300,height:300}}/>
    }

    get pagination () {
        const { entries, activeSlide } = this.state;
  
        return (
            <Pagination
              dotsLength={entries.length}
              activeDotIndex={activeSlide}
              containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 1)' ,
            position: 'absolute', top:250,alignSelf:'center'}}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: 'rgba(255, 255, 255, 0.92)',
                  borderColor:'black'
                
              }}
              inactiveDotStyle={{
                  // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              animatedDuration={5}
              dotContainerStyle={{
                  
              }}
            />
        );
    }

    render () {
        const height = Dimensions.get('window').height;
        const width = Dimensions.get('window').width;

        return (
            <View >
                <Carousel
                  data={this.state.entries}
                  renderItem={this._renderItem}
                  onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                  windowSize={21}
                  sliderWidth={width}
                  sliderHeight={100}
                  itemHeight={250}
                  itemWidth={250}
                  autoplay={false}
                  loopClonesPerSide={3}
                  enableMomentum={false}
                  lockScrollWhileSnapping={true}
                  activeSlideAlignment='center'
                  containerCustomStyle={{marginRight:80,marginLeft:70}}
                  contentContainerCustomStyle={{}}
                  

                />
                { this.pagination }
            </View>
        );
    }
}

export default MyCarousel