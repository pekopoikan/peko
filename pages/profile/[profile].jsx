/* Libraries */
import useSWR from 'swr'
/* Styling */
import '@/app/globals.css'
/* Components */
import Layout from '@/components/Layout/Layout'
import Loader from '@/components/Loader/Loader'
import ProfileBanner from '@/components/ProfileBanner/ProfileBanner'
/* Stores */
import formationStore from '@/stores/FormtationStore'
/* Lib */
import fetcher from '@/lib/fetcher'
import { useRouter } from 'next/router'

export default function Profile() {
    const router = useRouter()

    const { profile } = router.query

    const { data, error, isLoading } = useSWR(`/api/profile/${profile}`, fetcher)

    if (data) console.log(data)
    
    if (error) console.log(error)

    return (
        <Layout>
            {(isLoading || data.type == 'fail') && <Loader />}
            {!isLoading && data.type == 'ok' && (
                <ProfileBanner profile={data.data} />
            )}
        </Layout>
    )
}