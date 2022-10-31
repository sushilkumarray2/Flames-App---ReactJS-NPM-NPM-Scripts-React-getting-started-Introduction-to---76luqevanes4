import React, {Component, useState} from "react";

import '../styles/App.css';


 

const App = () => {

       

    const [yourName, setYourName] = useState('')

    const [friendName, setFriendName] = useState('')

    const [ans, setAns] = useState('')

    let flames = ["Siblings","Friends","Love","Affection","Marriage","Enemy"]

   

    const handleResult = () => {

        if(yourName === '' || friendName === '') {

            setAns('Please Enter valid input')

            return

        }


 

        let first = yourName.replace(/\s+/g, '').toLowerCase();

        let second = friendName.replace(/\s+/g, '').toLowerCase();

       

        // const m1 = new Map();

        // for(let i = 0; i < first.length; i++) {

        //     if(m1.has(first.charAt(i))) {

        //         let of = m1.get(first.charAt(i))

        //         let nf = of + 1;

        //         m1.set(first.charAt(i), nf)

        //     }

        //     else {

        //         m1.set(first.charAt(i), 1)

        //     }

        // }

        // for(let i = 0; i < second.length; i++) {

        //     if(m1.has(second.charAt(i))) {

        //         let of = m1.get(second.charAt(i))

        //         if(of == 0) {

        //             let nf = of+1

        //             m1.set(second.charAt(i), nf)

        //         }else {

        //             let nf = of - 1;

        //             m1.set(second.charAt(i), nf)

        //         }  

        //     }

        //     else {

        //         m1.set(second.charAt(i), 1)

        //     }

        // }

        for(let i=0;i<first.length;i++){

            for(let j=0;j<second.length;j++){

                if(first.charAt(i)===second.charAt(j)){

                    first = first.substring(0,i) + first.substring(i+1,first.length);

       

                    second = second.substring(0,j)+second.substring(j+1,second.length);

                    i--;

                }

            }

        }


 

        // console.log(m1.entries())

        // let size = 0;

        // for(let [key, value] of m1) {

        //     if(value > 0) {

        //         // console.log(key)

        //         size++

        //     }

        // }

        let size = first.length + second.length

        let idx = size % 6


 

        setAns(flames[idx])

    }


 

    const handleClear = () => {

        // console.log(yourName)

        setYourName('')

        // console.log(friendName)

        setFriendName('')

        setAns('')

    }


 

    return(

        <div id="main">

            {/* <h1>Flames Game</h1> */}

           <input data-testid="input1" type="text" value={yourName} placeholder="First Name" onChange={(e) => setYourName(e.target.value)}></input> <br></br> <br></br>

           <input data-testid="input2" type="text" value={friendName} placeholder="Second Name" onChange={(e) => setFriendName(e.target.value)}></input> <br></br> <br></br>

           <button data-testid="calculate_relationship" onClick={handleResult}>Calculate Relationship Future</button>

           <button data-testid="clear" onClick={handleClear}>Clear</button>

           <h3 data-testid="answer">{ans}</h3>

        </div>

    )

   

}



 

export default App;
