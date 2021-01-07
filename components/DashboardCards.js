import styled from 'styled-components'

export default function DashboardCards({content}) {
    return (
        <BG>
            <IconContainer/>
            <Title>{content.title}</Title>
            <Content>{content.description}</Content>
        </BG>
    )
}

const BG = styled.div`
    background: #175695;
    text-align: left;
    height: 7rem;
    margin-bottom: 2rem;
    border-radius: 10px;
    padding: 1px 2rem 1rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Title = styled.h3`
    color: #fff;
    font-weight: 400;
`

const Content = styled.p`
    color: #fff;
    font-weight: 100;
    font-size: 11px;
`

const IconContainer = styled.div`
    width: 3rem;
    height: 3rem;
    background: #ff4545;
    position: absolute;
    margin-bottom: 6rem;
    left: 75%;
    border-radius: 10px;
    box-shadow: 0 4px 3px rgba(0,0,0,0.3)
`