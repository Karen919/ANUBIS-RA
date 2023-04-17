import { useState } from "react";

function App() {
  const [bidDefault, setBidDefault] = useState(0);
  const demoBoxsConteiner  =[
    ['','','',''],
    ['','','',''],
    ['','','',''],
    ['','','',''],
    ['','','',''],
    ['','','',''],
    ['','','',''],
    ['','','',''],
    ['','','',''],
  ];
  const [changeTheme,setChangeTheme] = useState('')
  if (changeTheme) {
    document.getElementById('body').className= 'body_ra';
    for (let i = 0; i < 9; i++) {
      demoBoxsConteiner[i][Math.floor((Math.random() *4))] =  '  ';
    }
  } else {
      document.getElementById('body').className= 'body_anubis'
      for (let i = 0; i < 9; i++) {
        demoBoxsConteiner[i][Math.floor((Math.random() *4))] =  ' ';
    }
  }

const[box1,setBoxs0] =  useState(demoBoxsConteiner[0].map( (value,index) => <span  key={index} className="boxs" ></span> ))
const[box2,setBoxs1] =  useState(demoBoxsConteiner[1].map( (value,index) => <span  key={index} className="boxs" ></span> ))
const[box3,setBoxs2] =  useState(demoBoxsConteiner[2].map( (value,index) => <span  key={index} className="boxs" ></span> ))
const[box4,setBoxs3] =  useState(demoBoxsConteiner[3].map( (value,index) => <span  key={index} className="boxs" ></span> ))
const[box5,setBoxs4] =  useState(demoBoxsConteiner[4].map( (value,index) => <span  key={index} className="boxs" ></span> ))
const[box6,setBoxs5] =  useState(demoBoxsConteiner[5].map( (value,index) => <span  key={index} className="boxs" ></span> ))
const[box7,setBoxs6] =  useState(demoBoxsConteiner[6].map( (value,index) => <span  key={index} className="boxs" ></span> ))
const[box8,setBoxs7] =  useState(demoBoxsConteiner[7].map( (value,index) => <span  key={index} className="boxs" ></span> ))
const[box9,setBoxs8] =  useState(demoBoxsConteiner[8].map( (value,index) => <span  key={index} className="boxs" ></span> ))

function reload() {
  setBoxs0(demoBoxsConteiner[0].map( (value,index) => <span  key={index} className="boxs" ></span> ))
  setBoxs1(demoBoxsConteiner[1].map( (value,index) => <span  key={index} className="boxs" ></span> ))
  setBoxs2(demoBoxsConteiner[2].map( (value,index) => <span  key={index} className="boxs" ></span> ))
  setBoxs3(demoBoxsConteiner[3].map( (value,index) => <span  key={index} className="boxs" ></span> ))
  setBoxs4(demoBoxsConteiner[4].map( (value,index) => <span  key={index} className="boxs" ></span> ))
  setBoxs5(demoBoxsConteiner[5].map( (value,index) => <span  key={index} className="boxs" ></span> ))
  setBoxs6(demoBoxsConteiner[6].map( (value,index) => <span  key={index} className="boxs" ></span> ))
  setBoxs7(demoBoxsConteiner[7].map( (value,index) => <span  key={index} className="boxs" ></span> ))
  setBoxs8(demoBoxsConteiner[8].map( (value,index) => <span  key={index} className="boxs" ></span> ))
  setBidDefault(0)
                         // startReload
  document.getElementById('startContain').style.display = 'flex';
  document.getElementById('hiddenStartContain').style.display= 'none'
                          // afterLoseReload
  document.getElementById('lose_alert').style.display = 'none'
  document.getElementById('anubis_header_contain').style.display = 'initial'
  document.getElementById('ra_header_contain').style.display = 'inital'
                          // afterWinReload
  document.getElementById('anubis_contain_win_alert').style.display = 'none'
  document.getElementById('anubis_header_contain').style.display = 'initial'
  document.getElementById('ra_header_contain').style.display = 'initial'
  document.getElementById('ra_contain_win_alert').style.display = 'none'

}

function alertLose (){
  document.getElementById('lose_alert').style.display = 'initial'
  document.getElementById('anubis_header_contain').style.display = 'none'
  document.getElementById('ra_header_contain').style.display = 'none'
}
function alertWin() {
  document.getElementById('anubis_contain_win_alert').style.display = 'initial'
  document.getElementById('anubis_header_contain').style.display = 'none'
  document.getElementById('ra_header_contain').style.display = 'none'
  setTimeout(()=>{reload()},4000)
}
function alertWinRa () {
  document.getElementById('ra_contain_win_alert').style.display = 'initial'
  document.getElementById('anubis_header_contain').style.display = 'none'
  document.getElementById('ra_header_contain').style.display = 'none'
  setTimeout(()=>{reload()},4000)
}


async function start() {
  await new Promise((resolve, reject) => {
      if (demoBoxsConteiner[0].some(num => num ===' ')){
        setBoxs8(
          demoBoxsConteiner[8].map((value, index) => {
            if (value !== ' ' ) {      
                return <span key={index} className="boxs_await " onClick={(e)=>{
              e.target.className= 'boxs_click'
              setBidDefault(bidDefault * 2)
              return resolve()
                }}> <span className="win_sum">{`${bidDefault}fun x 2`}</span></span>
            } else {
              return  <span key={index} className="boxs_await" onClick={(e)=>{
              e.target.className = 'lose_boxs_click'
              alertLose()
              setTimeout(()=>{reload()},4000)
              return reject()
      
              }} ><span className="win_sum">{`${bidDefault}fun x 2`}</span></span> 
            } 
          })
        );
      } else if (demoBoxsConteiner[0].some(val => val === '  ')){
        setBoxs8(
          demoBoxsConteiner[8].map((value, index) => {
            if (value === '  ') {      
                return <span key={index} className="boxs_await " onClick={(e)=>{
              e.target.className= 'boxs_click'
              setBidDefault(bidDefault * 4)
              return resolve()
                }}> <span className="win_sum">{`${bidDefault}fun x 4`}</span></span>
            } else {
              return  <span key={index} className="boxs_await" onClick={(e)=>{
              e.target.className = 'lose_boxs_click'
              alertLose()
              setTimeout(()=>{reload()},4000)
              return reject()
      
              }} ><span className="win_sum">{`${bidDefault}fun x 4`}</span></span> 
            } 
          })
        );
      }
    });
  await new Promise((resolve, reject) => {
    document.getElementById('startContain').style.display = 'none';
    document.getElementById('hiddenStartContain').style.display= 'inherit'
    if (demoBoxsConteiner[0].some(num => num ===' ')){
      setBoxs8(demoBoxsConteiner[8].map( (value,index) => value !== ' ' ? <span  key={index} className="boxs_click" ></span> : <span  key={index}  className="lose_boxs_click"></span>));
      setBoxs7(
        demoBoxsConteiner[7].map((value, index) => {
          if (value !== ' ' ) {      
              return <span key={index} className="boxs_await " onClick={(e)=>{
            e.target.className= 'boxs_click'
            setBidDefault(bidDefault * 3)
            return resolve()
              }}> <span className="win_sum">{`${bidDefault}fun x 3`}</span></span>
          } else {
            return  <span key={index} className="boxs_await" onClick={(e)=>{
            e.target.className = 'lose_boxs_click'
            alertLose()
            setTimeout(()=>{reload()},4000)
            return reject()
            }} ><span className="win_sum">{`${bidDefault}fun x 3`}</span></span> 
          } 
        })
      );
    } else if (demoBoxsConteiner[0].some(val => val === '  ')){
      setBoxs8(demoBoxsConteiner[8].map( (value,index) => value === '  ' ? <span  key={index} className="boxs_click" ></span> : <span  key={index}  className="lose_boxs_click"></span>));
      setBoxs7(
        demoBoxsConteiner[7].map((value, index) => {
          if (value === '  ') {      
              return <span key={index} className="boxs_await " onClick={(e)=>{
            e.target.className= 'boxs_click'
            setBidDefault(bidDefault * 8)
            return resolve()
              }}> <span className="win_sum">{`${bidDefault}fun x 8`}</span></span>
          } else {
            return  <span key={index} className="boxs_await" onClick={(e)=>{
            e.target.className = 'lose_boxs_click'
            alertLose()
            setTimeout(()=>{reload()},4000)
            return reject()
            }} ><span className="win_sum">{`${bidDefault}fun x 8`}</span></span> 
          } 
        })
      );
    }
  });
  await new Promise((resolve, reject) => {
    if (demoBoxsConteiner[0].some(num => num ===' ')){
      setBoxs7(demoBoxsConteiner[7].map( (value,index) => value !== ' ' ? <span  key={index} className="boxs_click" ></span> : <span  key={index}  className="lose_boxs_click"></span>));
      setBoxs6(
        demoBoxsConteiner[6].map((value, index) => {
          if (value !== ' ' ) {      
              return <span key={index} className="boxs_await " onClick={(e)=>{
            e.target.className= 'boxs_click'
            setBidDefault(bidDefault * 4)
            return resolve()
              }}> <span className="win_sum">{`${bidDefault}fun x 4`}</span></span>
          } else {
            return  <span key={index} className="boxs_await" onClick={(e)=>{
            e.target.className = 'lose_boxs_click'
            alertLose()
            setTimeout(()=>{reload()},4000)
            return reject()
            }} ><span className="win_sum">{`${bidDefault}fun x 4`}</span></span> 
          } 
        })
      );
    } else if (demoBoxsConteiner[0].some(val => val === '  ')){
      setBoxs7(demoBoxsConteiner[7].map( (value,index) => value === '  ' ? <span  key={index} className="boxs_click" ></span> : <span  key={index}  className="lose_boxs_click"></span>));
      setBoxs6(
        demoBoxsConteiner[6].map((value, index) => {
          if (value === '  ') {      
              return <span key={index} className="boxs_await " onClick={(e)=>{
            e.target.className= 'boxs_click'
            setBidDefault(bidDefault * 16)
            return resolve()
              }}> <span className="win_sum">{`${bidDefault}fun x 16`}</span></span>
          } else {
            return  <span key={index} className="boxs_await" onClick={(e)=>{
            e.target.className = 'lose_boxs_click'
            alertLose()
            setTimeout(()=>{reload()},4000)
            return reject()
            }} ><span className="win_sum">{`${bidDefault}fun x 16`}</span></span> 
          } 
        })
      );
    }
  });

  await new Promise((resolve, reject) => {
    if (demoBoxsConteiner[0].some(num => num ===' ')){
      setBoxs6(demoBoxsConteiner[6].map( (value,index) => value !== ' ' ? <span  key={index} className="boxs_click" ></span> : <span  key={index}  className="lose_boxs_click"></span>));
      setBoxs5(
        demoBoxsConteiner[5].map((value, index) => {
          if (value !== ' ' ) {      
              return <span key={index} className="boxs_await " onClick={(e)=>{
            e.target.className= 'boxs_click'
            setBidDefault(bidDefault * 5)
            return resolve()
              }}> <span className="win_sum">{`${bidDefault}fun x 5`}</span></span>
          } else {
            return  <span key={index} className="boxs_await" onClick={(e)=>{
            e.target.className = 'lose_boxs_click'
            alertLose()
            setTimeout(()=>{reload()},4000)
            return reject()
            }} ><span className="win_sum">{`${bidDefault}fun x 5`}</span></span> 
          } 
        })
      );
    } else if (demoBoxsConteiner[0].some(val => val === '  ')){
      setBoxs6(demoBoxsConteiner[6].map( (value,index) => value === '  ' ? <span  key={index} className="boxs_click" ></span> : <span  key={index}  className="lose_boxs_click"></span>));
      setBoxs5(
        demoBoxsConteiner[5].map((value, index) => {
          if (value === '  ') {      
              return <span key={index} className="boxs_await " onClick={(e)=>{
            e.target.className= 'boxs_click'
            setBidDefault(bidDefault * 32)
            return resolve()
              }}> <span className="win_sum">{`${bidDefault}fun x 32`}</span></span>
          } else {
            return  <span key={index} className="boxs_await" onClick={(e)=>{
            e.target.className = 'lose_boxs_click'
            alertLose()
            setTimeout(()=>{reload()},4000)
            return reject()
            }} ><span className="win_sum">{`${bidDefault}fun x 32`}</span></span> 
          } 
        })
      );
    }
  });
  
  await new Promise((resolve, reject) => {
    if (demoBoxsConteiner[0].some(num => num ===' ')){
      setBoxs5(demoBoxsConteiner[5].map( (value,index) => value !== ' ' ? <span  key={index} className="boxs_click" ></span> : <span  key={index}  className="lose_boxs_click"></span>));
      setBoxs4(
        demoBoxsConteiner[4].map((value, index) => {
          if (value !== ' ' ) {      
              return <span key={index} className="boxs_await " onClick={(e)=>{
            e.target.className= 'boxs_click'
            setBidDefault(bidDefault * 6)
            return resolve()
              }}> <span className="win_sum">{`${bidDefault}fun x 6`}</span></span>
          } else {
            return  <span key={index} className="boxs_await" onClick={(e)=>{
            e.target.className = 'lose_boxs_click'
            alertLose()
            setTimeout(()=>{reload()},4000)
            return reject()
            }} ><span className="win_sum">{`${bidDefault}fun x 6`}</span></span> 
          } 
        })
      );
    } else if (demoBoxsConteiner[0].some(val => val === '  ')){
      setBoxs5(demoBoxsConteiner[5].map( (value,index) => value === '  ' ? <span  key={index} className="boxs_click" ></span> : <span  key={index}  className="lose_boxs_click"></span>));
      setBoxs4(
        demoBoxsConteiner[4].map((value, index) => {
          if (value === '  ') {      
              return <span key={index} className="boxs_await " onClick={(e)=>{
            e.target.className= 'boxs_click'
            setBidDefault(bidDefault * 64)
            return resolve()
              }}> <span className="win_sum">{`${bidDefault}fun x 64`}</span></span>
          } else {
            return  <span key={index} className="boxs_await" onClick={(e)=>{
            e.target.className = 'lose_boxs_click'
            alertLose()
            setTimeout(()=>{reload()},4000)
            return reject()
            }} ><span className="win_sum">{`${bidDefault}fun x 64`}</span></span> 
          } 
        })
      );
    }
  });

  await new Promise((resolve, reject) => {
    if (demoBoxsConteiner[0].some(num => num ===' ')){
      setBoxs4(demoBoxsConteiner[4].map( (value,index) => value !== ' ' ? <span  key={index} className="boxs_click" ></span> : <span  key={index}  className="lose_boxs_click"></span>));
      setBoxs3(
        demoBoxsConteiner[3].map((value, index) => {
          if (value !== ' ' ) {      
              return <span key={index} className="boxs_await " onClick={(e)=>{
            e.target.className= 'boxs_click'
            setBidDefault(bidDefault * 7)
            return resolve()
              }}> <span className="win_sum">{`${bidDefault}fun x 7`}</span></span>
          } else {
            return  <span key={index} className="boxs_await" onClick={(e)=>{
            e.target.className = 'lose_boxs_click'
            alertLose()
            setTimeout(()=>{reload()},4000)
            return reject()
            }} ><span className="win_sum">{`${bidDefault}fun x 7`}</span></span> 
          } 
        })
      );
    } else if (demoBoxsConteiner[0].some(val => val === '  ')){
      setBoxs4(demoBoxsConteiner[4].map( (value,index) => value === '  ' ? <span  key={index} className="boxs_click" ></span> : <span  key={index}  className="lose_boxs_click"></span>));
      setBoxs3(
        demoBoxsConteiner[3].map((value, index) => {
          if (value === '  ') {      
              return <span key={index} className="boxs_await " onClick={(e)=>{
            e.target.className= 'boxs_click'
            setBidDefault(bidDefault * 128)
            return resolve()
              }}> <span className="win_sum">{`${bidDefault}fun x 128`}</span></span>
          } else {
            return  <span key={index} className="boxs_await" onClick={(e)=>{
            e.target.className = 'lose_boxs_click'
            alertLose()
            setTimeout(()=>{reload()},4000)
            return reject()
            }} ><span className="win_sum">{`${bidDefault}fun x 128`}</span></span> 
          } 
        })
      );
    }
  });

  await new Promise((resolve, reject) => {
    if (demoBoxsConteiner[0].some(num => num ===' ')){
      setBoxs3(demoBoxsConteiner[3].map( (value,index) => value !== ' ' ? <span  key={index} className="boxs_click" ></span> : <span  key={index}  className="lose_boxs_click"></span>));
      setBoxs2(
        demoBoxsConteiner[2].map((value, index) => {
          if (value !== ' ' ) {      
              return <span key={index} className="boxs_await " onClick={(e)=>{
            e.target.className= 'boxs_click'
            setBidDefault(bidDefault * 8)
            return resolve()
              }}> <span className="win_sum">{`${bidDefault}fun x 8`}</span></span>
          } else {
            return  <span key={index} className="boxs_await" onClick={(e)=>{
            e.target.className = 'lose_boxs_click'
            alertLose()
            setTimeout(()=>{reload()},4000)
            return reject()
            }} ><span className="win_sum">{`${bidDefault}fun x 8`}</span></span> 
          } 
        })
      );
    } else if (demoBoxsConteiner[0].some(val => val === '  ')){
      setBoxs3(demoBoxsConteiner[3].map( (value,index) => value === '  ' ? <span  key={index} className="boxs_click" ></span> : <span  key={index}  className="lose_boxs_click"></span>));
      setBoxs2(
        demoBoxsConteiner[2].map((value, index) => {
          if (value === '  ') {      
              return <span key={index} className="boxs_await " onClick={(e)=>{
            e.target.className= 'boxs_click'
            setBidDefault(bidDefault * 256)
            return resolve()
              }}> <span className="win_sum">{`${bidDefault}fun x 256`}</span></span>
          } else {
            return  <span key={index} className="boxs_await" onClick={(e)=>{
            e.target.className = 'lose_boxs_click'
            alertLose()
            setTimeout(()=>{reload()},4000)
            return reject()
            }} ><span className="win_sum">{`${bidDefault}fun x 256`}</span></span> 
          } 
        })
      );
    }
  });

  await new Promise((resolve, reject) => {
    if (demoBoxsConteiner[0].some(num => num ===' ')){
      setBoxs2(demoBoxsConteiner[2].map( (value,index) => value !== ' ' ? <span  key={index} className="boxs_click" ></span> : <span  key={index}  className="lose_boxs_click"></span>));
      setBoxs1(
        demoBoxsConteiner[1].map((value, index) => {
          if (value !== ' ' ) {      
              return <span key={index} className="boxs_await " onClick={(e)=>{
            e.target.className= 'boxs_click'
            setBidDefault(bidDefault * 9)
            return resolve()
              }}> <span className="win_sum">{`${bidDefault}fun x 9`}</span></span>
          } else {
            return  <span key={index} className="boxs_await" onClick={(e)=>{
            e.target.className = 'lose_boxs_click'
            alertLose()
            setTimeout(()=>{reload()},4000)
            return reject()
            }} ><span className="win_sum">{`${bidDefault}fun x 9`}</span></span> 
          } 
        })
      );
    } else if (demoBoxsConteiner[0].some(val => val === '  ')){
      setBoxs2(demoBoxsConteiner[2].map( (value,index) => value === '  ' ? <span  key={index} className="boxs_click" ></span> : <span  key={index}  className="lose_boxs_click"></span>));
      setBoxs1(
        demoBoxsConteiner[1].map((value, index) => {
          if (value === '  ') {      
              return <span key={index} className="boxs_await " onClick={(e)=>{
            e.target.className= 'boxs_click'
            setBidDefault(bidDefault * 512)
            return resolve()
              }}> <span className="win_sum">{`${bidDefault}fun x 512`}</span></span>
          } else {
            return  <span key={index} className="boxs_await" onClick={(e)=>{
            e.target.className = 'lose_boxs_click'
            alertLose()
            setTimeout(()=>{reload()},4000)
            return reject()
            }} ><span className="win_sum">{`${bidDefault}fun x 512`}</span></span> 
          } 
        })
      );
    }
  });

  await new Promise((resolve, reject) => {
    if (demoBoxsConteiner[0].some(num => num ===' ')){
      setBoxs1(demoBoxsConteiner[1].map( (value,index) => value !== ' ' ? <span  key={index} className="boxs_click" ></span> : <span  key={index}  className="lose_boxs_click"></span>));
      setBoxs0(
        demoBoxsConteiner[0].map((value, index) => {
          if (value !== ' ' ) {      
              return <span key={index} className="boxs_await " onClick={(e)=>{
            e.target.className= 'boxs_click'
            setBidDefault(bidDefault * 10)
            alertWin()
            return resolve()
              }}> <span className="win_sum">{`${bidDefault}fun x 10`}</span></span>
          } else {
            return  <span key={index} className="boxs_await" onClick={(e)=>{
            e.target.className = 'lose_boxs_click'
            alertLose()
            setTimeout(()=>{reload()},4000)
            return reject()
            }} ><span className="win_sum">{`${bidDefault}fun x 10`}</span></span> 
          } 
        })
      );
    } else if (demoBoxsConteiner[0].some(val => val === '  ')){
      setBoxs1(demoBoxsConteiner[1].map( (value,index) => value === '  ' ? <span  key={index} className="boxs_click" ></span> : <span  key={index}  className="lose_boxs_click"></span>));
      setBoxs0(
        demoBoxsConteiner[0].map((value, index) => {
          if (value === '  ') {      
              return <span key={index} className="boxs_await " onClick={(e)=>{
            e.target.className= 'boxs_click'
            setBidDefault(bidDefault * 1024)
            alertWinRa()
            return resolve()
              }}> <span className="win_sum">{`${bidDefault}fun x 1024`}</span></span>
          } else {
            return  <span key={index} className="boxs_await" onClick={(e)=>{
            e.target.className = 'lose_boxs_click'
            alertLose()
            setTimeout(()=>{reload()},4000)
            return reject()
            }} ><span className="win_sum">{`${bidDefault}fun x 1024`}</span></span> 
          } 
        })
      );
    }
  });
};

return (
    <div className="App">
      <header id="header">
      <div className="anubis_header_win" id="anubis_contain_win_alert">
          <div className="anubis_icon_win" id="anubis_icon_win_alert"></div>
          {/* <span>{` Դոք շահեցիք ${bidDefault}fun`}</span> */}
        </div>
        <div className="ra_header_win" id="ra_contain_win_alert">
          <div className="ra_icon_win" id="ra_icon_win_alert"></div>
          {/* <span>{` Դոք շահեցիք ${bidDefault}fun`}</span> */}
        </div>

        <div className="lose_alert" id="lose_alert"><div className="lose_alert_icon"></div></div>

      <span className="anubis_header_contain glow-on-hover-anubis" id="anubis_header_contain" onClick={()=> {
        setChangeTheme(false);
        reload()
      }}> 
        <span className="anubis_icon_contein">
          <span className="anubis_txt">Անուբիս</span>
          </span>
          <span>        
          <ul className="anubis_header_boxs">
          <li className="anubis_boxs_1"></li>
          <li className="anubis_boxs_2"></li>
          <li className="anubis_boxs_3"></li>
          <li className="anubis_boxs_4"></li>
        </ul>
      </span>
      <span className="anubis_icon_header" id="anubis_icon_header"> </span>
    </span>

      <span className="ra_header_contain glow-on-hover-ra" id="ra_header_contain" onClick={()=> {
        setChangeTheme(true);
        reload()
      }}>
          <span className="ra_icon_header" id="anubis_icon_header"> </span>
          <span>        
          <ul className="ra_header_boxs">
          <li className="ra_boxs_1"></li>
          <li className="ra_boxs_2"></li>
          <li className="ra_boxs_3"></li>
          <li className="ra_boxs_4"></li>
        </ul>
      </span>
      <span className="ra_txt">ՌԱ</span>
    </span>
      </header>
  
      <main>
        <section className="section_anubis">
          <div>{box1}</div>
          <div>{box2}</div>
          <div>{box3}</div>
          <div>{box4}</div>
          <div>{box5}</div>
          <div>{box6}</div>
          <div>{box7}</div>
          <div>{box8}</div>
          <div>{box9}</div>
        </section>
      </main>
      <footer>
      <div className="start">
      <div id="hiddenStartContain" className="hiden_start_contain" onClick={()=>{
        if (demoBoxsConteiner[0].some( val => val ===' ' )){
          alertWin()
        }else if (demoBoxsConteiner[0].some( val => val ==='  ' )) {
          alertWinRa()
        }
      }}>{ ` Տանել ${bidDefault}fun շահումը `}</div>
      <div className="startConteiner" id="startContain">
        <div className="bid">
          <div className="bid_plus_minus">
            <button className="bid_plus" onClick={() => setBidDefault(bidDefault - 10)}>-</button>
            <div className="bidDefault">{bidDefault}</div>
            <button className="bid_minus" onClick={() => setBidDefault( bidDefault +10)} >+</button>
          </div>
          <div className="bids_all_conteiner">
            <button className="bids_all" onClick={() => setBidDefault( bidDefault * 2)}>x2</button>
            <button className="bids_all" onClick={() => setBidDefault( bidDefault +50)}>+50</button>
            <button className="bids_all" onClick={() => setBidDefault( bidDefault +250)}>+250</button>
          </div>
        </div>
        <button className="start_btn" onClick={start}>ՍԿՍԵԼ</button>
      </div>
    </div>
      </footer>
    
    </div>
  );
}

export default App;
