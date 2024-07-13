/* Lib */
import prisma from '@/lib/prisma';
import { headers } from 'next/headers';

export default async function handler(
    req,
    res
) {
    const { profile } = req.query

    try {
        const userProfile = await prisma.profile.findUnique({
            where: {
                profile_name: profile
            },
        })

        const userFormations = await prisma.formations.findMany({
            where: {
                formation_creator: profile
            }
        })

        if (userProfile) res.status(200).json({ type: 'ok', data: {...userProfile, formations: userFormations} })
        else res.status(400).json({ type: 'fail', reason: 'Unable to load user profile' })
    } catch (error) {
        res.status(500).json({ type: 'fail', reason: 'Unable to load user profile' })
    }
}