// import { useEffect, useState } from "react";
// import {EmojiContainer, Emoji} from "./Emoji.styled"

// interface EmojiTransitionProps {
//     rating: number;
// }

// const EmojiTransition = ({rating}: EmojiTransitionProps) => {
//     const [emoji, setEmoji] = useState("😐");

//     useEffect(()=> {
//         let NewEmoji;
        
//         if (rating === 5 ) {
//             NewEmoji = '😁'
//         } else if (rating >= 3){
//             NewEmoji = '😐'
//         } else {
//             // Avaliação menor que 3          
//             NewEmoji = '😔' 
//         }
        
//         setEmoji(NewEmoji)
//     }, [rating]);

//     return (
//         <EmojiContainer>
//           <Emoji>{emoji}</Emoji>
//         </EmojiContainer>
//     );
// }

// export default EmojiTransition;