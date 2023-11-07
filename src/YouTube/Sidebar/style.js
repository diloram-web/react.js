import styled from "styled-components";


export const Container=styled.div`
  background:#444444;
  display:flex;
  flex-direction:column;
  width:300px;
  height:100vh;
  overflow-y:scroll;
`;


export const Wrapper=styled.div`
   border-bottom:1px solid rgba(255,255,255,0.2);
   padding:10px 0;

`;
export const ItemWrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
`;
export const Title=styled.div`
   font-family:Roboto;
   font-style:normal;
   font-weight:normal;
   font-size:18px;
   height:40px;
   line-height:20px;
   padding-top:10px;
   margin-left:24px;
   color:${({title})=>(title? 'rgba(255,255,255,0.6)' : '#FFFFFF')};

`;

