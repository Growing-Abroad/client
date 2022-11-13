import * as S from './styles'

function WorkInCard(props: CardProps) {
    return (
        <S.Card>
            <h2>{props.title}</h2>
            <img src={props.photo} alt="Photo" />
            <article>{props.description}</article>
        </S.Card>
    )
}

export type CardProps = {
    title: string,
    photo: string,
    description: string,
}

export default WorkInCard