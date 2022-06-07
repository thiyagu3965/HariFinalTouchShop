import React  from 'react'
import printBackgroundImg from './Images/Hari.jpg'

export default function PrintForm(props) {

 console.log(props);



var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function inWords (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    var n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + '' : '';
    return str;
}
 const formRenderer = props.forms.map((form) => {
setTimeout(() => {
  window.print();
}, 5000);
    console.log(form);

    return (
      <>
    
    
  
{form.img === "noImg" ? <><p className='Fname'>{form.Name}</p>
 <p className='fno'>{form.formno}</p>
  <p className='Fmaterial'>{form.Material}</p> <p className='Fdate'>{form.date.split("-").reverse().join("-")}</p>
 <p className='Fmark'>{form.Mark}</p>
 <p className='FBracket'>{form.Bracket == "" ? "" : "( " + form.Bracket + " )"}</p>
 <p className='FtouchNumberSet1'>{form.touch.slice(0, 2)}</p>
 <p className='FtouchNumberSet2'>{form.touch.slice(3)}</p> <p className="firstDigitTouch">{form.touch[0] == '0'  ? "zero " : inWords(form.touch[0])  } </p>
 <p className="secondDigitTouch">{form.touch[1] == '0' ? "zero " : inWords(form.touch[1]) } </p>
 <p className="thirdDigitTouch">{form.touch[3] == '0' ? "zero " : inWords(form.touch[3]) } </p>
 <p className="fourthDigitTouch">{form.touch[4] == '0' ? "zero " : inWords(form.touch[4]) } </p></> : <><img className='formImg' src={form.img}/><p className='Fname'>{form.Name}</p>
 <p className='fno'>{form.formno}</p>
  <p className='Fmaterial'>{form.Material}</p> <p className='Fdate'>{form.date.split("-").reverse().join("-")}</p>
 <p className='Fmark'>{form.Mark}</p>
 <p className='FBracket'>{form.Bracket}</p>
 <p className='FtouchNumberSet1'>{form.touch.slice(0, 2)}</p>
 <p className='FtouchNumberSet2'>{form.touch.slice(3)}</p> <p className="firstDigitTouch">{form.touch[0] == '0'  ? "zero " : inWords(form.touch[0])  } </p>
 <p className="secondDigitTouch">{form.touch[1] == '0' ? "zero " : inWords(form.touch[1]) } </p>
 <p className="thirdDigitTouch">{form.touch[3] == '0' ? "zero " : inWords(form.touch[3]) } </p>
 <p className="fourthDigitTouch">{form.touch[4] == '0' ? "zero " : inWords(form.touch[4]) } </p></>}
   

    </>
     
     );
     
});



  return (
    <>

    {formRenderer}
    <img className="bgImg" src="https://i.ibb.co/jR501wQ/Hari.jpg" /> 
    {/* <img className='bgImg' src={printBackgroundImg} />  */}
    </>
  )
}
