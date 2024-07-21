import { Badge } from '@chakra-ui/react'


interface props{
    criticScore:number
}

const CriticScore = ({criticScore}:props) => {
  
    let color=(criticScore>75)? "green":(criticScore>50)? "yellow":" ";
  
    return (
    
    <div>
        <Badge colorScheme={color} fontSize={14} borderRadius={"4px"} paddingX={2}>{criticScore}</Badge>
    </div>
  )
}

export default CriticScore