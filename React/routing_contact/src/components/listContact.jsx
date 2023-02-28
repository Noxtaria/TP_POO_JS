import { createSlice } from "@reduxjs/toolkit";

const ListContact = createSlice({
    name:"ListContact",
    initialState:{
        contacts:[
            {
                id:"1",
                firstName:"John",
                lastName:"WICK",
                email:"john.wick@keenu.com",
                phoneNumber:"0661215541"
            },
            {
                id:"2",
                firstName:"Vincent",
                lastName:"TIM",
                email:"Vincent@lepauvre.com",
                phoneNumber:"0710274137"
            },
            {
                id:"3",
                firstName:"example",
                lastName:"TEST",
                email:"example@test.fr",
                phoneNumber:"0123456789"
            },
            {
                id:"4",
                firstName:"Jean",
                lastName:"YVES",
                email:"jyves@hotmail.fr",
                phoneNumber:"7412589630"
            }
        ]
    },
    reducers:{

    }
})

export default ListContact.reducer