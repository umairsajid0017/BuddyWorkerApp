import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { allColors } from '@/constants/Colors';

const screenWidth = Dimensions.get('window').width;

// const data = {
//   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//   datasets: [
//     {
//       data: [20, 45, 28, 80, 99, 43],
//       colors: [
//         (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
//         (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
//         (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
//         (opacity = 1) => `rgba(255, 255, 0, ${opacity})`,
//         (opacity = 1) => `rgba(0, 255, 255, ${opacity})`,
//         (opacity = 1) => `rgba(255, 0, 255, ${opacity})`,
//       ],
//     },
//   ],
// };

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientTo: '#08130D',
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  barPercentage: 0.5,
};

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
       
      }
    ]
  };

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [20, 40, 100, 80, 60, 70],
        colors: [
            () => `#FE725F`, // Solid color for bars
            () => `#FE725F`,
            () => `#FE725F`,
            () => `#FE725F`,
            () => `#FE725F`,
            () => `#FE725F`
          ]
       
      },
    ],
  };
const BarGraph = () => {
//   return (
//     <BarChart
//     // style={{margin:10}}
//     data={data}
//     width={screenWidth}
//     height={220}
//     // yAxisLabel="$"
//     chartConfig={chartConfig}
//     // verticalLabelRotation={30}
//   />
//   );


  return(
    <BarChart
 
    data={barData}
    width={screenWidth/1.1}
    height={220}
    fromZero={true}
    yLabelsOffset={35}  // Adds space to Y-axis numbers
    // xLabelsOffset={10}  // Shifts X-axis labels upwards slightly
    // hidePointsAtIndex={[5]}  // Hide the last bar and label (June)
    showBarTops={false}
    
    

        flatColor={true}
    // showValuesOnTopOfBars={true}
    withCustomBarColorFromData={true}//FOR CUSTOM BAR COLORS
    chartConfig={{
      
        backgroundGradientFrom: '#6c4680',
        backgroundGradientTo: '#6c4680',
    //   backgroundColor: 'red',
      // backgroundGradientFrom: '#08130D',
      // backgroundGradientTo: '#08130D',
      decimalPlaces: 0, // optional, defaults to 2dp
      color: () => `#FE725F`,    
    //   color: (opacity = 1) => allColors.primary1000,
      labelColor: (opacity = 1) => allColors.text100,
      barPercentage: 0.4,
      

      fillShadowGradient: allColors.primary1000,  // Orange color for filled portion
      fillShadowGradientTo:  allColors.primary1000,  
      fillShadowGradientOpacity: 1,
      style: {
        borderRadius: 16,  // Round corners of the chart container
        // padding:10,
       
      },
      propsForBackgroundLines: {
        strokeWidth: 1,
        // stroke: "#e3e3e3",
        // strokeDasharray: "0",
        stroke: allColors.tertiary700  // Gridline color, matching the design
      },
      propsForLabels: {
        fontSize: 12, // Label font size
        fontWeight: "bold"
      },
    //   barRadius: 10 
    }}
    // verticalLabelRotation={30}
    // style={{ backgroundColor: "red" }}
  />
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default BarGraph;
