import styled from "styled-components";

export const Button = styled.button.attrs({
    type: "button",
 })`
     background-image: linear-gradient(90deg, rgba(38,102,173,1) 38%, rgba(3,240,190,1) 100%);
     padding: 12px 20px 12px 20px;
     color: #FFF;
     border: 2px solid;
     border-radius: 25px;
     font-weight: bold;
     outline: none;
     cursor: pointer;
     &:hover{
        background: transparent;
        color: #2666ad;
        border: 2px solid #2666ad;
     }
 
 `
 export const DisabledButton = styled(Button)`
   opacity: 45%;
   cursor: default;
    &:hover{
        background-image: linear-gradient(90deg, rgba(38,102,173,1) 38%, rgba(3,240,190,1) 100%);
        color: #FFF;
        border: 2px solid;
    }
 `
 export const FilterButton = styled(Button)`
    padding: 5px 12px 5px 12px;
    margin-top: 26px;
    margin-left: 6px;
 `
 