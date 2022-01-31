import React,{Component} from 'react'
import {View,Image,Dimensions,Text,ScrollView} from 'react-native';
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
        return <Image source={item} style={{width:300,height:300,alignSelf:'center'}}/>
    }

    get pagination () {
        const { entries, activeSlide } = this.state;
  
        return (
            <Pagination
              dotsLength={entries.length}
              activeDotIndex={activeSlide}
              containerStyle={{ 
         }}
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
                  backgroundColor:'black'
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
                  sliderHeight={300}
                  itemHeight={300}
                  itemWidth={250}
                  autoplay={true}
                  loopClonesPerSide={3}
                  enableMomentum={false}
                  lockScrollWhileSnapping={true}
                  activeSlideAlignment='center'
                  style={{margin:0,padding:0}}

                />
               { this.pagination }
            </View>
        );
    }
}

export default MyCarousel