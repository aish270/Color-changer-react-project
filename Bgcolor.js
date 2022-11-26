import React, {useState} from 'react'
import Select from 'react-select'
import './Bgcolo.css'


function Bgcolor() {
    var colors=[
        {
            value:1,
            label:"red"
        },
        {
            value:2,
            label:"blue"
        },
        {
            value:3,
            label:"orange"

        },
        {
            value:4,
            label:"green"
         },
         {
            value:5,
            label:"black"
         },
         {

            label : 'Lime',

            value : 6

        },

        {

            label : 'Lavender',

            value : 7

        },

        {

            label : 'Crimson',

            value :8

        },

        {

            label : 'Darkblue',

            value : 9

        },

        {

            label : 'Teal',

            value : 11

        },
        

        


        
        
    ];
    var [setbgcolor,ddlvalue]=useState(colors.label);
    var ddlhandle = (e) => {
      ddlvalue(e.label);
    }
   
  return (
    <>
 <div className='h'>
 <style>{'.drop {background-color:'+setbgcolor+';}'}</style>    
    
      {/* <style>{'h {background-color:'+setbgcolor+';}'}</style> */}

        <Select className="bag" options={colors} onChange={ddlhandle} className="sl">
            
        
        </Select>
    
      </div>
        <div className='drop'>
            <style>{'.drop {background-color:'+setbgcolor+';}'}</style> 
          <h3> {setbgcolor}</h3>
        </div>
    </>
  )
}

export default Bgcolor