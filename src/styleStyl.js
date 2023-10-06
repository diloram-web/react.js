import styled, {css} from 'styled-components';


export const Container=styled("div")`
   display:flex;
   background-color:coral;
   color:white;
   padding:20px;
   margin:20px;
`;
export const Button=styled("div")`
background:red;
width:200px;
height:40px;
border-radius:8px;
display:flex;
align-items:center;
justify-content:center;
color:pink;
cursor:pointer;
:active {
    transform: scale(0.97);
    opacity:0.7;
}
`;
const common= css`
   color:blue;
   font-family:bold;
   font-weight:400;
   padding: 10px;
   border:1px solid black;
   height:fit-content;
   font-size:20px;
   margin:10px;
`;

export const Title=styled.h1`
   /* color:blue;
   font-family:bold;
   font-weight:400;
   padding: 10px;
   border:1px solid black;
   height:fit-content; */
   ${common};
   
`;
export const Desc=styled.h1`
 color:{({left}) => left? "red" : "green"};
   /* color:blue;
   font-family:bold;
   font-weight:400;
   padding: 10px;
   border:1px solid black;
   height:fit-content; */
   ${common};
   font-size:28px;
   color:{({left}) => left? "red" : "green"};
   background:{({left}) => (left? 'yellow' : "pink")};
`;

const getSize=(props)=>{
    switch (props.type){
        case "large":
            return '200px';
        case 'medium':
            return '150px';
        case 'small':
            return '100px';
        default:
            return '150px';
    }
};

export const Box=styled.div`
   background:${(props) => props.bg};
   display:flex;
   align-items:center;
   justify-content:center;
   font-size:28px;
   width: ${getSize};
   height: ${getSize};
   /* width: ${(props) => (props.type === 'large'?'200px':"150px")};
   height:${(props) => (props.type === 'large'?'200px':"150px")};*/
   border:2px solid blue;
   margin:10px;
`;
