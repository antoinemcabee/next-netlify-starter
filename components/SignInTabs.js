import { useRouter } from 'next/router'
import styled from 'styled-components'

export default function SignInTabs({activeTab, pageType }){

    const router = useRouter()
    const clickRedirect = tabTitle => {
        router.push(`/${pageType === 'signin' ? 'auth/' : ''}${pageType}/${tabTitle.toLowerCase()}`)
    }

    const tabTitles = ['Organization', 'Volunteer']

    return (
        <StyledList>
            {tabTitles.map(tabTitle => (
                <ListItem key={tabTitle} onClick={() => clickRedirect(tabTitle)}>
                    {tabTitle === activeTab ? 
                        <ActiveTab>{tabTitle}</ActiveTab> :
                        <StyledTab>{tabTitle}</StyledTab>
                    }
                </ListItem>
            ))}
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
