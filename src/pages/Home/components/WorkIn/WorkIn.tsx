import * as S from './styles'
import studentHat from '../../../../assets/Photos Main Page/Growing Abroad Education_Canva.png'
import worldPicture from '../../../../assets/Photos Main Page/Growing Abroad Earth_Canva.png'
import expertPicture from '../../../../assets/Photos Main Page/Growing Abroad Experts_Canva.png'

import WorkInCard from './WorkInCard'

const mockText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sed commodi architecto dolorem et cumque quia aspernatur error ab officiis animi id, ex laborum tempora voluptate quaerat. Quae, enim culpa!"

function WorkIn() {
    return (
        <S.Container>
            
            <h1 className="title">
                Work in <span>EUROPE</span> or <span>GERMANY</span>
            </h1>

            <S.CardSpace>
                <WorkInCard 
                title='Student or professional' 
                photo={studentHat} 
                description={mockText} 
                />
                <WorkInCard 
                title='Start your new life in Europe' 
                photo={worldPicture} 
                description={mockText} 
                />
                <WorkInCard 
                title='Start your new life in Europe' 
                photo={expertPicture} 
                description={mockText} 
                />
            </S.CardSpace>
        </ S.Container>
    )

}

export default WorkIn