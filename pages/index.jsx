/* Libraries */
import useSWR from 'swr'
/* Styling */
import '../app/globals.css'
/* Components */
import Layout from '@/components/Layout/Layout'
import FormationSearch from '@/components/Formations/FormationSearch'
import Filter from '@/components/Filter/Filter'
import Loader from '@/components/Loader/Loader'
import Formations from '@/components/Formations/Formations'
/* Stores */
import formationStore from '@/stores/FormtationStore'
/* Lib */
import fetcher from '@/lib/fetcher'

export default function Home() {
    const { data, isLoading } = useSWR('/api/formations', fetcher)

    if (data) formationStore.setFormations(data.data)
    
    if (data) console.log(data)

    return (
        <Layout>
            <FormationSearch store={formationStore} />
            <Filter store={formationStore} />
            {isLoading ? <Loader /> : <Formations store={formationStore} />}
        </Layout>
    )
}