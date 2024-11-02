import React, {useState} from 'react'

export default function Textform() {

    const [text,setText] = useState('Enter text');
    const [mystyle,updatestyle] = useState({
        color:'black',
        backgroundColor:'white',
        fontSize:'20px'
    });

    const handleupclick = (event) => {
        setText(text.toUpperCase());
        console.log('Uppercase was clicked',event);
    }
    const handelonchange = (a,event) => {
        console.log('on change',a,event);
        /* below Code Will Specify The Type of Event is Genrated  */
        // alert(event.type)

        // setText(event.target.value)
    }

   const colorchnage=()=>{
    if (mystyle.backgroundColor==='white')
        {
            updatestyle({
                color:'white',
                backgroundColor:'black',
                fontSize:'20px',
            })
        
        }
        else{
            updatestyle({
                color:'black',
                backgroundColor:'white',
                fontSize:'20px',
            })
        }
    }

  return (
    <>
    <div className='form-group container  my-5 py-5'style={mystyle}>
        <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
        {/* Sending Event Object explicitliy along with Extra Parameter  */}
        <textarea className="form-control" value={text} onChange={(event)=>handelonchange('K2',event)} id="mybox" rows="3" ></textarea>
        {/* <textarea className="form-control" value={text} onChange={(event)=>alert(event.target.value)} id="mybox" rows="3" ></textarea> */}
    </div>
    <div className="container" style={mystyle}>
        {/* Not Sending Event Object Explicitly But React Does this For Us  */}
    <button className="btn btn-primary m-2" onClick={handleupclick}>Convert To Uper Case</button>
    </div>
    <div className="container" style={mystyle}>
        {/* Not Sending Event Object Explicitly But React Does this For Us  */}
    <button className="btn btn-primary m-2" onClick={colorchnage}>Dark</button>
    </div>

    </>

  )
}
