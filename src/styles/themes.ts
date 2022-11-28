import  {  extendTheme  }  from  'native-base' ;

export  const  THEME  =  extendTheme ( {
  cores : {
    cinza : {
      950 : '#09090A' ,
      900 : '#121214' ,
      800 : '#202024' ,
      600 : '#323238' ,
      300 : '#8D8D99' ,
      200 : '#C4C4CC' ,
    } ,
    verde : {
      500 : '#047C3F'
    } ,
    amarelo : {
      500 : '#F7DD43' ,
      600 : '#BBA317' ,
    } ,
    vermelho : {
      500 : '#DB4437' ,
    } ,
    branco : '#FFFFFF'
  } ,
  fontes : {
    título : 'Roboto_700Bold' ,
    body : 'Roboto_400Regular' ,
    medium : 'Roboto_500Medium'
  } ,
  fontSizes : {
    xs : 12 ,
    m : 14 ,
    MD : 16 ,
    lg : 20 ,
    xl : 24 ,
  } ,
  tamanhos : {
    14 : 56
  }
} ) ;