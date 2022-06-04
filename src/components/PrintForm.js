import React  from 'react'


export default function PrintForm(props) {

 console.log(props);
 setTimeout(() => {
  window.print();
}, 5000);


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

    console.log(form);

    return (
      <>
    
    
  
{form.img === "noImg" ?  <>
<p className='Fname'>{form.Name}</p>
 <p className='fno'>{form.formno}</p>
  <p className='Fmaterial'>{form.Material}</p>
 <p className='Fdate'>{form.date.split("-").reverse().join("-")}</p>
 <p className='Fmark'>{form.Mark}</p>
 <p className='FtouchNumberSet1'>{form.touch.slice(0, 2)}</p>
 <p className='FtouchNumberSet2'>{form.touch.slice(3)}</p>

 <p className="firstDigitTouch">{form.touch[0] == '0' ? "zero " : inWords(form.touch[0])  } </p>
 <p className="secondDigitTouch">{form.touch[1] == '0' ? "zero " : inWords(form.touch[1]) } </p>
 <p className="thirdDigitTouch">{form.touch[3] == '0' ? "zero " : inWords(form.touch[3]) } </p>
 <p className="fourthDigitTouch">{form.touch[4] == '0' ? "zero " : inWords(form.touch[4]) } </p>
</>
 :  <>
 
 <img className='formImg' src={form.img}/>
 <p className='Fname'>{form.Name}</p>
 <p className='fno'>{form.formno}</p>
 <p className='Fdate'>{form.date.split("-").reverse().join("-")}</p>
 <p className='Fmark'>{form.Mark}</p>
 <p className='FtouchNumberSet1'>{form.touch.slice(0, 2)}</p>
 <p className='FtouchNumberSet2'>{form.touch.slice(3)}</p>

 <p className="firstDigitTouch">{form.touch[0] == '0' ? "zero " : inWords(form.touch[0])  } </p>
 <p className="secondDigitTouch">{form.touch[1] == '0' ? "zero " : inWords(form.touch[1]) } </p>
 <p className="thirdDigitTouch">{form.touch[3] == '0' ? "zero " : inWords(form.touch[3]) } </p>
 <p className="fourthDigitTouch">{form.touch[4] == '0' ? "zero " : inWords(form.touch[4]) } </p>


 </>}
   

    </>
     
     );
     
});



  return (
    <>
    {formRenderer}
    <img className='bgImg' src="https://lh3.googleusercontent.com/mNLM2_eTUMktuYx4R_anK8Ei88eDpIJ_R55JkmmUxgfDq___Uk75Vssd0--p4SC21h9K9bfG4k5HWOPotijouwq4ALijKfCXssFL-DrspJp3iNXb9tCVj_AboaxqOHaSlEABqWgdgxr0ArOVy6cm2nOMdHqKxPmyyp78i0Rf9OEe6UV9CY9pODBVzNgI-cBWN-5K0zam-A1_SFXzN7ZMfzFulL58OPA2UKrLolck7o7AoWgRxTRue5c4c5EMVGx7u4FtnVkhyTF3pvhVe0_uCGnw6VFU9gqJ8NuB40UTgR4DITUfVs7HSdQBqYTeJmojZrIRn65A33v16q06ISgsJJ9pOls1orNN_e22LWIBb9GRbC7CvFVw1oh87wo0qKrOEjGIc9NJzJTe-2-kck0lHX0uroujM65qLYny_MowGqtfufOp_2wwq8zumzy6eYu-K6ZAHuVXzytDdDMXqajo_InaK8SJ_k40JhfSHsTxjUm9QaVhashzvznJv8rzzgQ63prIV5ASrUCvMFPHwGRZchpwZ5lPM45Of8nC2VyyJWX1xslpd7RMKYRY1VYgdCtZI3ePfenM29kQKBELF-eGgrdvN-bF80NfdYKofswirJpTAV7E_hY-2mBoL_oI7b_KzGh-qSUtGENjxm0Wzae_xJTvow0SO4fonbqSYcAULFUgBY46XmWwhRLnded_cb_ulFfrecpo3vELsexRRkiujFlki2EuENvJd9gAGQplivvuikWDiVQsSroUphmBAYPCQodu5XsHOY_2S6geQNM0GIXWZQH560w=w1534-h933-no?authuser=0" />
    </>
  )
}
