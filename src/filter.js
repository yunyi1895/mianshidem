export default function ( Vue){
 Vue.filter( 'zhd' , function( val ){
            var str=val
            str.replace(/<[^>]+>/g,"");
             return str
     });
 Vue.filter( 'zqw' , function( val ){
            var str=val.toString()
          str=str.replace(/<[^>].*?>/g,'')
            
             return str
     });
      Vue.filter( 'zqwqw' , function( val ){
            var s=val.toString()
           var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]") 
            var rs = ""; 
            for (var i = 0; i < s.length; i++) { 
            rs = rs+s.substr(i, 1).replace(pattern, ''); 
            } 
            return rs; 
     });



}