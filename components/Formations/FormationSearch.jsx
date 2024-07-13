/* Libraries */
import { observer } from 'mobx-react';
/* Components */
import Input from '../Input/Input';

const FormationSearch = observer(({
    store
}) => {
    return (
        <Input
            placeholder = 'Search Formation by title or creator'
            onType = {store.setSearch}
        />
    )
})

export default FormationSearch