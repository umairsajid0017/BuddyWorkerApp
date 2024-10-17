type TypographyOptions = {
    size: number;
    height: number;
    color: string;
    family: string;
  };
  
  export const getTypography = (size : any,height: any,color:any , family: any) => {
    return ({
      fontSize: size,
      lineHeight: height,
      color,
    fontFamily:family,
     
    });
  };
  