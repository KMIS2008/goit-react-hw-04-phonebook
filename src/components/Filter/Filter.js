
import {FormFilter,
        InputFilter,
        TitleFilter} from './Filter.styled';


export const FilterConctacts = ({filter, onNameFilter})=>{
return(
    
        <FormFilter>
            <TitleFilter> 
                Find contacts by name
                <InputFilter value={filter} onChange={event=>onNameFilter(event.target.value)}/>
            </TitleFilter>
        </FormFilter>
)

}