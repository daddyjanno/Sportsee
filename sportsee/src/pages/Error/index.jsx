import {
    StyledContainer,
    StyledLink,
    StyledText,
    StyledTitle,
} from '../../styles/Error'

function Error() {
    console.log('ERROR')
    return (
        <StyledContainer>
            <StyledTitle>404</StyledTitle>
            <StyledText>
                Oups! La page que vous demandez n'existe pas.
            </StyledText>
            <StyledLink to="/">Retourner sur la page d’accueil</StyledLink>
        </StyledContainer>
    )
}

export default Error
