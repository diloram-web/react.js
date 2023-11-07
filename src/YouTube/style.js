import styled from "styled-components";
import {ReactComponent as burger} from '../assets/icons/menu.svg';
import {ReactComponent as search} from '../assets/icons/search.svg';
import {ReactComponent as bell} from '../assets/icons/bell.svg';
import {ReactComponent as video} from '../assets/icons/video-add-fill-svgrepo-com.svg';
import {ReactComponent as menu} from '../assets/icons/menudots.svg';
import {ReactComponent as voice} from '../assets/icons/voice.svg';

export const Container=styled.div`
  display:flex;
  flex-direction: ${({flex})=> !flex && 'column'};
  background:#505050;
  /* height:100vh; */
  color:#FFFFFF;
  padding: ${({flex})=> !flex && '0 30px'};
`;

export const Wrapper =styled.div`
  display:flex;
  height:60px;
  align-items:center;
  justify-content:space-between;
  position:sticky;
  top:0;
  background:#505050;


`;
export const Category =styled.div`
   display:flex;
   flex:1;
   align-items:center;
   justify-content:${({end})=> end && 'flex-end'}
   
`;

export const Icons=styled.div`
  

`;
export const Category1=styled.div`
  padding-right:20px;
  border:1px solid grey;
  border-radius:50%;
  width:40px;
  height:40px;
  align-items:center;
  justify-content:center;

`;

Icons.Burger=styled(burger)`
  width:28px;
  height:28px;
 
  
`;
 Icons.Voice=styled(voice)`
  width:24px;
  height:24px;
  justify-content:center;
  margin:6px;
  cursor:pointer;
  
`;
Icons.Bell=styled(bell)`
  width:24px;
  height:24px;
  margin-left:20px;
  
`;
Icons.Video=styled(video)`
  width:24px;
  height:24px;
  margin-left:20px;
  
`;
Icons.Menu=styled(menu)`
  width:20px;
  height:20px;
  margin-left:20px;
  
`;


Icons.Logo =styled.img`
  width:120px;
  height:46px;

`;
Icons.Search =styled(search)`
  width:65px;
  height:40px;
  background:rgba(255,255,255, 0.2);
  border-radius:0px 2px 2px 0px;
  padding:10px 20px;
  cursor:pointer;

`;

export const Input = styled.input`
  height:40px;
  background:#000000;
  border:1px solid rgba(255, 255, 255, 0.2);
  max-width:500px;
  width:500px;
  box-sizing:border-box;
  font-size:18px;
  border-radius:2px 0px 0px 2px;
  color:rgba(255, 255, 255, 0.6);
  padding-left:10px;
  :focus {
    outline: none;
  }

`;


export const User= styled.img`
 width:40px;
 height:40px;
 border-radius:50%;
 margin-left:20px;

`;