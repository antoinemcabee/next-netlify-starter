import styled from 'styled-components'

const renderItems = (items) => {
    return (
        <Padding>
            {
                items.map((item, idx) => (
                    <StyledItem key={idx}>{ item.name }</StyledItem>
                ))
            }
        </Padding>
                
    )
}

export default function UpcomingEvents({ items, title }) {
    return (
        <ComponentWrapper>
            <Title>{ title }</Title>
            <Container>{ renderItems(items) }</Container>
        </ComponentWrapper>
    )
}

const ComponentWrapper = styled.div`
    text-align: left;
    position: relative;
    top: 25%;
`

const Title = styled.h2`
    color: #222831;
    font-size: 17px;
    font-weight: 400;
    margin-bottom: 5px;
    padding-left: 5px;
`
const Container = styled.div`
    display: flex;
    background-color: #fff;
    width: 100%;
    height: 8rem;
    box-shadow: 0px 5px 5px rgba(0,0,0,0.3);
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    /* padding: 5px; */
    overflow: auto;
`

const StyledItem = styled.div`
    background: #189AA5;
    min-width: 110px;
    border-radius: 15px;
    margin: 5px;
    color: #fff;
    padding: 10px;
`

const Padding = styled.div`
    display: flex;
    width: 95%;
    height: 90%;
    margin:  0 5px 0 5px;
    overflow: auto;
    overflow-y: none;

    ::-webkit-scrollbar {
        display: none
    }
`