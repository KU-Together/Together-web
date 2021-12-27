import React,{Fragment,useState} from "react";
import Checkbox from "components/atoms/InputForm/Checkbox";

const Checkbox_back=()=>{
    const [isCheckedA, setIsCheckedA] = useState(false);
    const handleChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {setIsCheckedA(e.target.checked);};
    //    useState
    //      기술에 대한 array ['PHP', 'Node.js', 'React.js'] ... --> 이부분은 왜냐면 기술을 추가 쉽게 추가 가능해야함
    //      useState -> ? -> '
    //      const Something=['PHP', 'Node.js', 'React.js']
    //      useState=(map.)
    //      
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
            <Checkbox handleChange={handleChangeA} isChecked={isCheckedA} id="PHP" label="PHP"/>
            <Checkbox handleChange={handleChangeB} isChecked={isCheckedB} id="NodeJS" label="NodeJS"/>
            <Checkbox handleChange={handleChangeC} isChecked={isCheckedC} id="C++" label="C++"/>
            <Checkbox handleChange={handleChangeD} isChecked={isCheckedD} id="Java" label="Java"/>
            <Checkbox handleChange={handleChangeE} isChecked={isCheckedE} id="Python" label="Python"/>
            <Checkbox handleChange={handleChangeF} isChecked={isCheckedF} id="Express" label="Express"/>
            <Checkbox handleChange={handleChangeG} isChecked={isCheckedG} id="C#" label="C#"/>
            <Checkbox handleChange={handleChangeH} isChecked={isCheckedH} id="django" label="django"/>
            </Fragment>
        
    )
};


export default Checkbox_back;