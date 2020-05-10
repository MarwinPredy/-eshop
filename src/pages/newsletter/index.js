import React, {useState} from 'react';
import './style.css';

const Index = () =>{

    const[inputForm, setInputForm] = useState({
        email:""
    });

    const handleChange = (e) =>{
        setInputForm({
            [e.target.name] : e.target.value
        })
    }

    const submitForm = (e) =>{
        e.preventDefault();
        console.log(inputForm);
    }

    return(
        <div>
            <form onSubmit={submitForm}>
                <input type="email" value={inputForm.email} name="email" onChange={handleChange} placeholder="Votre email"/>
                <button type="submit">
                    S'inscrire
                </button>
            </form>
        </div>
    )
}

export default Index;