import React, { forwardRef } from "react";
import { Dimensions } from "react-native";

import RBSheet from "react-native-raw-bottom-sheet";

const {width, height} = Dimensions.get('window');
const guidelineBaseWidth = 320;
const guidelineBaseHeight = 568;


const RawBottomSheet = (props : any, ref : any) => {

    return (
        <RBSheet
            ref={ref}
            closeOnPressBack={true}
            closeOnPressMask={true}
            draggable={true}
            dragOnContent={true}
            height={props.height}
            customStyles={{

                // wrapper: {
                //     backgroundColor: 'transparent',
                // },
                container: {
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                   

                },
                draggableIcon: {
                    backgroundColor: 'rgba(128,128,128,0.3)',
                },
            }}
            onOpen={() => console.log('Bottom sheet opened')}
            onClose={() => console.log('Bottom sheet closed')}
   >
            {props.children}
        </RBSheet>

    );

};
export default forwardRef(RawBottomSheet);
