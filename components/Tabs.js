/*
* Reference: https://www.youtube.com/watch?v=DWCCkcJgvf0, https://github.com/selfteachme/0025-react-tabbed-component
*/

import { useState } from 'react'
import styled from 'styled-components'

const Tabs = ({tabs}) => {

    const [activeTab, setActiveTab] = useState(tabs[0].title)
    const handleClick = (e, newActiveTab) => {
        e.preventDefault()
        setActiveTab(newActiveTab)
    }

    return (
        <>
            <StyledList>
                {
                    tabs.map(tabTitle => (
                        <StyledAnchor href='#' key={tabTitle.title} onClick={e => handleClick(e, tabTitle.title)}>
                            {
                                tabTitle.title === activeTab ? <ActiveTab>{tabTitle.title}</ActiveTab>
                                : <StyledTab>{tabTitle.title}</StyledTab>
                            }
                        </StyledAnchor>
                    ))
                }
            </StyledList>

            {
                tabs.map(tab => (
                    tab.title == activeTab ?
                        <PageContent key={tab.title}>
                            <SubHeader>{tab.subhead}</SubHeader>
                            <PageContent>{tab.content}</PageContent>
                        </PageContent>
                    : null

                ))
            }
        </>
    )
}

const StyledList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
`
const StyledTab = styled.li`
    padding: .5rem 1rem;
    color: #e1e1e1;
    text-align: center;
    font-weight: 600;
    font-size: 1.25em;
`
const ActiveTab = styled(StyledTab)`
    border-bottom: 4px solid rgba(225,224,225);
`
const PageContent = styled.div`
    padding: 1em 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StyledAnchor = styled.a`
    text-decoration: none;
    width: 100%;
    outline: none;

    &::focus {
        outline: none
    }
`
const SubHeader = styled.h2`
    color: #e1e1e1;
    font-size: 1.25em;
    margin-top:2rem;
`
const StyledParagraph = styled.p`

`

export default Tabs
