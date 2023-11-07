import { ReactComponent as  home } from "../assets/icons/home-line-svgrepo-com.svg";
import { ReactComponent as  kompas} from "../assets/icons/compass-svgrepo-com.svg";
import { ReactComponent as  abonent} from "../assets/icons/video-library-svgrepo-com.svg";
import styled from "styled-components";


const Icons = styled.div`
  /* width:12px;
  height:12px; */

`;

Icons.Home = styled(home)`
  width:22px;
  height:22px;
`;
Icons.Kompas = styled(kompas)`
  width:22px;
  height:22px;
`;
Icons.Abonent = styled(abonent)`
  width:22px;
  height:22px;
`;
export const sidebar= [
    {
        id:1,
        
         
         data:[
            {id:1,title:"Home",icon: Icons.Home},
            {id:2,title:"Explore",icon: Icons.Kompas},
            {id:3,title:"Subscription",icon: Icons.Abonent},
        ],
        
        },
    
        {
            id:2,
            
        
             data:[
                {id:1,title:"Library",icon: Icons.Home},
                {id:2,title:"History",icon: Icons.Home},
                {id:3,title:"Your videos",icon: Icons.Home},
                {id:4,title:"Watch Later",icon: Icons.Home},
                {id:5,title:"Liked Videos",icon: Icons.Home},
                {id:6,title:"Show More",icon: Icons.Home},
            ],
            
            },
        
            {
                id:3,
                
                 title:'Subscription',
                 data:[
                    {id:1,title:"WebBrain Academy",icon: Icons.Home},
                    {id:2,title:"WebBrain Academy",icon: Icons.Home},
                    {id:3,title:"WebBrain Academy",icon: Icons.Home},
                    {id:4,title:"WebBrain Academy",icon: Icons.Home},
                    {id:5,title:"WebBrain Academy",icon: Icons.Home},
                    {id:6,title:"WebBrain Academy",icon: Icons.Home},
                    {id:7,title:"WebBrain Academy",icon: Icons.Home},
                    {id:8,title:"WebBrain Academy",icon: Icons.Home},
                ],
                
                },
                
                {
                    id:4,
                    
                     title:'More From YouTube',
                     data:[
                        {id:1,title:"YouTube Premium",icon: Icons.Home},
                        {id:2,title:"Settings",icon: Icons.Home},
                        {id:3,title:"Help",icon: Icons.Home},
                        {id:4,title:"Report",icon: Icons.Home},
                        {id:5,title:"Home",icon: Icons.Home},
                        {id:6,title:"Home",icon: Icons.Home},
                        {id:7,title:"Home",icon: Icons.Home},
                        {id:8,title:"Home",icon: Icons.Home},
                    ],
                    
                    },
                
    ]