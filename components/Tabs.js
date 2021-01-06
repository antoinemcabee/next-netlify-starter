/*
* Reference: https://www.youtube.com/watch?v=DWCCkcJgvf0, https://github.com/selfteachme/0025-react-tabbed-component
*/

import { useCallback } from 'react'
import styled from 'styled-components'

const Tabs = ({tabData}) => {
    const [tabTitles, activeTab, setActiveTab] = tabData

    const handleClick = useCallback((e, i) => {
        e.preventDefault()
        setActiveTab(i)
    })

    return (
        <StyledList>
            {
                tabTitles.map((tabTitle, i) => (
                    <ListItem key={i} onClick={e => handleClick(e, i)}>
                        {
                            tabTitle === tabTitles[activeTab] ? <ActiveTab>{tabTitle}</ActiveTab> :
                            <StyledTab>{tabTitle}</StyledTab>
                        }
                    </ListItem>
                ))
            }
        </StyledList>
    )
}

const StyledList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
    width: 100%;
`
const ListItem = styled.div`
    width: 100%;
`
const StyledTab = styled.li`
    padding: .5rem 1rem;
    color: #e1e1e1;
    text-align: center;
    font-weight: 600;
    font-size: 1.25em;
    width: 100%;
    outline: none;
    text-decoration: none;
    cursor: pointer;
`
const ActiveTab = styled(StyledTab)`
    border-bottom: 4px solid rgba(225,224,225);

    &:hover {
        text-decoration: none;
    }
`
const Styled = styled.div`
    width: 100%;
    outline: none;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
        text-decoration-color: white;
    }
`
export default Tabs
