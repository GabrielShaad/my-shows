import { Search as SearchIcon } from '@mui/icons-material'
import { SearchInput, SearchSection } from './Search.styles'

function Search() {
    return (
        <>
            <SearchSection>
                <SearchInput
                    placeholder="Pesquise por suas séries..."
                    fullWidth
                    startAdornment={<SearchIcon />}
                />
            </SearchSection>
        </>
    )
}

export default Search
