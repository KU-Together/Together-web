import React,{Fragment,useState} from "react";
import Checkbox from "components/atoms/InputForm/Checkbox";

const Checkbox_front=()=>{
    const [isCheckedA, setIsCheckedA] = useState(false);
    const handleChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {setIsCheckedA(e.target.checked);};

    const [isCheckedB, setIsCheckedB] = useState(false);
    const handleChangeB = (e: React.ChangeEvent<HTMLInputElement>) => {setIsCheckedB(e.target.checked);};

    const [isCheckedC, setIsCheckedC] = useState(false);
    const handleChangeC = (e: React.ChangeEvent<HTMLInputElement>) => {setIsCheckedC(e.target.checked);};

    const [isCheckedD, setIsCheckedD] = useState(false);
    const handleChangeD = (e: React.ChangeEvent<HTMLInputElement>) => {setIsCheckedD(e.target.checked);};

    const [isCheckedE, setIsCheckedE] = useState(false);
    const handleChangeE = (e: React.ChangeEvent<HTMLInputElement>) => {setIsCheckedE(e.target.checked);};

    const [isCheckedF, setIsCheckedF] = useState(false);
    const handleChangeF = (e: React.ChangeEvent<HTMLInputElement>) => {setIsCheckedF(e.target.checked);};

    const [isCheckedG, setIsCheckedG] = useState(false);
    const handleChangeG = (e: React.ChangeEvent<HTMLInputElement>) => {setIsCheckedG(e.target.checked);};

    const [isCheckedH, setIsCheckedH] = useState(false);
    const handleChangeH = (e: React.ChangeEvent<HTMLInputElement>) => {setIsCheckedH(e.target.checked);};


    return(
        <Fragment>
            <Checkbox handleChange={handleChangeA} isChecked={isCheckedA} id="HTML" label="HTML"/>
            <Checkbox handleChange={handleChangeA} isChecked={isCheckedB} id="CSS" label="CSS"/>
            <Checkbox handleChange={handleChangeB} isChecked={isCheckedC} id="Javascript" label="Javascript"/>
            <Checkbox handleChange={handleChangeC} isChecked={isCheckedD} id="React" label="React"/>
            <Checkbox handleChange={handleChangeD} isChecked={isCheckedE} id="AngularJS" label="AngularJS"/>
            <Checkbox handleChange={handleChangeE} isChecked={isCheckedF} id="ReactJS" label="ReactJS"/>
            <Checkbox handleChange={handleChangeF} isChecked={isCheckedG} id="Bootstrap" label="Bootstrap"/>
            <Checkbox handleChange={handleChangeG} isChecked={isCheckedH} id="Typescript" label="Typescript"/>
        </Fragment>
    )
};

//const frontend=['HTML','CSS','Javascript','React','AngularJS','ReactJS','Bootstrap','Typescript'];
//const backend=['PHP','Node.js','C++','Java','Python','Express','Laravel','C#','django']; 

export default Checkbox_front;