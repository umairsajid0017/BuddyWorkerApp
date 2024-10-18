import React, {useCallback, useRef, useMemo, forwardRef} from "react";
import { StyleSheet,Text , View} from "react-native";
import BottomSheet, {BottomSheetBackdrop, BottomSheetScrollView, BottomSheetView} from "@gorhom/bottom-sheet";

const BottomSheetViewComponent = (props : any,ref : any) => {


    // variables
    const snapPoints = useMemo(() => ["35%","40%","60%","80%"], []);

    // callbacks
    const handleSheetChange = useCallback((index : number) => {
        console.log("handleSheetChange", index);
    }, []);
    // const handleSnapPress = useCallback((index) => {
    //     sheetRef.current?.snapToIndex(index);
    // }, []);
    // const handleClosePress = useCallback(() => {
    //     sheetRef.current?.close();
    // }, []);

    const renderBackdrop = useCallback(
      (  props : any )=> (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                appearsOnIndex={1}
                enableTouchThrough={false}
            />
        ),
        [],
    )

    // render
    return (

            <BottomSheet
                ref={ref}
                index={-1}
                snapPoints={snapPoints}
                onChange={handleSheetChange}
                backdropComponent={renderBackdrop}
                enablePanDownToClose={true}
                // enableDynamicSizing={true}
                // enableContentPanningGesture={true}
                // backgroundStyle={{backgroundColor:'red'}}
            >
                <BottomSheetView>
                    {props.children}
                </BottomSheetView>
            </BottomSheet>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 200,
    },
    contentContainer: {
     zIndex:99999999

    },
});

export default forwardRef(BottomSheetViewComponent);
