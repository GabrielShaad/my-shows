import { OutlinedInput, styled } from '@mui/material'

const SearchSection = styled('section')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    width: '100%',
})

const SearchInput = styled(OutlinedInput)({
    maxWidth: '500px',

    '& input': {
        padding: '1rem',
    },
})

export { SearchSection, SearchInput }
