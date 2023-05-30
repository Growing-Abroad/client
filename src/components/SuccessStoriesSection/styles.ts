import styled from 'styled-components';


export const SuccessStoriesWrapperSection = styled.section`
    padding: 80px 60px 80px;
    max-width: 1800px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    zoom: 80%;
    transform: scale(.85);


    @media (max-width:430px) {
      padding: 80px 0 133px;
      gap: 30px;
    }
`;
