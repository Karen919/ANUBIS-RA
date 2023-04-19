
import { useState } from "react";

function Footer() {
    const [name, setName] = useState("");
    let x = true;
    let y = true;
    const bg = ['bg1', 'bg2', 'bg3', 'bg4'];
    let z = 0;
    function handleSubmit(event) {
        event.preventDefault();
        const username = event.target.username.value;
        sessionStorage.setItem("username", username);
        setName(username.toUpperCase().trim());
        document.getElementById('recuest_urerName').style.display = 'none'
    }
    function toggleInfoMode () {
        x ? x = false : x = true
        x ? document.getElementById("info_mode").style.display = 'none' :
            document.getElementById("info_mode").style.display = 'inherit'
            document.getElementById("rules").style.display = 'none' 
    }

    function toggleMode() {
        document.getElementById('body').className = bg[z];
        z === 4 ? z = 0 : z++
    }

    function toggleRules () {
        y ? y = false : y = true;
        y ? document.getElementById("rules").style.display = 'none' : document.getElementById("rules").style.display = 'inherit'
    }
    return (
    <footer className="footer" id="footer">
        <div>
            <div className="username">
            <span>{name}</span>
            <span className=" material-symbols-outlined" onClick={toggleInfoMode}>
                settings
            </span>
        </div>
        <div id="info_mode">
                <div className="settings">կարգավորումներ</div>
                <div className=" material-symbols-outlined info"  onClick={toggleRules}>info <span className="kanon">-կանոններ</span></div>
                <div className=" material-symbols-outlined mode" onClick={toggleMode}>auto_mode <span className="kanon">-ռեժիմ</span></div>
            </div>
        </div>
        <div className="rules" id="rules">
            <p>Անուբիս ՌԱ խաղի նպատակն է գուշակել, թե որ վանդակում է թաքնված հաղթող սիմվոլը:</p>
            <p>Խաղի մակարդակն ընտրելուց հետո մյուս տարբերակը այլևս ակտիվ չի լինի:</p>
            <p>Հասանելի են հետևյալ մակարդակներն</p>
            <p>Չորս վանդակ՝ 3 հաղթող և 1 պարտվող.</p>
            <p>Չորս վանդակ՝ 1 հաղթող և 3 պարտվող.</p>
            <p>Խաղի մակարդակն ընտրելուց հետո խաղացողը պետք է նշի խաղադրույքի չափը և խաղը սկսելու համար սեղմի «Սկսել» կոճակը:</p>
            <p>Յուրաքանչյուր վանդակում թաքնված է կա՛մ հաղթող, կա՛մ պարտվող սիմվոլ: Խաղացողը պետք է յուրաքանչյուր շարքից ընտրի և բացի մեկ վանդակ: Եթե բացված վանդակում հաղթող սիմվոլ է՝ խաղացողը հաղթում է, և հաջորդ շարքը դառնում է ակտիվ, իսկ եթե վանդակում պարտվող սիմվոլ է՝ խաղացողը պարտվում է: Տվյալ դեպքում մնացած վանդակներն ավտոմատ կերպով բացվում են, և սկսվում է նոր խաղափուլ:</p>
        </div>
        <div className="recuest_urerName" id="recuest_urerName">
        <div className="material-symbols-outlined close" onClick={()=>{ document.getElementById('recuest_urerName').style.display = 'none'}}>close</div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" />
                <input type="submit" value="Submit" className="submit" />
            </form>
        </div>
    </footer>
    );
}

export default Footer;
