export default function ( Vue){
 Vue.filter( 'zhd' , function( val ){
            var str=val
            str.replace(/<[^>]+>/g,"");
             return str
     });
 Vue.filter( 'zqw' , function( val ){
            var str=val.toString()
           
            str.replace(/^\"|\"$/g,'')
            str.replace('[','')
            
             return str
     });



}