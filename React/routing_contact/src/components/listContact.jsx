import { createSlice } from "@reduxjs/toolkit";

const ListContact = createSlice({
    name:"ListContact",
    initialState:{
        contacts:[
            {
                id:"1",
                firstName:"John",
                lastName:"Wick",
                email:"john.wick@keenu.com",
                phoneNumber:"0661215541"
            }
        ]
    },
    reducers:{

    }
})

export default ListContact.reducer