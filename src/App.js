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
  for (let i = 0; i < 9; i++) {
    demoBoxsConteiner[i][Math.floor((Math.random() *4))] =  ' ';
  }
const[box1,setBoxs0] =  useState(demoBoxsConteiner[0].map( (value,index) => value !== ' ' ? <span  key={index} className="boxs" ></span> : <span  key={index}  className="lose_boxs"></span>))
const[box2,setBoxs1] =  useState(demoBoxsConteiner[1].map( (value,index) => value !== ' ' ? <span  key={index} className="boxs" ></span> : <span  key={index}  className="lose_boxs"></span>))
const[box3,setBoxs2] =  useState(demoBoxsConteiner[2].map( (value,index) => value !== ' ' ? <span  key={index} className="boxs" ></span> : <span  key={index}  className="lose_boxs"></span>))
const[box4,setBoxs3] =  useState(demoBoxsConteiner[3].map( (value,index) => value !== ' ' ? <span  key={index} className="boxs" ></span> : <span  key={index}  className="lose_boxs"></span>))
const[box5,setBoxs4] =  useState(demoBoxsConteiner[4].map( (value,index) => value !== ' ' ? <span  key={index} className="boxs" ></span> : <span  key={index}  className="lose_boxs"></span>))
const[box6,setBoxs5] =  useState(demoBoxsConteiner[5].map( (value,index) => value !== ' ' ? <span  key={index} className="boxs" ></span> : <span  key={index}  className="lose_boxs"></span>))
const[box7,setBoxs6] =  useState(demoBoxsConteiner[6].map( (value,index) => value !== ' ' ? <span  key={index} className="boxs" ></span> : <span  key={index}  className="lose_boxs"></span>))
const[box8,setBoxs7] =  useState(demoBoxsConteiner[7].map( (value,index) => value !== ' ' ? <span  key={index} className="boxs" ></span> : <span  key={index}  className="lose_boxs"></span>))
const[box9,setBoxs8] =  useState(demoBoxsConteiner[8].map( (value,index) => value !== ' ' ? <span  key={index} className="boxs" ></span> : <span  key={index}  className="lose_boxs"></span>))

function reload() {
  setBoxs0(demoBoxsConteiner[0].map( (value,index) => value !== ' ' ? <span  key={index} className="boxs" ></span> : <span  key={index}  className="lose_boxs"></span>))
  setBoxs1(demoBoxsConteiner[1].map( (value,index) => value !== ' ' ? <span  key={index} className="boxs" ></span> : <span  key={index}  className="lose_boxs"></span>))
  setBoxs2(demoBoxsConteiner[2].map( (value,index) => value !== ' ' ? <span  key={index} className="boxs" ></span> : <span  key={index}  className="lose_boxs"></span>))
  setBoxs3(demoBoxsConteiner[3].map( (value,index) => value !== ' ' ? <span  key={index} className="boxs" ></span> : <span  key={index}  className="lose_boxs"></span>))
  setBoxs4(demoBoxsConteiner[4].map( (value,index) => value !== ' ' ? <span  key={index} className="boxs" ></span> : <span  key={index}  className="lose_boxs"></span>))
  setBoxs5(demoBoxsConteiner[5].map( (value,index) => value !== ' ' ? <span  key={index} className="boxs" ></span> : <span  key={index}  className="lose_boxs"></span>))
  setBoxs6(demoBoxsConteiner[6].map( (value,index) => value !== ' ' ? <span  key={index} className="boxs" ></span> : <span  key={index}  className="lose_boxs"></span>))
  setBoxs7(demoBoxsConteiner[7].map( (value,index) => value !== ' ' ? <span  key={index} className="boxs" ></span> : <span  key={index}  className="lose_boxs"></span>))
  setBoxs8(demoBoxsConteiner[8].map( (value,index) => value !== ' ' ? <span  key={index} className="boxs" ></span> : <span  key={index}  className="lose_boxs"></span>))
  setBidDefault(0)
  document.getElementById('header').className = ' '
  document.getElementById('anubis_icon_header').className = 'anubis_icon_header';
  document.getElementById('startContain').style.display = 'flex';
  document.getElementById('hiddenStartContain').style.display= 'none'

}

