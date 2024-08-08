
import React from 'react'
import {useState} from 'react'
import Slider from './Slider';
import Colorpicker from './Colorpicker';
import './forms.css'
import FontPicker from './FontPicker'
import TextStylePicker from './TextStylePicker'
import ShadowPicker from './ShadowPicker'

function Forms() {
    const [text,settext]=useState('enter the text')
    const [fontSize,setsize]=useState(16)
    const [Color,setColor]=useState('#000000')
    const [myfont, setFont] = useState('Arial')
    const [styles, setStyles] = useState({
      bold: false,
      italic: false,
      underline: false,
    })
    const [shadow, setShadow] = useState('none');

    

    const formsty={
        width:800,
        height: '300px',
        fontSize: `${fontSize}px`,
        color:Color,
        fontFamily: myfont,
        border: '1px solid black',
        fontWeight: styles.bold ? 'bold' : 'normal',
        fontStyle: styles.italic ? 'italic' : 'normal',
        textDecoration: styles.underline ? 'underline' : 'none',
        textShadow:shadow
      };

    const margin1={
        margin:10
    };

    const handleStyleChange = (name, value) => {
      setStyles((prevStyles) => ({
        ...prevStyles,
        [name]: value,
      }));
    };
   
    const handletext=(event)=>
    {
        settext(event.target.value)
    }

    const upper1=()=>
    {
        settext(text.toUpperCase())
    };

    const lower1=()=>
    {
        settext(text.toLowerCase())
    }


  return (
    
    <div className="mb-3">
 
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter text</label>
  <center><textarea className="form-control" id="exampleFormControlTextarea1" rows="10" style={formsty} value={text} onChange={handletext}></textarea></center>
  <button type="button" className="btn btn-primary" style={margin1} onClick={upper1} >UPPERCASE</button>

  <button type="button" className="btn btn-primary" style={margin1} onClick={lower1}>lowercase</button>
  <center>
  <div className='parallel'>
  <Slider value={fontSize} onChange={setsize}/>
  <Colorpicker color={Color} onChange={setColor}></Colorpicker>
  </div></center>
  <div className='parallel1'>
  <FontPicker font={myfont} onChange={setFont} />
  <div className="txtsty">
        <TextStylePicker styles={styles} onChange={handleStyleChange} />
      </div>
      <ShadowPicker shadow={shadow} onChange={setShadow} />
    </div>
</div>
    </div>
  )
}

export default Forms
