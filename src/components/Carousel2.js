import React from 'react';
import  Carousel2 from 'react-native-snap-carousel';

function Carousel2({entries}) {

    
    const _renderItem = ({item, index}) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
    }

  return <Carousel
  data={entries}
  renderItem={_renderItem}
  sliderWidth={sliderWidth}
  itemWidth={itemWidth}
/>;
}

export default Carousel2;