function alertLose (){
          document.getElementById('header').className = 'header_click'
          document.getElementById('anubis_icon_header').className = 'anubis';
          
}

function alertWin() {
  document.getElementById('anubis_icon_header').className = 'anubis_icon_win'
  document.getElementById('header').style.backgroundColor = 'gren'
  document.getElementById('header').className = 'header_win'
  setTimeout(()=>{reload()},4000)
}
async function start() {
  await new Promise((resolve, reject) => {
    setBoxs8(
      demoBoxsConteiner[8].map((value, index) => {
        if (value !== ' ') {      
            return <span key={index} className="boxs_await " onClick={(e)=>{
          e.target.className= 'boxs_click'
          setBidDefault(bidDefault * 2)
          return resolve()
            }}></span>
        } else {
          return  <span key={index} className="boxs_await" onClick={(e)=>{
          e.target.className = 'lose_boxs_click'
          alertLose()
          setTimeout(()=>{reload()},4000)
          return reject()

          }} ></span> 
        } 
      })
    );
  });
  await new Promise((resolve, reject) => {
    document.getElementById('startContain').style.display = 'none';
    document.getElementById('hiddenStartContain').style.display= 'inherit'
    setBoxs8(demoBoxsConteiner[8].map( (value,index) => value !== ' ' ? <span  key={index} className="boxs_click" ></span> : <span  key={index}  className="lose_boxs_click"></span>));
    setBoxs7(
      demoBoxsConteiner[7].map((value, index) => {
        if (value !== ' ') {      
            return <span key={index} className="boxs_await " onClick={(e)=>{
          e.target.className= 'boxs_click'
          setBidDefault(bidDefault*3)
          
          return resolve()
            }}></span>
        } else {
          return  <span key={index} className="boxs_await" onClick={(e)=>{
          e.target.className = 'lose_boxs_click'
          alertLose()

          setTimeout(()=>{reload()},4000)

          return reject()

          }} ></span> 
        } 
      })
    );
  });
  await new Promise((resolve, reject) => {
    setBoxs7(demoBoxsConteiner[7].map( (value,index) => value !== ' ' ? <span  key={index} className="boxs_click" ></span> : <span  key={index}  className="lose_boxs_click"></span>));
    setBoxs6(
      demoBoxsConteiner[6].map((value, index) => {
        if (value !== ' ') {      
            return <span key={index} className="boxs_await " onClick={(e)=>{
          e.target.className= 'boxs_click'
          setBidDefault(bidDefault*4)

          return resolve()
            }}></span>
        } else {
          return  <span key={index} className="boxs_await" onClick={(e)=>{
          e.target.className = 'lose_boxs_click';
          alertLose()

          setTimeout(()=>{reload()},4000)

          return reject()

          }} ></span> 
        } 
      })
    );
  });

  await new Promise((resolve, reject) => {
    setBoxs6(demoBoxsConteiner[6].map( (value,index) => value !== ' ' ? <span  key={index} className="boxs_click" ></span> : <span  key={index}  className="lose_boxs_click"></span>));
    setBoxs5(
      demoBoxsConteiner[5].map((value, index) => {
        if (value !== ' ') {      
            return <span key={index} className="boxs_await " onClick={(e)=>{
          e.target.className= 'boxs_click'
          setBidDefault(bidDefault*5)

          return resolve()
            }}></span>
        } else {
          return  <span key={index} className="boxs_await" onClick={(e)=>{
          e.target.className = 'lose_boxs_click';
          alertLose()

          setTimeout(()=>{reload()},4000)

          return reject()

          }} ></span> 
        } 
      })
    );
  });
  
  await new Promise((resolve, reject) => {
    setBoxs5(demoBoxsConteiner[5].map( (value,index) => value !== ' ' ? <span  key={index} className="boxs_click" ></span> : <span  key={index}  className="lose_boxs_click"></span>));
    setBoxs4(
      demoBoxsConteiner[4].map((value, index) => {
        if (value !== ' ') {      
            return <span key={index} className="boxs_await " onClick={(e)=>{
          e.target.className= 'boxs_click'
          setBidDefault(bidDefault*6)

          return resolve()
            }}></span>
        } else {
          return  <span key={index} className="boxs_await" onClick={(e)=>{
          e.target.className = 'lose_boxs_click'
          alertLose()

          setTimeout(()=>{reload()},4000)

          return reject()

          }} ></span> 
        } 
      })
    );
  });

  await new Promise((resolve, reject) => {
    setBoxs4(demoBoxsConteiner[4].map( (value,index) => value !== ' ' ? <span  key={index} className="boxs_click" ></span> : <span  key={index}  className="lose_boxs_click"></span>));
    setBoxs3(
      demoBoxsConteiner[3].map((value, index) => {
        if (value !== ' ') {      
            return <span key={index} className="boxs_await " onClick={(e)=>{
          e.target.className= 'boxs_click'
          setBidDefault(bidDefault*7)

          return resolve()
            }}></span>
        } else {
          return  <span key={index} className="boxs_await" onClick={(e)=>{
          e.target.className = 'lose_boxs_click'
          alertLose()

          setTimeout(()=>{reload()},4000)

          return reject()

          }} ></span> 
        } 
      })
    );
  });

  await new Promise((resolve, reject) => {
    setBoxs3(demoBoxsConteiner[3].map( (value,index) => value !== ' ' ? <span  key={index} className="boxs_click" ></span> : <span  key={index}  className="lose_boxs_click"></span>));
    setBoxs2(
      demoBoxsConteiner[2].map((value, index) => {
        if (value !== ' ') {      
            return <span key={index} className="boxs_await " onClick={(e)=>{
          e.target.className= 'boxs_click'
          setBidDefault(bidDefault*8)

          return resolve()
            }}></span>
        } else {
          return  <span key={index} className="boxs_await" onClick={(e)=>{
          e.target.className = 'lose_boxs_click'
          alertLose()

          setTimeout(()=>{reload()},4000)

          return reject()

          }} ></span> 
        } 
      })
    );
  });

  await new Promise((resolve, reject) => {
    setBoxs2(demoBoxsConteiner[2].map( (value,index) => value !== ' ' ? <span  key={index} className="boxs_click" ></span> : <span  key={index}  className="lose_boxs_click"></span>));
    setBoxs1(
      demoBoxsConteiner[1].map((value, index) => {
        if (value !== ' ') {      
            return <span key={index} className="boxs_await " onClick={(e)=>{
          e.target.className= 'boxs_click'
          setBidDefault(bidDefault*9)

          return resolve()
            }}></span>
        } else {
          return  <span key={index} className="boxs_await" onClick={(e)=>{
          e.target.className = 'lose_boxs_click'
          alertLose()

          setTimeout(()=>{reload()},4000)

          return reject()
          }} ></span> 
        } 
      })
    );
  });

  await new Promise((resolve, reject) => {
    setBoxs1(demoBoxsConteiner[1].map( (value,index) => value !== ' ' ? <span  key={index} className="boxs_click" ></span> : <span  key={index}  className="lose_boxs_click"></span>));
    setBoxs0(
      demoBoxsConteiner[0].map((value, index) => {
        if (value !== ' ') {      
            return <span key={index} className="boxs_await " onClick={(e)=>{
          e.target.className= 'boxs_click'
          return resolve()
            }}></span>
        } else {
          return  <span key={index} className="boxs_await" onClick={(e)=>{
          e.target.className = 'lose_boxs_click'
          alertLose()

          setTimeout(()=>{reload()},4000)
          return reject()
          }} ></span> 
        } 
      })
    );
  });

};

return (
    <div className="App">
      <header id="header">
        <span className="anubis_icon_contein">
          <span className="anubis_txt">Անուբիս</span>
          </span>
          <span className="anubis_icon_header" id="anubis_icon_header"> </span>
          <span>        
          <ul className="anubis_header_boxs">
          <li className="anubis_boxs_1"></li>
          <li className="anubis_boxs_2"></li>
          <li className="anubis_boxs_3"></li>
          <li className="anubis_boxs_4"></li>
        </ul>
        <button className="material-symbols-outlined acordion">arrow_downward</button>
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
      <div id="hiddenStartContain" className="hiden_start_contain" onClick={alertWin}>{ ` վերցնել ${bidDefault} շահումը `}</div>
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
